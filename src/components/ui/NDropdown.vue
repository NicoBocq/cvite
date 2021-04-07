<template>
  <Menu>
    <MenuButton> More </MenuButton>
    <MenuItems>
      <MenuItem v-slot="{ active }">
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
