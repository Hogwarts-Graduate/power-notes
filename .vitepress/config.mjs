import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/power-notes/',
  head: [["link", { rel: "icon", href: "/power-notes/icons/book.svg" }]],
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
        text: 'Examples',
        items: [
          { text: "python", link: "/notes/testfiles/markdown-examples" },
          { text: "javascript", link: "/notes/testfiles/markdown-examples1" },
        ]
      },
      {
        text: 'Examples2', link: '/notes/testfiles/markdown-examples2'
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

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
