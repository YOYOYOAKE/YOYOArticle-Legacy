import { defineNoteConfig } from "vuepress-theme-plume"

export default defineNoteConfig({
  dir: 'record',
  link: '/record/',
  sidebar: [
    {
      text: '行迹 2025',
      link: 'README.md',
      items: [
        {
          text: 'Archive One：初试',
          items: [
            '2025W1.md',
            '2025W2.md',
            '2025W3.md',
            '2025W4-6.md',
            '2025W7.md',
            '2025W8.md'
          ]
        },
        {
          text: 'Archive Two：求索',
          items: [
            '2025W9.md',
            '2025W10.md',
            '2025W11.md',
            '2025W12.md',
            '2025W13.md',
            '2025W14.md',
            '2025W15.md',
            '2025W16.md',
          ]
        }
      ]
    },
  ]
})