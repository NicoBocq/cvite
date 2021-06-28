<template>
  <Disclosure>
    <DisclosureButton class="py-2 flex justify-between items-center space-x-2" v-slot="{ open }">
      <span class="leading-relaxed uppercase">
        <slot name="title" />
      </span>
      <n-icon icon="chevron-right" :class="open ? 'transform rotate-90' : ''" />
    </DisclosureButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-out"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <DisclosurePanel class="text-gray-500">
        <slot name="body" />
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'
import NIcon from "./NIcon.vue";

export default {
  name: 'NDisclosure',
  components: { NIcon, Disclosure, DisclosureButton, DisclosurePanel },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
  },
}
</script>
