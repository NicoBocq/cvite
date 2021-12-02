<template>
  <div
    v-if="resumeKey === 'title'"
    class="w-full"
  >
    <div class="flex space-x-4 items-center">
      <img
        v-if="!!resume.avatar"
        :src="resume.avatar"
        alt=""
        class="w-16 h-16 print:w-24 print:h-24 rounded-full"
      >
      <div class="flex-1">
        <div
          v-if="resume.firstName || resume.lastName"
          class="text-pxl font-semibold print:text-xl w-full print:leading-5"
        >
          {{ resume.firstName }} {{ resume.lastName }}
        </div>
        <n-placeholder
          v-else
          type="name"
        />
        <div
          v-if="resume.title"
          class="text-pxl print:text-3xl font-extrabold w-full"
          :style="'color:' + theme.color"
        >
          {{ resume.title }}
        </div>
        <n-placeholder
          v-else
          type="title"
        />
        <div class="text-gray-600 text-psm print:text-sm print:leading-5">
          {{ resume.summary }}
        </div>
      </div>
    </div>
  </div>
  <div
    v-else-if="resumeKey === 'contact'"
    class="text-pxs print:text-sm w-full"
  >
    <div
      v-if="resume.phone || resume.email || resume.address || resume.more"
      class="space-y-1"
    >
      <div v-if="resume.phone">
        {{ resume.phone }}
      </div>
      <div v-if="resume.email">
        {{ resume.email }}
      </div>
      <div v-if="resume.address">
        {{ resume.address }}
      </div>
      <div v-if="resume.more">
        {{ resume.more }}
      </div>
    </div>
    <n-placeholder
      v-else
      :items="3"
    />
  </div>
</template>

<script>
import { computed, toRefs } from 'vue'
import NPlaceholder from '../ui/NPlaceholder.vue'

export default {
  name: 'PreviewHeader',
  components: { NPlaceholder },
  props: {
    resumeKey: {
      type: String,
      default: ''
    },
    resume: {
      type: Object,
      default: () => ({})
    },
    model: {
      type: Object,
      default: () => ({})
    },
    theme: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, { slots }) {
    const hasSlot = computed(() => !!slots.default)
    const { title, items } = toRefs(props)
    return {
      hasSlot,
      title,
      items
    }
  }
}
</script>
