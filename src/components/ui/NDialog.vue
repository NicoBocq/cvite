<template>
  <Dialog :open="isOpen" @close="onClose" class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen">
    <DialogOverlay class="fixed inset-0 bg-blue-900 opacity-30" />
      <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 space-y-6">
        <n-button icon="close" theme="transparent" @click="setIsOpen(false)" class="absolute right-1 top-1" />
        <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
          <slot name="header" />
        </DialogTitle>
        <DialogDescription v-if="hasSlot('body')" class="">
          <slot name="body" />
        </DialogDescription>
        <div v-if="hasSlot('footer')" class="sm:flex sm:flex-row-reverse space-x-2">
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
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue"
import {computed, ref, toRefs} from "vue";
import { useModelWrapper} from "../../composables/modelWrapper";
import NButton from "./NButton.vue";

export default {
  name: "NDialog",
  components: {NButton, Dialog, DialogOverlay, DialogTitle, DialogDescription },
  emits: ['close'],
  props: {
    open: {
      type: Boolean
    }
  },
  setup(props, { emit, slots }) {
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
