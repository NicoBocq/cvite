<template>
  <div class="ring ring-gray-200 ring-offset-2 shadow-lg ring-opacity-25 rounded-md container mx-auto max-w-4xl">
    <div class="w-full bg-white text-gray-800 p-5 h-full flex flex-col space-y-10">
      <div class="flex justify-between">
        <img v-if="!!resume.avatar" :src="resume.avatar" alt="" class="w-10 h-10">
        <div class="flex flex-col">
          <div class="text-red-500 text-2xl">{{ resume.firstName }} {{ resume.lastName }}</div>
          <div class="text-3xl font-bold">{{ resume.title }}</div>
          <div class="text-gray-600">{{ resume.description }}</div>
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
          <div class="divide divide-y divide-gray-200">
            <div v-for="(item, idx) in resume.experiences" :key="idx" class="py-2">
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

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resume } from '/src/store'
import {computed, ref, watch, watchEffect} from "vue"

export default {
  name: "Summary",
  setup(props, context) {
    return {
      resume
    }
  }
}
</script>
