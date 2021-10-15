<template>
  <div class="w-auto text-right">
    <Menu
      as="div"
      class="relative inline-block text-left"
    >
      <div>
        <MenuButton
          class="inline-flex justify-center text-brand-600 hover:text-brand-700 w-full px-4 py-1 text-sm font-medium rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <n-icon
            :icon="icon"
            size="w-6 h-6"
          />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 w-56 mt-2 p-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <MenuItem v-slot="{ active }">
            <button
              class="space-x-2"
              :class="[
                active ? 'bg-brand-500 text-white' : 'text-gray-700',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
              ]"
              @click="setLocale"
            >
              <n-icon icon="globe" />
              <span>{{ t('ui.switchLang') }}</span>
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              class="space-x-2"
              :class="[
                active ? 'bg-brand-500 text-white' : 'text-gray-700',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
              ]"
              @click="addNicoBocq"
            >
              <n-icon icon="question-mark-circle" />
              <span>{{ t('ui.about') }}</span>
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              class="space-x-2"
              :class="[
                active ? 'bg-brand-500 text-white' : 'text-gray-700',
                'group flex rounded-md items-center w-full px-2 py-2 text-sm',
              ]"
              @click="setNewResume"
            >
              <n-icon icon="refresh" />
              <span>{{ t('ui.startOver') }}</span>
            </button>
          </MenuItem>
        </menuitems>
      </transition>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import NIcon from './NIcon.vue'
import { setNewResume, addNicoBocq } from '../../modules/resumeStore'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    NIcon,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'chevron-down'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const { t, locale } = useI18n()

    const setLocale = () => {
      locale.value = locale.value === 'en' ? 'fr' : 'en'
      // document.querySelector('html').setAttribute('lang', lang)
    }

    return {
      setNewResume,
      addNicoBocq,
      t,
      setLocale
    }
  }
}
</script>
