<template>
  <div class="space-y-4">
    <div class="font-bold text-base">
      {{ title }}
    </div>
    <transition-group name="list" v-if="hasSlot">
      <slot />
    </transition-group>
    <div v-else class="space-y-2">
      <div class="w-full h-2 bg-gray-200 rounded-md" />
      <div class="w-full h-2 bg-gray-200 rounded-md" />
      <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
    </div>
  </div>
</template>

<script>
import {computed, toRefs} from "vue";

export default {
  name: "PreviewSection",
  props: {
    title: {
      type: String
    }
  },
  setup(props, { slots }) {
    const hasSlot = computed(() => !!slots.default)
    const { title } = toRefs(props)
    return {
      hasSlot,
      title
    }
  }
}
</script>
