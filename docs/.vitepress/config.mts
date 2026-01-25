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

      // Social links
      socialLinks: [
        { icon: 'github', link: 'https://github.com/btajp/isms-guide' }
      ],

      // Footer
      footer: {
        message: '<a href="https://github.com/btajp/isms-guide/blob/main/LICENSE">MIT / CC0 Dual License</a> | <a href="/about/copyright">著作権・出典について</a>',
        copyright: '<a href="https://github.com/btajp/isms-guide" target="_blank" style="display: inline-flex; align-items: center; vertical-align: middle;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a> &copy; 2026 <a href="https://btajp.org">Business Technology Association Japan</a>'
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
