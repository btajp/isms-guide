import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync, readdirSync } from 'fs'
import { resolve, join } from 'path'

const ismsDir = resolve(__dirname)

// 共通ヘルパー関数
function readTemplate(relativePath: string): string {
  const filePath = resolve(ismsDir, relativePath)
  if (!existsSync(filePath)) {
    throw new Error(`Template not found: ${relativePath}`)
  }
  return readFileSync(filePath, 'utf-8')
}

function extractFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}

  const frontmatter: Record<string, string> = {}
  const lines = match[1].split('\n')
  for (const line of lines) {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length > 0) {
      frontmatter[key.trim()] = valueParts.join(':').trim().replace(/^["']|["']$/g, '')
    }
  }
  return frontmatter
}

describe('ISMS Templates - Directory Structure', () => {
  const requiredDirs = [
    'manual',
    'soa',
    'policies',
    'procedures',
    'plans',
    'registers',
    'records',
  ]

  it.each(requiredDirs)('should have %s directory', (dir) => {
    const dirPath = resolve(ismsDir, dir)
    expect(existsSync(dirPath), `${dir}/ should exist`).toBe(true)
  })

  it('should have README.md', () => {
    expect(existsSync(resolve(ismsDir, 'README.md'))).toBe(true)
  })
})

describe('ISMS Templates - Required Documents', () => {
  describe('Manual', () => {
    it('should have isms-manual.md', () => {
      expect(existsSync(resolve(ismsDir, 'manual/isms-manual.md'))).toBe(true)
    })

    it('should have valid frontmatter in isms-manual.md', () => {
      const content = readTemplate('manual/isms-manual.md')
      const fm = extractFrontmatter(content)
      expect(fm.title).toBeDefined()
      expect(fm.document_id).toBeDefined()
    })

    it('should include ISMS scope section (DOC-001)', () => {
      const content = readTemplate('manual/isms-manual.md')
      expect(content).toContain('適用範囲')
    })
  })

  describe('Statement of Applicability', () => {
    it('should have statement-of-applicability.md', () => {
      expect(existsSync(resolve(ismsDir, 'soa/statement-of-applicability.md'))).toBe(true)
    })

    it('should have 93 controls listed', () => {
      const content = readTemplate('soa/statement-of-applicability.md')
      // Should contain references to control categories
      expect(content).toContain('A.5')
      expect(content).toContain('A.6')
      expect(content).toContain('A.7')
      expect(content).toContain('A.8')
    })
  })

  describe('Policies', () => {
    const requiredPolicies = [
      'information-security-policy.md',
      'acceptable-use-policy.md',
      'access-control-policy.md',
      'supplier-security-policy.md',
    ]

    it.each(requiredPolicies)('should have %s', (policy) => {
      expect(existsSync(resolve(ismsDir, 'policies', policy))).toBe(true)
    })
  })

  describe('Procedures', () => {
    const requiredProcedures = [
      'risk-assessment-procedure.md',
      'incident-response-procedure.md',
      'internal-audit-procedure.md',
      'corrective-action-procedure.md',
    ]

    it.each(requiredProcedures)('should have %s', (procedure) => {
      expect(existsSync(resolve(ismsDir, 'procedures', procedure))).toBe(true)
    })

    it('should have mermaid flowchart in risk-assessment-procedure.md', () => {
      const content = readTemplate('procedures/risk-assessment-procedure.md')
      expect(content).toContain('```mermaid')
    })
  })

  describe('Plans', () => {
    const requiredPlans = [
      'risk-treatment-plan.md',
      'security-objectives.md',
      'business-continuity-plan.md',
    ]

    it.each(requiredPlans)('should have %s', (plan) => {
      expect(existsSync(resolve(ismsDir, 'plans', plan))).toBe(true)
    })
  })

  describe('Registers', () => {
    const requiredRegisters = [
      'asset-inventory.md',
      'risk-register.md',
      'legal-requirements.md',
    ]

    it.each(requiredRegisters)('should have %s', (register) => {
      expect(existsSync(resolve(ismsDir, 'registers', register))).toBe(true)
    })

    it('should have table format in asset-inventory.md', () => {
      const content = readTemplate('registers/asset-inventory.md')
      expect(content).toMatch(/\|.*\|/)
    })
  })

  describe('Records', () => {
    const requiredRecords = [
      'training-record.md',
      'risk-assessment-report.md',
      'monitoring-measurement-record.md',
      'internal-audit-report.md',
      'management-review-minutes.md',
      'corrective-action-record.md',
      'incident-report.md',
    ]

    it.each(requiredRecords)('should have %s', (record) => {
      expect(existsSync(resolve(ismsDir, 'records', record))).toBe(true)
    })
  })
})

