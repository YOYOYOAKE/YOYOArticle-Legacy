import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { notes } from './notes'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'YOYOArticle',
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://oss.yoake.cc/yoyopics/avatar-round.webp'
    }]
  ],

  bundler: viteBundler(),

  theme: plumeTheme({
    notes,

    // 添加您的部署域名
    hostname: 'https://www.yoake.cc',
    footer: {
      message: `
        <span>
          Copyright ©️ 2024 - 2025 YOAKE | Powered by <a href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a href="https://theme-plume.vuejs.press/">Plume</a>
        </span>
        <br/>
        <span style="font-size: 10px;">
          冀 ICP 备 2025102465号-1 · 京公网安备 11011502038573 号
        </span>`,
    },

    plugins: {
      search: false,
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: [
          'shell',
          'bash',
          'typescript',
          'javascript',
          'c',
          'sql',
          'c++',
          'json',
          'powershell',
          'toml',
          'yml',
          'yaml',
          'java',
        ],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
        //   include: true,
        //   chart: true,
        //   echarts: true,
        //   mermaid: true,
        //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,
        // caniuse: true,
        // plot: true,
        // bilibili: true,
        // youtube: true,
        // icons: true,
        // codepen: true,
        // replit: true,
        // codeSandbox: true,
        // jsfiddle: true,
        // repl: {
        //   go: true,
        //   rust: true,
        //   kotlin: true,
        // },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
