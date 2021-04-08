<template>
  <div class="relative inline-block text-left">
    <Menu>
      <span class="rounded-md shadow-sm">
        <MenuButton class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
          More
        </MenuButton>
      </span>
      <MenuItems class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
        <MenuItem v-slot="{ active }" class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left">
          <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Account settings </a>
        </MenuItem>
        <MenuItem v-slot="{ active }">
          <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Documentation </a>
        </MenuItem>
        <MenuItem v-slot="{ active }" disabled>
          <span :class="{ 'bg-blue-500': active }"> Invite a friend (coming soon!) </span>
        </MenuItem>
      </MenuItems>
    </Menu>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
}
</script>
