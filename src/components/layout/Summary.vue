<template>
  <div class="ring ring-gray-200 ring-offset-2 shadow-lg ring-opacity-25 rounded-md container mx-auto max-w-4xl">
    <div class="bg-white text-gray-800 p-5 h-full flex flex-col space-y-10">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <div class="text-2xl text-red-500">{{ data.firstName }} {{ data.lastName }}</div>
          <div class="text-3xl font-bold">{{ data.title }}</div>
          <div class="text-gray-600">{{ data.description }}</div>
        </div>
        <div class="text-right text-sm text-gray-500 flex flex-col">
          <span>{{ data.phone }}</span>
          <a href="{{ data.gitHub }}" class="text-gray-500">GitHub</a>
        </div>
      </div>
      <div class="flex">
        <div class="w-2/3">
          <div class="divide divide-y divide-gray-200">
            <div v-for="(item, idx) in data.experiences" :key="idx" class="py-2">
              <div class="flex flex-col">
                <div class="text-sm text-gray-800 font-semibold">{{ item.title }}</div>
                <div class="text-gray-500">{{ item.company }}</div>
                <div class="text-gray-500">{{ item.year }}</div>
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
export default {
name: "Summary",
  props: {
    data: {
      type: Object,
      default: () => {}
    },
  },
}
</script>
