import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'repos/deeplearning',
  link: '/deeplearning/',
  sidebar: [
    {
      text: '深度学习浅水区',
      link: 'README.md',
      items: [
        {
          text: 'Char.1 PyTorch',
          items: [
            'basic/Part-01.md',
          ]
        },
      ]
    }, 
  ]
})
