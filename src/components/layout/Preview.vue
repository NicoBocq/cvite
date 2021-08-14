<template>
  <div class="ring ring-gray-200 ring-offset-2 shadow-lg ring-opacity-25 rounded-md">
    <div class="w-full bg-white text-gray-800 p-5 h-full flex flex-col space-y-10">
      <div class="flex justify-between">
        <div class="flex space-x-4 items-center">
          <img v-if="!!resume.avatar" :src="resume.avatar" alt="" class="w-16 h-16 rounded-full">
          <div class="flex flex-col">
            <div class="text-red-500 text-2xl">{{ resume.firstName }} {{ resume.lastName }}</div>
            <div class="text-3xl font-bold">{{ resume.title }}</div>
            <div class="text-gray-600">{{ resume.summary }}</div>
          </div>
        </div>
        <div class="text-right text-sm text-gray-500 flex flex-col">
          <span>{{ resume.phone }}</span>
          <a href="{{ link.url }}" class="text-gray-500" v-for="(link, idx) in resume.links" :key="idx">
            {{  link.label }}
          </a>
        </div>
      </div>
      <div class="flex">
        <div class="w-2/3">
          <div class="text-xl font-bold">
            {{ model.experience.title }}
          </div>
          <div class="divide divide-y divide-gray-200">
            <div v-for="(item, idx) in resume.experience" :key="idx" class="py-2">
              <div class="flex flex-col">
                <div class="text-sm text-gray-800 font-semibold">{{ item.title }}</div>
                <div class="text-gray-500">{{ item.company }}</div>
                <div class="text-gray-500">{{ item.year }}</div>
                <div class="text-gray-500">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 bg-gray-50 p-4 rounded-md">
          <div>Dev</div>
<!--          <n-radio-group />-->
          <div class="bg-white grid grid-cols-3 w-full shadow rounded-lg h-30 overflow-hidden">
            <div class="col-span-2 flex flex-col p-2 space-y-2">
              <div class="flex space-x-2 items-center">
                <div class="bg-gray-200 h-4 w-4 rounded-full" />
                <div class="bg-gray-200 h-6 flex-auto rounded" />
              </div>
              <div class="bg-gray-200 rounded w-full h-6" />
              <div class="bg-gray-200 rounded w-full h-6" />
              <div class="bg-gray-200 rounded w-full h-6" />
            </div>
            <div class="bg-gray-800 flex flex-col p-2 space-y-2">
              <div class="bg-white w-1/3 h-1" />
              <div class="bg-white w-2/3 h-1" />
              <div class="bg-white w-1/3 h-1" />
              <div class="bg-white w-1/3 h-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resume, model } from '/src/store'
import {computed, ref, watch, watchEffect} from "vue"
import NRadioGroup from "../ui/NRadioGroup.vue";

export default {
  name: "Preview",
  components: {NRadioGroup},
  setup(props, context) {
    return {
      resume,
      model
    }
  }
}
</script>