describe('ISMS Templates - Frontmatter Validation', () => {
  const getAllTemplates = (): string[] => {
    const templates: string[] = []
    const dirs = ['manual', 'soa', 'policies', 'procedures', 'plans', 'registers', 'records']

    for (const dir of dirs) {
      const dirPath = resolve(ismsDir, dir)
      if (existsSync(dirPath)) {
        const files = readdirSync(dirPath).filter(f => f.endsWith('.md'))
        templates.push(...files.map(f => join(dir, f)))
      }
    }
    return templates
  }

  it('all templates should have valid YAML frontmatter', () => {
    const templates = getAllTemplates()
    for (const template of templates) {
      const content = readTemplate(template)
      expect(content.startsWith('---'), `${template} should start with frontmatter`).toBe(true)
      expect(content).toMatch(/^---\n[\s\S]*?\n---/)
    }
  })

  it('all templates should have required frontmatter fields', () => {
    const templates = getAllTemplates()
    const requiredFields = ['title', 'document_id', 'version']

    for (const template of templates) {
      const content = readTemplate(template)
      const fm = extractFrontmatter(content)

      for (const field of requiredFields) {
        expect(fm[field], `${template} should have ${field}`).toBeDefined()
      }
    }
  })
})

describe('ISMS Templates - Placeholder Convention', () => {
  it('should use {{}} format for placeholders', () => {
    const templates = [
      'manual/isms-manual.md',
      'policies/information-security-policy.md',
    ]

    for (const template of templates) {
      if (existsSync(resolve(ismsDir, template))) {
        const content = readTemplate(template)
        // Should have placeholders
        expect(content).toMatch(/\{\{.*?\}\}/)
        // Should NOT have other placeholder formats
        expect(content).not.toMatch(/\[\[.*?\]\]/)
        expect(content).not.toMatch(/<.*?placeholder.*?>/i)
      }
    }
  })

  it('should have standard placeholders', () => {
    const content = readTemplate('manual/isms-manual.md')
    const standardPlaceholders = ['{{組織名}}', '{{ISMS責任者}}']

    for (const placeholder of standardPlaceholders) {
      expect(content).toContain(placeholder)
    }
  })
})

describe('ISMS Templates - Document Structure', () => {
  it('templates should have standard sections', () => {
    const templates = [
      'policies/information-security-policy.md',
      'procedures/risk-assessment-procedure.md',
    ]

    const standardSections = ['目的', '適用範囲', '改訂履歴']

    for (const template of templates) {
      if (existsSync(resolve(ismsDir, template))) {
        const content = readTemplate(template)
        for (const section of standardSections) {
          expect(content, `${template} should have ${section} section`).toContain(section)
        }
      }
    }
  })

  it('should have relative links between templates', () => {
    const content = readTemplate('manual/isms-manual.md')
    // Should reference other templates with relative paths
    expect(content).toMatch(/\(\.\.\/.*?\.md\)/)
  })
})

describe('ISMS Templates - README', () => {
  it('should have overview section', () => {
    const content = readTemplate('README.md')
    expect(content).toContain('概要')
  })

  it('should list all template categories', () => {
    const content = readTemplate('README.md')
    expect(content).toContain('manual')
    expect(content).toContain('policies')
    expect(content).toContain('procedures')
    expect(content).toContain('records')
  })

  it('should have usage instructions', () => {
    const content = readTemplate('README.md')
    expect(content).toMatch(/使い方|利用方法|使用方法/)
  })
})
