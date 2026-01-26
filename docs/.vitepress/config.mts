import { defineConfig, HeadConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { buildEndGenerateOpenGraphImages } from '@nolebase/vitepress-plugin-og-image/vitepress'
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const mplus1p = readFileSync(resolve(__dirname, 'fonts/MPLUS1p-Bold.ttf'))

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: 'ISMS Guide',
    description: 'ISO/IEC 27001:2022 対応 ISMS 構築ガイド',
    lang: 'ja-JP',

    // Ignore dead links to pages not yet created
    ignoreDeadLinks: [
      /^\/controls\/a-\d+-\d+$/,
      /^\/requirements\/\d+-\d+(-\d+)?$/,
      /^\/controls$/
    ],

    // Sitemap (Cloudflare Pages)
    sitemap: {
      hostname: 'https://isms-guide.com'
    },

    // Head meta tags
    head: [
      ['meta', { name: 'theme-color', content: '#10b981' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'ja_JP' }],
      ['meta', { property: 'og:site_name', content: 'ISMS Guide' }],
      // Favicon
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
      ['link', { rel: 'manifest', href: '/site.webmanifest' }]
    ],

    // Theme configuration
    themeConfig: {
      // Logo
      logo: '/isms_guide_logo.svg',
      siteTitle: false,

      // Navigation
      nav: [
        { text: 'Home', link: '/' },
        { text: '要求事項', link: '/requirements/' },
        { text: '管理策', link: '/controls/' },
        { text: 'ブログ', link: '/blog/' },
        { text: 'テンプレート', link: '/templates/' },
        { text: '用語集', link: '/glossary/' }
      ],

      // Sidebar
      sidebar: {
        '/requirements/': [
          {
            text: '要求事項 (箇条4-10)',
            items: [
              { text: '概要', link: '/requirements/' }
            ]
          },
          {
            text: '詳細ページ',
            collapsed: true,
            items: [
              { text: '6.1.2 リスクアセスメント', link: '/requirements/6-1-2' },
              { text: '6.1.3 リスク対応', link: '/requirements/6-1-3' },
              { text: '7.5 文書化した情報', link: '/requirements/7-5' },
              { text: '9.2 内部監査', link: '/requirements/9-2' },
              { text: '9.3 マネジメントレビュー', link: '/requirements/9-3' }
            ]
          }
        ],
        '/controls/': [
          {
            text: '管理策 (Annex A)',
            items: [
              { text: '概要', link: '/controls/' }
            ]
          },
          {
            text: '組織的管理策 (詳細)',
            collapsed: true,
            items: [
              { text: 'A.5.5 関係当局との連絡', link: '/controls/a-5-5' },
              { text: 'A.5.6 専門組織との連絡', link: '/controls/a-5-6' },
              { text: 'A.5.7 脅威インテリジェンス', link: '/controls/a-5-7' },
              { text: 'A.5.8 プロジェクトマネジメント', link: '/controls/a-5-8' },
              { text: 'A.5.23 クラウドサービス', link: '/controls/a-5-23' },
              { text: 'A.5.24 インシデント管理', link: '/controls/a-5-24' },
              { text: 'A.5.30 ICT事業継続', link: '/controls/a-5-30' },
              { text: 'A.5.33 記録の保護', link: '/controls/a-5-33' },
              { text: 'A.5.37 操作手順書', link: '/controls/a-5-37' }
            ]
          },
          {
            text: '人的管理策 (詳細)',
            collapsed: true,
            items: [
              { text: 'A.6.1 選考', link: '/controls/a-6-1' }
            ]
          },
          {
            text: '物理的管理策 (詳細)',
            collapsed: true,
            items: [
              { text: 'A.7.1 物理的セキュリティ境界', link: '/controls/a-7-1' },
              { text: 'A.7.2 物理的入退', link: '/controls/a-7-2' },
              { text: 'A.7.3 オフィス・施設のセキュリティ', link: '/controls/a-7-3' },
              { text: 'A.7.4 物理的セキュリティの監視', link: '/controls/a-7-4' },
              { text: 'A.7.6 セキュリティ領域での作業', link: '/controls/a-7-6' },
              { text: 'A.7.8 装置の設置及び保護', link: '/controls/a-7-8' },
              { text: 'A.7.12 ケーブル配線のセキュリティ', link: '/controls/a-7-12' },
              { text: 'A.7.13 装置の保守', link: '/controls/a-7-13' },
              { text: 'A.7.14 装置の処分又は再利用', link: '/controls/a-7-14' }
            ]
          },
          {
            text: '技術的管理策 (詳細)',
            collapsed: true,
            items: [
              { text: 'A.8.8 脆弱性管理', link: '/controls/a-8-8' },
              { text: 'A.8.9 構成管理', link: '/controls/a-8-9' },
              { text: 'A.8.10 情報の削除', link: '/controls/a-8-10' },
              { text: 'A.8.11 データマスキング', link: '/controls/a-8-11' },
              { text: 'A.8.12 データ漏えい防止', link: '/controls/a-8-12' },
              { text: 'A.8.16 監視活動', link: '/controls/a-8-16' },
              { text: 'A.8.23 ウェブフィルタリング', link: '/controls/a-8-23' },
              { text: 'A.8.25 開発ライフサイクル', link: '/controls/a-8-25' },
              { text: 'A.8.28 セキュアコーディング', link: '/controls/a-8-28' }
            ]
          }
        ],
        '/glossary/': [
          {
            text: '用語集',
            items: [
              { text: '用語一覧', link: '/glossary/' }
            ]
          }
        ],
        '/templates/': [
          {
            text: 'テンプレート',
            items: [
              { text: 'テンプレート一覧', link: '/templates/' },
              { text: 'フォーク利用ガイド', link: '/templates/fork-guide' },
              { text: '仮想組織の設定', link: '/templates/virtual-organization' }
            ]
          }
        ],
        '/isms/guidelines/': [
          {
            text: 'ガイドライン',
            items: [
              { text: '概要', link: '/isms/guidelines/' },
              { text: '従業員向けセキュリティガイドライン', link: '/isms/guidelines/employee-security-guideline' },
              { text: 'エンジニア向けセキュリティガイドライン', link: '/isms/guidelines/engineer-security-guideline' }
            ]
          }
        ],
        '/isms/manual/': [
          {
            text: 'マニュアル',
            items: [
              { text: 'ISMSマニュアル', link: '/isms/manual/isms-manual' }
            ]
          }
        ],
        '/isms/policies/': [
          {
            text: '方針',
            items: [
              { text: '情報セキュリティ方針', link: '/isms/policies/information-security-policy' },
              { text: 'アクセス制御方針', link: '/isms/policies/access-control-policy' },
              { text: '利用規定', link: '/isms/policies/acceptable-use-policy' },
              { text: '供給者セキュリティ方針', link: '/isms/policies/supplier-security-policy' },
              { text: '技術的セキュリティ方針', link: '/isms/policies/technical-security-policy' }
            ]
          }
        ],
        '/isms/procedures/': [
          {
            text: '手順書',
            items: [
              { text: 'リスクアセスメント手順', link: '/isms/procedures/risk-assessment-procedure' },
              { text: 'インシデント対応手順', link: '/isms/procedures/incident-response-procedure' },
              { text: '内部監査手順', link: '/isms/procedures/internal-audit-procedure' },
              { text: '是正処置手順', link: '/isms/procedures/corrective-action-procedure' }
            ]
          }
        ],
        '/isms/plans/': [
          {
            text: '計画書',
            items: [
              { text: '情報セキュリティ目的', link: '/isms/plans/security-objectives' },
              { text: 'リスク対応計画', link: '/isms/plans/risk-treatment-plan' },
              { text: '事業継続計画', link: '/isms/plans/business-continuity-plan' }
            ]
          }
        ],
        '/isms/records/': [
          {
            text: '記録',
            items: [
              { text: 'リスクアセスメント報告書', link: '/isms/records/risk-assessment-report' },
              { text: 'インシデント報告書', link: '/isms/records/incident-report' },
              { text: '内部監査報告書', link: '/isms/records/internal-audit-report' },
              { text: 'マネジメントレビュー議事録', link: '/isms/records/management-review-minutes' },
              { text: '是正処置記録', link: '/isms/records/corrective-action-record' },
              { text: '教育訓練記録', link: '/isms/records/training-record' },
              { text: '監視測定記録', link: '/isms/records/monitoring-measurement-record' }
            ]
          }
        ],
        '/isms/registers/': [
          {
            text: '台帳',
            items: [
              { text: 'リスク台帳', link: '/isms/registers/risk-register' },
              { text: '資産台帳', link: '/isms/registers/asset-inventory' },
              { text: '法的要求事項台帳', link: '/isms/registers/legal-requirements' }
            ]
          }
        ],
        '/isms/soa/': [
          {
            text: '適用宣言書',
            items: [
              { text: '適用宣言書', link: '/isms/soa/statement-of-applicability' }
            ]
          }
        ],
        '/about/': [
          {
            text: 'サイトについて',
            items: [
              { text: '著作権・出典', link: '/about/copyright' }
            ]
          }
        ],
        '/blog/': [
          {
            text: 'ブログ',
            items: [
              { text: '記事一覧', link: '/blog/' }
            ]
          }
        ]
      },

      // Search
      search: {
        provider: 'local',
        options: {
          translations: {
            button: {
              buttonText: '検索',
              buttonAriaLabel: '検索'
            },
            modal: {
              noResultsText: '該当する結果が見つかりませんでした',
              resetButtonTitle: 'クリア',
              footer: {
                selectText: '選択',
                navigateText: '移動',
                closeText: '閉じる'
              }
            }
          }
        }
      },

      // Footer
      docFooter: {
        prev: '前のページ',
        next: '次のページ'
      },

      // Outline
      outline: {
        label: '目次',
        level: [2, 3]
      },

      // Footer
      footer: {
        message: '<a href="https://github.com/btajp/isms-guide/blob/main/LICENSE">MIT</a> / <a href="https://github.com/btajp/isms-guide/blob/main/LICENSE">CC BY-NC 4.0</a> | <a href="/about/copyright">著作権・出典について</a>',
        copyright: '&copy; 2026 <a href="https://btajp.org">Business Technology Association Japan</a>'
      },

      // Social links
      socialLinks: [
        { icon: 'github', link: 'https://github.com/btajp/isms-guide' }
      ],

      // Edit link
      editLink: {
        pattern: 'https://github.com/btajp/isms-guide/edit/main/docs/:path',
        text: 'このページを編集する'
      },

      // Last updated
      lastUpdated: {
        text: '最終更新日',
        formatOptions: {
          dateStyle: 'long'
        }
      },

      // Return to top
      returnToTopLabel: 'トップに戻る',

      // Dark mode
      darkModeSwitchLabel: 'ダークモード',
      lightModeSwitchTitle: 'ライトモードに切り替え',
      darkModeSwitchTitle: 'ダークモードに切り替え'
    },


    // Mermaid configuration
    mermaid: {
      theme: 'default'
    },

    // Mermaid plugin configuration
    mermaidPlugin: {
      class: 'mermaid'
    },

    // Last updated
    lastUpdated: true,

    // Dynamic OGP meta tags per page
    transformHead({ pageData }) {
      const head: HeadConfig[] = []
      const siteUrl = 'https://isms-guide.com'

      // og:title
      const title = pageData.frontmatter.title || pageData.title || 'ISMS Guide'
      head.push(['meta', { property: 'og:title', content: title }])

      // og:description
      const description =
        pageData.frontmatter.description || 'ISO/IEC 27001:2022 対応 ISMS 構築ガイド'
      head.push(['meta', { property: 'og:description', content: description }])

      // og:url
      const relativePath = pageData.relativePath
        .replace(/\.md$/, '.html')
        .replace(/index\.html$/, '')
      const url = `${siteUrl}/${relativePath}`
      head.push(['meta', { property: 'og:url', content: url }])

      // og:image - Path format: /{dir}/og-{filename}.png
      // Generated by @nolebase/vitepress-plugin-og-image for sidebar pages
      // For non-sidebar pages, we still set the meta tag (image may not exist)
      const ogImagePath = pageData.relativePath
        .replace(/\.md$/, '.png')
        .replace(/([^/]+)\.png$/, 'og-$1.png')
      const ogImageUrl = `${siteUrl}/${ogImagePath}`
      head.push(['meta', { property: 'og:image', content: ogImageUrl }])
      head.push(['meta', { property: 'og:image:width', content: '1200' }])
      head.push(['meta', { property: 'og:image:height', content: '630' }])

      // Twitter Cards (uses og:image by default, but we set twitter:image explicitly)
      head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])
      head.push(['meta', { name: 'twitter:title', content: title }])
      head.push(['meta', { name: 'twitter:description', content: description }])
      head.push(['meta', { name: 'twitter:image', content: ogImageUrl }])

      return head
    },

    // Generate OGP images at build time
    async buildEnd(siteConfig) {
      await buildEndGenerateOpenGraphImages({
        baseUrl: 'https://isms-guide.com',
        category: {
          byPathPrefix: [
            { prefix: 'controls', text: '管理策' },
            { prefix: 'requirements', text: '要求事項' },
            { prefix: 'templates', text: 'テンプレート' },
            { prefix: 'glossary', text: '用語集' },
            { prefix: 'about', text: 'サイト情報' },
            { prefix: 'isms/guidelines', text: 'ガイドライン' },
            { prefix: 'isms/policies', text: '方針' },
            { prefix: 'isms/procedures', text: '手順書' },
            { prefix: 'isms/records', text: '記録' },
            { prefix: 'isms/plans', text: '計画書' },
            { prefix: 'isms/registers', text: '台帳' },
            { prefix: 'isms/soa', text: '適用宣言書' },
            { prefix: 'isms/manual', text: 'マニュアル' },
            { prefix: 'blog', text: 'ブログ' },
          ],
        },
        maxCharactersPerLine: 12,
        svgFontBuffers: [mplus1p],
      })(siteConfig)
    }
  })
)
