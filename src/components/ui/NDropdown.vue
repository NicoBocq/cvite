<template>
  <div class="relative inline-block text-left">
    <menu>
      <span class="rounded-md shadow-sm">
        <menu-button
          class="
            inline-flex
            justify-center
            w-full
            px-4
            py-2
            text-sm
            font-medium
            leading-5
            text-gray-700
            transition
            duration-150
            ease-in-out
            bg-white
            border border-gray-300
            rounded-md
            hover:text-gray-500
            focus:outline-none focus:border-blue-300 focus:shadow-outline-blue
            active:bg-gray-50 active:text-gray-800
          "
        >
          More
        </menu-button>
      </span>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <menu-items
          class="
            absolute
            right-0
            w-56
            mt-2
            origin-top-right
            bg-white
            border border-gray-200
            divide-y divide-gray-100
            rounded-md
            shadow-lg
            outline-none
          "
        >
          <menu-item
            v-slot="{ active }"
            class="
              flex
              justify-between
              w-full
              px-4
              py-2
              text-sm
              leading-5
              text-left
            "
          >
            <a :class="{ 'bg-blue-500': active }" href="/account-settings">
              Account settings
            </a>
          </menu-item>
        </menu-items>
      </transition>
    </menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>
