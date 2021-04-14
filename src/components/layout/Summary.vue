<template>
  <div :class="print ? 'print text-sm': 'ring ring-gray-200 ring-offset-2 shadow-lg ring-opacity-25 rounded-md container mx-auto max-w-4xl'">
    <div :class="print ? 'w-full bg-white' : 'w-full bg-white text-gray-800 p-5 h-full flex flex-col space-y-10'" ref="printRef">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div class="text-red-500" :class="print ? 'text-sm' : 'text-2xl'">{{ identity.firstName }} {{ identity.lastName }}</div>
          <div class="text-3xl font-bold">{{ identity.title }}</div>
          <div class="text-gray-600">{{ identity.description }}</div>
        </div>
        <div class="text-right text-sm text-gray-500 flex flex-col">
          <span>{{ identity.phone }}</span>
          <a href="{{ identity.gitHub }}" class="text-gray-500">GitHub</a>
        </div>
      </div>
      <div :class="print ? 'grid grid-cols-12' : 'flex'">
        <div :class="print ? 'col-span-8' : 'w-2/3'">
          <div class="divide divide-y divide-gray-200">
            <div v-for="(item, idx) in identity.experiences" :key="idx" class="py-2">
              <div class="flex flex-col">
                <div class="text-sm text-gray-800 font-semibold">{{ item.title }}</div>
                <div class="text-gray-500">{{ item.company }}</div>
                <div class="text-gray-500">{{ item.year }}</div>
              </div>
            </div>
          </div>
        </div>
        <div :class="print ? 'col-span-4' : 'w-1/3'" class="bg-gray-50 p-4 rounded-md">
          <div>Dev</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { identity } from '/src/store'
import {computed, ref, watch, watchEffect} from "vue"

export default {
  name: "Summary",
  props: {
    print: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const printRef = ref(null)

    return {
      identity
    }
  }
}
</script>
