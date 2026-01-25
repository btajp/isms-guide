import { describe, it, expect } from 'vitest'
import { existsSync } from 'fs'
import { resolve } from 'path'

const rootDir = resolve(__dirname)

describe('ISMS Template Structure', () => {
  describe('Directory Structure', () => {
    it('should have docs/isms/ directory', () => {
      expect(existsSync(resolve(rootDir, 'docs/isms'))).toBe(true)
    })

    it('should have docs/isms/manual/ directory', () => {
      expect(existsSync(resolve(rootDir, 'docs/isms/manual'))).toBe(true)
    })

    it('should have docs/isms/soa/ directory', () => {
      expect(existsSync(resolve(rootDir, 'docs/isms/soa'))).toBe(true)
    })

    it('should have docs/isms/procedures/ directory', () => {
      expect(existsSync(resolve(rootDir, 'docs/isms/procedures'))).toBe(true)
    })

    it('should have docs/isms/records/ directory', () => {
      expect(existsSync(resolve(rootDir, 'docs/isms/records'))).toBe(true)
    })
  })

  describe('Index', () => {
    it('should have docs/isms/index.md', () => {
      expect(existsSync(resolve(rootDir, 'docs/isms/index.md'))).toBe(true)
    })
  })

  describe('Templates Directory', () => {
    it('should have docs/templates/ directory', () => {
      expect(existsSync(resolve(rootDir, 'docs/templates'))).toBe(true)
    })

    it('should have docs/templates/index.md', () => {
      expect(existsSync(resolve(rootDir, 'docs/templates/index.md'))).toBe(true)
    })
  })
})
