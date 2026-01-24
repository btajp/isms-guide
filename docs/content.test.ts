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
    it('should have requirements/index.md', () => {
      expect(existsSync(resolve(docsDir, 'requirements/index.md'))).toBe(true)
    })
  })

  describe('Controls Section', () => {
    it('should have controls/index.md', () => {
      expect(existsSync(resolve(docsDir, 'controls/index.md'))).toBe(true)
    })
  })

  describe('Glossary Section', () => {
    it('should have glossary/index.md', () => {
      expect(existsSync(resolve(docsDir, 'glossary/index.md'))).toBe(true)
    })
  })

  describe('Mermaid Support', () => {
    it('should have mermaid example in at least one file', () => {
      const indexContent = readFileSync(resolve(docsDir, 'index.md'), 'utf-8')
      const hasExamplePage = existsSync(resolve(docsDir, 'requirements/index.md'))

      if (hasExamplePage) {
        const reqContent = readFileSync(resolve(docsDir, 'requirements/index.md'), 'utf-8')
        const hasMermaid = indexContent.includes('mermaid') || reqContent.includes('mermaid')
        expect(hasMermaid).toBe(true)
      }
    })
  })
})
