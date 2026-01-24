import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    title: 'ISMS Guide',
    description: 'ISO/IEC 27001:2022 対応 ISMS 構築ガイド',
    lang: 'ja-JP',

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
              { text: '概要', link: '/requirements/' },
              { text: '4. 組織の状況', link: '/requirements/4' },
              { text: '5. リーダーシップ', link: '/requirements/5' },
              { text: '6. 計画', link: '/requirements/6' },
              { text: '7. 支援', link: '/requirements/7' },
              { text: '8. 運用', link: '/requirements/8' },
              { text: '9. パフォーマンス評価', link: '/requirements/9' },
              { text: '10. 改善', link: '/requirements/10' }
            ]
          }
        ],
        '/controls/': [
          {
            text: '管理策 (Annex A)',
            items: [
              { text: '概要', link: '/controls/' },
              { text: '5. 組織的管理策', link: '/controls/5' },
              { text: '6. 人的管理策', link: '/controls/6' },
              { text: '7. 物理的管理策', link: '/controls/7' },
              { text: '8. 技術的管理策', link: '/controls/8' }
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
        message: 'MIT License',
        copyright: 'Copyright 2024 btajp'
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
