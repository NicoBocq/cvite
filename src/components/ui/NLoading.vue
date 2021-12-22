<template>
  <transition
    name="fade"
    appear
  >
    <div class="fixed inset-0 w-screen h-screen bg-gradient-to-b from-brand-500 to-brand-800 bg-opacity-75 z-10 overflow-hidden flex justify-center items-center">
      <div class="animate-pulse space-y-4 flex flex-col items-center justify-center">
        <n-icon
          icon="lightning-bolt"
          class="text-white w-8 h-8"
        />
        <div
          v-if="title"
          class="text-white text-sm"
        >
          {{ title }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import NIcon from './NIcon.vue'

export default {
  name: 'Loading',
  components: { NIcon },
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>
