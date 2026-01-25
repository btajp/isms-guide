import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

const docsDir = resolve(__dirname)

describe('Content Structure', () => {
  describe('Index Page', () => {
    it('should have index.md', () => {
      expect(existsSync(resolve(docsDir, 'index.md'))).toBe(true)
    })

    it('should have hero section', () => {
      const content = readFileSync(resolve(docsDir, 'index.md'), 'utf-8')
      expect(content).toContain('hero:')
      expect(content).toContain('ISMS')
    })
  })

  describe('Requirements Section', () => {
    it('should have requirements/index.md with actual content', () => {
      const filePath = resolve(docsDir, 'requirements/index.md')
      expect(existsSync(filePath)).toBe(true)

      const content = readFileSync(filePath, 'utf-8')
      // Should have section anchors for clauses 4-10
      expect(content).toContain('{#4}')
      expect(content).toContain('{#5}')
      expect(content).toContain('{#6}')
      expect(content).toContain('{#7}')
      expect(content).toContain('{#8}')
      expect(content).toContain('{#9}')
      expect(content).toContain('{#10}')
    })

    it('should have 5 detail pages for requirements', () => {
      const requiredPages = ['6-1-2.md', '6-1-3.md', '7-5.md', '9-2.md', '9-3.md']
      for (const page of requiredPages) {
        const filePath = resolve(docsDir, 'requirements', page)
        expect(existsSync(filePath), `${page} should exist`).toBe(true)
      }
    })

    it('should have mermaid diagrams in requirements detail pages', () => {
      const filePath = resolve(docsDir, 'requirements/6-1-2.md')
      if (existsSync(filePath)) {
        const content = readFileSync(filePath, 'utf-8')
        expect(content).toContain('```mermaid')
      }
    })
  })

  describe('Controls Section', () => {
    it('should have controls/index.md with actual content', () => {
      const filePath = resolve(docsDir, 'controls/index.md')
      expect(existsSync(filePath)).toBe(true)

      const content = readFileSync(filePath, 'utf-8')
      // Should have section headers and anchors for individual controls
      expect(content).toContain('## 5. 組織的管理策')
      expect(content).toContain('## 6. 人的管理策')
      expect(content).toContain('## 7. 物理的管理策')
      expect(content).toContain('## 8. 技術的管理策')
      expect(content).toContain('{#a-5-1}')
    })

    it('should have 13 detail pages for controls', () => {
      const requiredPages = [
        'a-5-7.md',
        'a-5-23.md',
        'a-5-24.md',
        'a-5-30.md',
        'a-8-8.md',
        'a-8-9.md',
        'a-8-10.md',
        'a-8-11.md',
        'a-8-12.md',
        'a-8-16.md',
        'a-8-23.md',
        'a-8-25.md',
        'a-8-28.md',
      ]
      for (const page of requiredPages) {
        const filePath = resolve(docsDir, 'controls', page)
        expect(existsSync(filePath), `${page} should exist`).toBe(true)
      }
    })

    it('should have mermaid diagrams in controls detail pages', () => {
      const filePath = resolve(docsDir, 'controls/a-5-7.md')
      if (existsSync(filePath)) {
        const content = readFileSync(filePath, 'utf-8')
        expect(content).toContain('```mermaid')
      }
    })
  })

  describe('Glossary Section', () => {
    it('should have glossary/index.md', () => {
      expect(existsSync(resolve(docsDir, 'glossary/index.md'))).toBe(true)
    })
  })

  describe('Mermaid Support', () => {
    it('should have mermaid diagrams in detail pages', () => {
      // Detail pages should have mermaid diagrams
      const reqDetailPath = resolve(docsDir, 'requirements/6-1-2.md')
      if (existsSync(reqDetailPath)) {
        const content = readFileSync(reqDetailPath, 'utf-8')
        expect(content).toContain('```mermaid')
      }

      const ctrlDetailPath = resolve(docsDir, 'controls/a-5-7.md')
      if (existsSync(ctrlDetailPath)) {
        const content = readFileSync(ctrlDetailPath, 'utf-8')
        expect(content).toContain('```mermaid')
      }
    })
  })

  describe('Internal Links', () => {
    it('should have correct internal links in requirements index', () => {
      const content = readFileSync(resolve(docsDir, 'requirements/index.md'), 'utf-8')
      // Links to detail pages should use relative paths
      expect(content).toContain('./6-1-2')
      expect(content).toContain('./9-2')
    })

    it('should have correct internal links in controls index', () => {
      const content = readFileSync(resolve(docsDir, 'controls/index.md'), 'utf-8')
      // Links to detail pages should use relative paths
      expect(content).toContain('./a-5-7')
      expect(content).toContain('./a-8-8')
    })
  })
})
