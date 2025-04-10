import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'repos/graphics',
  link: '/graphics/',
  sidebar: [
    {
      text: '现代计算机图形学入门',
      link: 'README.md',
      items: [
        'Part-1.md',
        'Part-2.md',
        'Part-3.md',
        'Part-4.md',
        'Part-5.md',
        'Part-6.md',
      ]
    }, 
  ]
})
