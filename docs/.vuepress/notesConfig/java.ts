import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'repos/java',
  link: '/java/',
  sidebar: [
    {
      text: 'Java',
      link: 'README.md',
      items: [
        {
          text: 'Java 语法基础',
          items: [
            'basic/Part-01.md',
            'basic/Part-02.md',
            'basic/Part-03.md',
            'basic/Part-04.md',
            'basic/Part-05.md',
          ]
        }
      ]
    }, 
  ]
})
