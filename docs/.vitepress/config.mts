import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

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
      /^\/isms\//,
      /^\/controls$/
    ],

    // Sitemap (Cloudflare Pages)
    sitemap: {
      hostname: 'https://isms-guide.com'
    },

    // Head meta tags
    head: [
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'og:type', content: 'website' }],
      ['meta', { name: 'og:locale', content: 'ja_JP' }],
      ['meta', { name: 'og:site_name', content: 'ISMS Guide' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    // Theme configuration
    themeConfig: {
      // Navigation
      nav: [
        { text: 'Home', link: '/' },
        { text: '要求事項', link: '/requirements/' },
        { text: '管理策', link: '/controls/' },
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
              { text: 'A.5.7 脅威インテリジェンス', link: '/controls/a-5-7' },
              { text: 'A.5.23 クラウドサービス', link: '/controls/a-5-23' },
              { text: 'A.5.24 インシデント管理', link: '/controls/a-5-24' },
              { text: 'A.5.30 ICT事業継続', link: '/controls/a-5-30' }
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
        '/about/': [
          {
            text: 'サイトについて',
            items: [
              { text: '著作権・出典', link: '/about/copyright' }
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
        message: '<a href="https://github.com/btajp/isms-guide/blob/main/LICENSE">MIT / CC0 Dual License</a> | <a href="/about/copyright">著作権・出典について</a>',
        copyright: '&copy; 2026 <a href="https://btajp.org">Business Technology Association Japan</a>'
      },

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
    lastUpdated: true
  })
)
