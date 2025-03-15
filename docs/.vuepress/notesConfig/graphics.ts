import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'graphics',
  link: '/graphics/',
  sidebar: [
    'README.md',
    {
      items: [
        'Part-1.md',
        'Part-2.md',
        'Part-3.md',
      ]
    }, 
  ]
})
