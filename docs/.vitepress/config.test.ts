import { describe, it, expect } from 'vitest'
import config from './config.mts'

describe('VitePress Config', () => {
  describe('Basic Settings', () => {
    it('should have correct title', () => {
      expect(config.title).toBe('ISMS Guide')
    })

    it('should have description', () => {
      expect(config.description).toBeDefined()
      expect(config.description).toContain('ISO/IEC 27001')
    })

    it('should have Japanese language', () => {
      expect(config.lang).toBe('ja-JP')
    })
  })

  describe('Theme Config', () => {
    it('should have navigation', () => {
      expect(config.themeConfig?.nav).toBeDefined()
      expect(Array.isArray(config.themeConfig?.nav)).toBe(true)
    })

    it('should have sidebar', () => {
      expect(config.themeConfig?.sidebar).toBeDefined()
    })

    it('should have search enabled', () => {
      expect(config.themeConfig?.search).toBeDefined()
      expect(config.themeConfig?.search?.provider).toBe('local')
    })

    it('should have Japanese footer labels', () => {
      expect(config.themeConfig?.docFooter).toBeDefined()
    })
  })

  describe('Mermaid Integration', () => {
    it('should have mermaid configured', () => {
      expect(config.mermaid).toBeDefined()
    })
  })

  describe('SEO Settings', () => {
    it('should have sitemap configured', () => {
      expect(config.sitemap).toBeDefined()
    })

    it('should have head meta tags', () => {
      expect(config.head).toBeDefined()
      expect(Array.isArray(config.head)).toBe(true)
    })
  })
})
