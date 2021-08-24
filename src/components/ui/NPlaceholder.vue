<template>
  <div class="flex flex-col space-y-2">
    <div v-for="(idx, item) in items" :key="idx" class="bg-gray-200 rounded-md h-2 w-full" />
  </div>
</template>

<script>
export default {
  name: "NPlaceholder",
  props: {
    items: {
      type: Number,
      default: 1
    },
  },
}
</script>
