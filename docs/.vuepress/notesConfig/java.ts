import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'repos/java',
  link: '/java/',
  sidebar: [
    {
      text: 'Java',
      link: 'README.md',
      items: [
        'Part-01.md',
        'Part-02.md',
        'Part-03.md',
      ]
    }, 
  ]
})
