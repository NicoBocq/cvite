<template>
  <div class="space-y-3">
    <div class="font-bold text-base">
      {{ model[resumeKey].title }}
    </div>
    <transition-group name="list" v-if="!isEmpty(resumeKey)">
      <div v-for="item in resume[resumeKey]" :key="item.id" class="text-xs">
        <template v-if="resumeKey === 'experience'">
          <div class="text-gray-800 text-sm font-bold">{{ item.title }}, {{ item.company }}</div>
          <div class="text-gray-500">{{ item.year }}</div>
          <div class="text-gray-500">{{ item.description }}</div>
        </template>
        <template v-else-if="resumeKey === 'education'">
          <div class="text-gray-800 text-sm font-bold">{{ item.degree }}, {{ item.school }}</div>
          <div class="text-gray-500">{{ item.beginDate }} / {{ item.endDate }}</div>
          <div class="text-gray-500">{{ item.description }}</div>
        </template>
        <template v-else-if="resumeKey === 'skill'">
          {{ item.label }}
        </template>
        <template v-else-if="resumeKey === 'link'">
          <a href="{{ item.url }}" class="text-white block">
            {{ item.label }}
          </a>
        </template>
      </div>
    </transition-group>
    <div v-else class="space-y-4">
      <div class="space-y-1">
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
      </div>
      <div class="space-y-1" v-if="resumeKey === 'experience'  || resumeKey === 'education'">
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
      </div>
    </div>
  </div>
</template>

<script>
import {computed, toRefs} from "vue";
import { resume, model, isEmpty } from '/src/store'

export default {
  name: "PreviewSection",
  props: {
    resumeKey: {
      type: String
    }
  },
  setup(props) {
    const resumeKey = props.resumeKey
    const { title, items } = toRefs(props)
    return {
      title,
      items,
      resume,
      model,
      resumeKey,
      isEmpty
    }
  }
}
</script>
