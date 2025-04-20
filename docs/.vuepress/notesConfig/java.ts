import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'repos/java',
  link: '/java/',
  sidebar: [
    {
      text: 'Java 数据结构',
      link: 'README.md',
      items: [
        'Part-01.md',
      ]
    }, 
  ]
})
