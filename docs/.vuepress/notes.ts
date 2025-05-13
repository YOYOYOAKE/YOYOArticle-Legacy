import { defineNotesConfig } from 'vuepress-theme-plume'

import graphics from './notesConfig/graphics'
import mysql from './notesConfig/mysql'
import record from './notesConfig/record'
import java from './notesConfig/java'
import deeplearning from './notesConfig/deeplearning'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    graphics,
    mysql,
    record,
    java,
    deeplearning,
  ],
})