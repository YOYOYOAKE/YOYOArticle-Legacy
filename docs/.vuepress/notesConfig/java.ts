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
          text: 'Char.1 Java 语法基础',
          items: [
            'basic/Part-01.md',
            'basic/Part-02.md',
            'basic/Part-03.md',
            'basic/Part-04.md',
            'basic/Part-05.md',
          ]
        },
        {
          text: 'Char.2 Java 面向对象编程',
          items: [
            'oop/Part-01.md',
            'oop/Part-02.md',
            'oop/Part-03.md',
            'oop/Part-04.md',
            'oop/Part-05.md',
            'oop/Part-06.md',
            'oop/Part-07.md',
          ]
        },
        {
          text: 'Char.3 Java 容器',
          items: [
            'container/Part-01.md',
            'container/Part-02.md',
          ]
        },
      ]
    }, 
  ]
})
