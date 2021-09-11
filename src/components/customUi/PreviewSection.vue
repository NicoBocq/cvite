<template>
  <div class="space-y-3">
    <div class="font-bold text-pbase">
      {{ model[resumeKey].title }}
    </div>
    <transition-group name="list" v-if="!isEmpty(resumeKey)">
      <div v-for="item in resume[resumeKey]" :key="item.id" class="text-pxs">
        <template v-if="resumeKey === 'experience'">
          <div class="text-gray-800 text-psm font-bold">{{ item.title }}, {{ item.company }}</div>
          <div class="text-gray-500">{{ item.year }}</div>
          <div class="text-gray-500 whitespace-pre-line">{{ item.description }}</div>
        </template>
        <template v-else-if="resumeKey === 'education'">
          <div class="text-gray-800 text-psm font-bold">{{ item.degree }}</div>
          <div class="text-gray-500">{{ item.beginDate }} / {{ item.endDate }} - {{ item.school }}</div>
          <div class="text-gray-500 whitespace-pre-line">{{ item.description }}</div>
        </template>
        <template v-else-if="resumeKey === 'skill'">
          {{ item.label }}
        </template>
        <template v-else-if="resumeKey === 'link'">
          <a href="{{ item.url }}" class="text-white block">
            {{ item.label }}
          </a>
        </template>
        <template v-else-if="resumeKey === 'hobby'">
          {{ item }}
        </template>
      </div>
    </transition-group>
    <div v-else class="space-y-4">
      <div v-if="resumeKey === 'link' || resumeKey === 'skill'" class="space-y-1">
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
      </div>
      <div class="space-y-3" v-if="resumeKey === 'experience'">
        <div v-for="n in 5" :key="'experience-' + n" class="space-y-1">
          <div class="w-2/3 h-2 bg-gray-200 rounded-md" />
          <div class="w-full h-2 bg-gray-200 rounded-md" />
          <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
        </div>
      </div>
      <div class="space-y-1" v-if="resumeKey === 'education'">
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
      </div>
    </div>
  </div>
</template>

<script>
import {computed, toRefs} from "vue";
import { model, resume, isEmpty } from '@/modules/resumeStore.js'

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
      resumeKey,
      model,
      resume,
      isEmpty
    }
  }
}
</script>
