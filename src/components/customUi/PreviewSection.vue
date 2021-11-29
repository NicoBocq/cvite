<template>
  <div class="space-y-2">
    <div class="font-bold text-plg">
      {{ model[resumeKey].title }}
    </div>
    <transition-group
      v-if="!isEmpty(resumeKey)"
      name="list"
    >
      <div
        v-for="item in resume[resumeKey]"
        :key="item.id"
        class="text-pxs"
      >
        <template v-if="resumeKey === 'experience'">
          <div class="text-gray-800 text-psm font-bold">
            {{ item.title }}, {{ item.company }}
          </div>
          <div class="text-gray-500">
            {{ item.beginDate }}<span v-if="!!item.endDate"> - {{ item.endDate }}</span>
          </div>
          <div class="text-gray-500 whitespace-pre-line">
            {{ item.description }}
          </div>
        </template>
        <template v-else-if="resumeKey === 'education'">
          <div class="text-gray-800 text-psm font-bold">
            {{ item.degree }}
          </div>
          <div class="text-gray-500">
            {{ item.beginDate }}<span v-if="!!item.endDate"> / {{ item.endDate }}</span>
            {{ item.school }} ({{ item.city }})
          </div>
          <div class="text-gray-500 whitespace-pre-line">
            {{ item.description }}
          </div>
        </template>
        <template v-else-if="resumeKey === 'skill'">
          {{ item.label }}
        </template>
        <template v-else-if="resumeKey === 'link'">
          <a
            href="{{ item.url }}"
            class="text-white block"
          >
            {{ item.label }}
          </a>
        </template>
        <template v-else-if="resumeKey === 'hobby'">
          {{ item }}
        </template>
      </div>
    </transition-group>
    <div
      v-else
      class="space-y-4"
    >
      <div
        v-if="resumeKey === 'link' || resumeKey === 'skill'"
        class="space-y-1"
      >
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-full h-2 bg-gray-200 rounded-md" />
        <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
      </div>
      <div
        v-if="resumeKey === 'experience'"
        class="space-y-3"
      >
        <div
          v-for="n in 5"
          :key="'experience-' + n"
          class="space-y-1"
        >
          <div class="w-2/3 h-2 bg-gray-200 rounded-md" />
          <div class="w-full h-2 bg-gray-200 rounded-md" />
          <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
        </div>
      </div>
      <div
        v-if="resumeKey === 'education'"
        class="space-y-3"
      >
        <div
          v-for="n in 3"
          :key="'education-' + n"
          class="space-y-1"
        >
          <div class="w-full h-2 bg-gray-200 rounded-md" />
          <div class="w-full h-2 bg-gray-200 rounded-md" />
          <div class="w-1/3 h-2 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isEmpty } from '@/modules/resumeStore.js'

export default {
  name: 'PreviewSection',
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
    }
  },
  setup () {
    return {
      isEmpty
    }
  }
}
</script>
