import {
    Switch,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
} from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
    ArrowLeftIcon
} from '@heroicons/vue/24/outline'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('Switch', Switch)
    nuxtApp.vueApp.component('Disclosure', Disclosure)
    nuxtApp.vueApp.component('DisclosureButton', DisclosureButton)
    nuxtApp.vueApp.component('DisclosurePanel', DisclosurePanel)
    nuxtApp.vueApp.component('Menu', Menu)
    nuxtApp.vueApp.component('MenuButton', MenuButton)
    nuxtApp.vueApp.component('MenuItems', MenuItems)
    nuxtApp.vueApp.component('MenuItem', MenuItem)

    nuxtApp.vueApp.component('Bars3Icon', Bars3Icon)
    nuxtApp.vueApp.component('XMarkIcon', XMarkIcon)
    nuxtApp.vueApp.component('ChevronDownIcon', ChevronDownIcon)
    nuxtApp.vueApp.component('ArrowLeftIcon', ArrowLeftIcon)
})
