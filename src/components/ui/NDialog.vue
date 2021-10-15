<template>
  <Dialog
    :open="isOpen"
    class="fixed inset-0 z-10 overflow-y-auto"
    @close="onClose"
  >
    <div class="flex items-center justify-center min-h-screen">
      <Dialog-overlay class="fixed inset-0 bg-gray-800 opacity-75" />
      <div
        class="relative flex flex-col inline-block bg-white sm:rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl sm:my-8 w-screen h-screen sm:h-auto sm:max-w-lg sm:w-full sm:p-6 space-y-4"
      >
        <n-button
          icon="x"
          theme="transparent"
          class="absolute right-2 top-2"
          @click="setIsOpen(false)"
        />
        <Dialog-title
          as="h3"
          class="text-lg leading-6 font-medium text-gray-900"
        >
          <slot name="header" />
        </Dialog-title>
        <div
          v-if="hasSlot('body')"
          class="flex-grow"
        >
          <slot name="body" />
        </div>
        <div
          v-if="hasSlot('footer')"
          class="flex items-center justify-end space-x-2"
        >
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Dialog>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle
} from '@headlessui/vue'
import { useModelWrapper } from '../../composables/modelWrapper'
import NButton from './NButton.vue'

export default {
  name: 'NDialog',
  components: {
    NButton,
    Dialog,
    DialogOverlay,
    DialogTitle
  },
  props: {
    open: {
      type: Boolean
    }
  },
  emits: ['close', 'open'],
  setup (props, { emit, slots }) {
    const isOpen = useModelWrapper(props, emit, 'open')
    const setIsOpen = (value) => {
      isOpen.value = value
    }

    const hasSlot = (name) => !!slots[name]

    const onClose = () => {
      setIsOpen(false)
    }

    return {
      isOpen,
      setIsOpen,
      hasSlot,
      onClose
    }
  }
}
</script>
