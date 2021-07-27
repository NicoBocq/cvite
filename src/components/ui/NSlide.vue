<template>
  <section class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true" v-if="active">
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay, show/hide based on slide-over state. -->
      <div class="absolute inset-0 bg-gray-800 bg-opacity-25 cursor-pointer" aria-hidden="true" @click="onClose"></div>

      <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
        <transition
          enter-active-class="transition ease-in-out duration-500 sm:duration-700"
          enter-from-class="transform translate-x-full"
          enter-to-class="transform translate-x-0"
          leave-active-class="transition ease-in-out duration-500 sm:duration-700"
          leave-from-class="transform translate-x-0"
          leave-to-class="transform translate-x-full"
        >
          <div class="w-screen max-w-3xl">
            <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div class="p-6">
                <div class="flex items-start justify-between">
                  <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                    Team
                  </h2>
                  <div class="ml-3 h-7 flex items-center">
                    <n-button icon="x" @click="onClose" />
                  </div>
                </div>
              </div>
              <div class="border-b border-gray-200">
                <div class="px-6">
                  <nav class="-mb-px flex space-x-6">
                    <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                    <a href="#" class="border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">
                      Content
                    </a>
                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Design</a>

                    <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Offline</a>
                  </nav>
                </div>
              </div>
              <div class="px-4 py-3 space-y-8">
                <slot name="body" />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>

import NButton from "@/components/ui/NButton.vue";
import ResumeForm from "@/components/customUi/ResumeForm.vue";
import { toRefs} from "vue"

export default {
  name: "NSlide",
  emits: ['close'],
  props: {
    active: {
      type: Boolean
    }
  },
  components: {
    ResumeForm,
    NButton,
  },
  setup(props, { emit }) {
    const onClose = () => {
      emit('close')
    }

    const { active } = toRefs(props)

    return {
      onClose,
      active
    }
  }
}
</script>
