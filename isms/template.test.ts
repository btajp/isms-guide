import { describe, it, expect } from 'vitest'
import { existsSync } from 'fs'
import { resolve } from 'path'

const rootDir = resolve(__dirname, '..')

describe('ISMS Template Structure', () => {
  describe('Directory Structure', () => {
    it('should have isms/ directory', () => {
      expect(existsSync(resolve(rootDir, 'isms'))).toBe(true)
    })

    it('should have isms/manual/ directory', () => {
      expect(existsSync(resolve(rootDir, 'isms/manual'))).toBe(true)
    })

    it('should have isms/soa/ directory', () => {
      expect(existsSync(resolve(rootDir, 'isms/soa'))).toBe(true)
    })

    it('should have isms/procedures/ directory', () => {
      expect(existsSync(resolve(rootDir, 'isms/procedures'))).toBe(true)
    })

    it('should have isms/records/ directory', () => {
      expect(existsSync(resolve(rootDir, 'isms/records'))).toBe(true)
    })
  })

  describe('README', () => {
    it('should have isms/README.md', () => {
      expect(existsSync(resolve(rootDir, 'isms/README.md'))).toBe(true)
    })
  })

  describe('Guide Directory', () => {
    it('should have guide/ directory', () => {
      expect(existsSync(resolve(rootDir, 'guide'))).toBe(true)
    })

    it('should have guide/index.md', () => {
      expect(existsSync(resolve(rootDir, 'guide/index.md'))).toBe(true)
    })
  })
})
