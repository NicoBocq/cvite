<template>
  <div v-if="resumeKey === 'title'" class="w-full">
    <div class="flex space-x-4 items-center">
      <img
        v-if="!!resume.avatar"
        :src="resume.avatar"
        alt=""
        class="w-16 h-16"
      />
      <div class="space-y-1 flex-1">
        <div v-if="resume.firstName || resume.lastName" class="text-pxl w-full">
          {{ resume.firstName }} {{ resume.lastName }}
        </div>
        <n-placeholder v-else type="name" />
        <div v-if="resume.title" class="text-pxl font-bold w-full">
          {{ resume.title }}
        </div>
        <n-placeholder v-else type="title" />
        <div class="text-gray-600 text-psm">
          {{ resume.summary }}
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="resumeKey === 'contact'" class="text-pxs w-full">
    <div v-if="resume.phone || resume.email || resume.address || resume.more" class="space-y-1">
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
    <n-placeholder v-else :items="3" />
  </div>
</template>

<script>
import { computed, toRefs } from 'vue'
import { model, resume } from '@/modules/resumeStore.js'
import NPlaceholder from '../ui/NPlaceholder.vue'

export default {
  name: 'PreviewHeader',
  components: { NPlaceholder },
  props: {
    resumeKey: {
      type: String
    }
  },
  setup (props, { slots }) {
    const hasSlot = computed(() => !!slots.default)
    const { title, items } = toRefs(props)
    return {
      hasSlot,
      title,
      items,
      resume,
      model
    }
  }
}
</script>
