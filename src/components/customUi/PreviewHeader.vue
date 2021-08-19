<template>
  <div v-if="resumeKey === 'title'" class="flex justify-between">
    <div class="flex space-x-4 items-center">
      <img v-if="!!resume.avatar" :src="resume.avatar" alt="" class="w-16 h-16 rounded-full">
      <div class="flex flex-col">
        <div class="text-xl">{{ resume.firstName }} {{ resume.lastName }}</div>
        <div class="text-xl font-bold">{{ resume.title }}</div>
        <div class="text-gray-600 text-sm">{{ resume.summary }}</div>
      </div>
    </div>
  </div>
  <div v-else-if="resumeKey === 'contact'" class="text-xs space-y-1">
    <div v-if="resume.phone">{{ resume.phone }}</div>
    <div v-if="resume.email">{{ resume.email }}</div>
    <div v-if="resume.address">{{ resume.address }}</div>
    <div v-if="resume.more">{{ resume.more }}</div>
  </div>
</template>

<script>
import {computed, toRefs} from "vue";
import { resume, model } from '/src/store'

export default {
  name: "PreviewHeader",
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
