<template>
  <Menu as="div">
    <Menu-button>Télécharger</Menu-button>
    <!--    <MenuButton as="template">-->
    <!--      <n-button icon="download" label="Télécharger" />-->
    <!--    </MenuButton>-->
    <Menu-items as="ul">
      <Menu-item
        v-slot="{ active }"
        as="li"
      >
        <a
          :class="{ 'bg-blue-500': active }"
          href="/account-settings"
        >
          Account settings
        </a>
      </Menu-item>
      <Menu-item v-slot="{ active }">
        <a
          :class="{ 'bg-blue-500': active }"
          href="/account-settings"
        >
          Documentation
        </a>
      </Menu-item>
      <Menu-item disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </Menu-item>
    </Menu-items>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import NButton from './NButton.vue'

export default {
  name: 'NMenu',
  components: {
    NButton,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>
