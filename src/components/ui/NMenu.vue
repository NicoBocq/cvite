<template>
  <Menu as="div">
    <menu-button>Télécharger</menu-button>
<!--    <MenuButton as="template">-->
<!--      <n-button icon="download" label="Télécharger" />-->
<!--    </MenuButton>-->
    <MenuItems as="ul">
      <MenuItem as="li" v-slot="{ active }">
        <a :class='{ "bg-blue-500": active }' href="/account-settings">
          Account settings
        </a>
      </MenuItem>
      <MenuItem v-slot="{ active }">
        <a :class='{ "bg-blue-500": active }' href="/account-settings">
          Documentation
        </a>
      </MenuItem>
      <MenuItem disabled>
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import NButton from "./NButton.vue";

export default {
  name: "NMenu",
  components: {
    NButton,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
  },
}
</script>
