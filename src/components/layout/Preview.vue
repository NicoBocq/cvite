<template>
  <div class="shadow-xl select-none cursor-move flex-shrink-0 overflow-scroll" style="width: 595px">
    <div class="flex">
      <div class="w-2/3 bg-white space-y-8 p-4">
        <div class="flex justify-between">
          <div class="flex space-x-4 items-center">
            <img v-if="!!resume.avatar" :src="resume.avatar" alt="" class="w-16 h-16 rounded-full">
            <div class="flex flex-col">
              <div class="text-xl">{{ resume.firstName }} {{ resume.lastName }}</div>
              <div class="text-xl font-bold">{{ resume.title }}</div>
              <div class="text-gray-600 text-sm">{{ resume.summary }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 bg-gray-800 p-4 text-white">
      <div class="text-xs">
        <div>{{ resume.phone }}</div>
        <div>{{ resume.email }}</div>
        <div>{{ resume.address }}</div>
        <div>{{ resume.more }}</div>
      </div>
    </div>
    </div>
    <div class="flex">
      <div class="w-2/3 bg-white space-y-4 p-4">
        <preview-section :title="model.experience.title">
          <div v-for="(item, idx) in resume.experience" :key="idx" class="text-xs">
            <div class="text-gray-800 text-sm font-bold">{{ item.title }}, {{ item.company }}</div>
            <div class="text-gray-500">{{ item.year }}</div>
            <div class="text-gray-500">{{ item.description }}</div>
          </div>
        </preview-section>
        <preview-section :title="model.education.title">
          <div v-for="(item, idx) in resume.education" :key="idx" class="text-xs">
            <div class="text-gray-800 text-sm font-bold">{{ item.degree }}</div>
            <div>{{ item.beginDate}} {{ item.endDate }} / {{ item.school }}</div>
            <div class="text-gray-500">{{ item.description }}</div>
          </div>
        </preview-section>
      </div>
      <div class="w-1/3 bg-gray-800 p-4 text-white">
        <preview-section :title="model.link.title">
          <a href="{{ link.url }}" class="text-white block" v-for="(link, idx) in resume.link" :key="idx">
            {{  link.label }}
          </a>
        </preview-section>
        <preview-section :title="model.skill.title">
          <div v-for="item in resume.skill">{{ item.label }}</div>
        </preview-section>
        <preview-section :title="model.hobby.title">

        </preview-section>
      </div>
    </div>
  </div>
</template>

<script>
import { resume, model } from '/src/store'
import {computed, ref, watch, watchEffect} from "vue"
import NRadioGroup from "../ui/NRadioGroup.vue";
import PreviewSection from "../customUi/PreviewSection.vue";

export default {
  name: "Preview",
  components: {PreviewSection, NRadioGroup},
  setup() {
    return {
      resume,
      model
    }
  }
}
</script>
