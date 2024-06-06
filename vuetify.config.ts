import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import { md3 } from 'vuetify/blueprints'

export default defineVuetifyConfiguration({
  blueprint: md3,
  locale: {
    locale: 'zhHans',
    fallback: 'en',
  },
  icons: {
    defaultSet: 'mdi-svg',
  },
  localeMessages: ['zhHans', 'en'],
  defaults: {
    VSwitch: {
      color: 'primary',
    },
    VDataTable: {
      fixedHeader: true,
      hover: true,
    },
    VCard: {
      flat: true,
      border: true,
    },
    VBtn: { color: '' },
    VNavigationDrawer: {
      VList: {
        nav: true,
        VListItem: {
          rounded: 'xl',
        },
      },
    },
    VChip: { rounded: 'lg' },
    VSelect: {
      color: 'primary',
    },
    VTextarea: {
      color: 'primary',
    },
    VTextField: {
      color: 'primary',
    },
    VCheckbox: {
      color: 'primary',
    },
    VCheckboxBtn: {
      color: 'primary',
    },
    VProgressLinear: {
      color: 'primary',
    },
  },
  display: {
    mobileBreakpoint: 'sm',
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: { colors: {} },
      dark: { colors: {} },
    },
  },
})
