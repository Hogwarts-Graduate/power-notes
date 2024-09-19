import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/power-notes/',
  head: [["link", { rel: "icon", href: "icons/book.svg" }]],
  title: "Power Notes",
  description: "a notes website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icons/book.svg',

    outlineTitle: 'Table of Contents',
    outline: [2, 4],
    nav: [
      { text: 'Home', link: '/' },

      {
        text: '深度学习',
        items: [
          {
            text: 'pending',
            link: '/notes/pending/pending'
          },
        ]
      },

      {
        text: '大模型相关',
        items: [
          {
            text: 'pending',
            link: '/notes/pending/pending'
          },
        ]
      },

      {
        text: '算法相关',
        items: [
          {
            text: 'pending',
            link: '/notes/pending/pending'
          },
        ]
      },

      {
        text: 'UE学习',
        items: [
          {
            text: 'pending',
            link: '/notes/pending/pending'
          },
        ]
      },

      {
        text: 'web开发',
        items: [
          {
            text: 'pending',
            link: '/notes/pending/pending'
          },
        ]
      },

      {
        text: '其他教程',
        items: [
          { text: 'Vitepress', link: 'notes/others/Vitepress' },
          { text: 'NVM', link: 'notes/others/NVM' },
          { text: 'Git', link: 'notes/others/Git' },
          { text: 'Ubuntu', link: 'notes/others/Ubuntu轻松用' },
        ]
      },

      {
        text: '关于本站',
        link: '/notes/about/site'
      }
    ],

    // sidebar: false,
    // aside: 'left',
    sidebar: [
      {
        // text: 'Examples',
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    footer: {
      message: '千里之行，始于足下',
    },

    // search bar
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search Documents",
            buttonAriaLabel: "Search",
          },
          modal: {
            noResultsText: "No Results",
            resetButtonTitle: "Clear Conditions",
            footer: {
              selectText: "select",
              navigateText: "Toggle",
            },
          },
        },
      },
    },
  }
})
