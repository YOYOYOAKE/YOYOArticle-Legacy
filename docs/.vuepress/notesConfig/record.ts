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
            'arc-01/2025W1.md',
            'arc-01/2025W2.md',
            'arc-01/2025W3.md',
            'arc-01/2025W4-6.md',
            'arc-01/2025W7.md',
            'arc-01/2025W8.md'
          ]
        },
        {
          text: 'Archive Two：求索',
          items: [
            'arc-02/2025W9.md',
            'arc-02/2025W10.md',
            'arc-02/2025W11.md',
            'arc-02/2025W12.md',
            'arc-02/2025W13.md',
            'arc-02/2025W14.md',
            'arc-02/2025W15.md',
            'arc-02/2025W16.md',
          ]
        },
        {
          text: 'Archive Three：前路',
          items: [
            'arc-03/2025W17.md',
          ]
        }
      ]
    },
  ]
})