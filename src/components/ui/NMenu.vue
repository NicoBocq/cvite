<template>
  <menu as="div">
    <menu-button>Télécharger</menu-button>
    <!--    <MenuButton as="template">-->
    <!--      <n-button icon="download" label="Télécharger" />-->
    <!--    </MenuButton>-->
    <menu-items as="ul">
      <menu-item v-slot="{ active }" as="li">
        <a :class="{ 'bg-blue-500': active }" href="/account-settings">
          Account settings
        </a>
      </menu-item>
      <menu-item v-slot="{ active }">
        <a :class="{ 'bg-blue-500': active }" href="/account-settings">
          Documentation
        </a>
      </menu-item>
      <menu-item disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </menu-item>
    </menu-items>
  </menu>
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
