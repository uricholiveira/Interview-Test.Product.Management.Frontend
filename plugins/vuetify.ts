import { type IconSet, type IconProps } from 'vuetify'
import type { VDataTable } from 'vuetify/components'
import { useStorage } from '@vueuse/core'
export type DataTableHeaders = VDataTable['$props']['headers']

function filename(path: string) {
  return path
    .split(/(\\|\/)/g)
    .pop()!
    .replace(/\.[^/.]+$/, '')
}

const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob('~/assets/icons/*.svg', {
      eager: true,
      query: '?raw',
      import: 'default',
    }),
  ).map(([k, v]) => [filename(k), v]),
)
const custom: IconSet = {
  component: (props: IconProps) =>
    h(props.tag, { innerHTML: svgIcons[props.icon as string] }),
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:configuration', ({ vuetifyOptions }) => {
    vuetifyOptions.icons!.sets!['custom'] = custom
    const primary = useStorage('theme-primary', '#1697f6').value
    vuetifyOptions.theme = {
      themes: {
        light: { colors: { primary } },
        dark: { colors: { primary } },
      },
    }
  })
})
