import { defineNuxtPlugin } from '#app'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is 

export default defineNuxtPlugin(nuxtApp => {
  const tgTheme: ThemeDefinition = {
    dark: false,
    colors: {
      //   background: '#FFFFFF',
      // surface: '#283763',
      primary: '#62aada',
      //   'primary-darken-1': '#3700B3',
      secondary: '#a0c3e5',
      //   'secondary-darken-1': '#018786',
      //   error: '#B00020',
      //   info: '#2196F3',
      //   success: '#4CAF50',
      //   warning: '#FB8C00',
      'on-secondary': '#FFFFFF',
      'on-surface': '#283763',
    }
  }

  const vuetify = createVuetify({
    icons: {
      defaultSet: 'md',
      aliases,
      sets: {
        md,
      },
    },
    components,
    directives,
    theme: {
      defaultTheme: 'tgTheme',
      themes: {
        tgTheme
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})