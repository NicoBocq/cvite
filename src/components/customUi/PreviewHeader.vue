<template>
  <div v-if="resumeKey === 'title'" class="flex justify-between">
    <div class="flex space-x-4 items-center">
      <img v-if="!!resume.avatar" :src="resume.avatar" alt="" class="w-16 h-16">
      <div class="min-w-full">
        <div class="text-xl" v-if="resume.firstName || resume.lastName">
          {{ resume.firstName }} {{ resume.lastName }}
        </div>
        <n-placeholder v-else :items="2" />
        <div v-if="resume.title" class="text-xl font-bold">
          {{ resume.title }}
        </div>
        <n-placeholder v-else />
        <div class="text-gray-600 text-sm">
          {{ resume.summary }}
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="resumeKey === 'contact'" class="text-xs space-y-1">
    <template v-if="resume.phone || resume.email || resume.address || resume.more">
    <div v-if="resume.phone">{{ resume.phone }}</div>
    <div v-if="resume.email">{{ resume.email }}</div>
    <div v-if="resume.address">{{ resume.address }}</div>
    <div v-if="resume.more">{{ resume.more }}</div>
    </template>
    <n-placeholder v-else :items="2" />
  </div>
</template>

<script>
import {computed, toRefs} from "vue";
import { resume, model } from '/src/store'
import NPlaceholder from "../ui/NPlaceholder.vue";

export default {
  name: "PreviewHeader",
  components: {NPlaceholder},
  props: {
    resumeKey: {
      type: String
    }
  },
  setup(props, { slots }) {
    const hasSlot = computed(() => !!slots.default)
    const resumeKey = props.resumeKey
    const { title, items } = toRefs(props)
    return {
      hasSlot,
      title,
      items,
      resume,
      model,
      resumeKey
    }
  }
}
</script>
