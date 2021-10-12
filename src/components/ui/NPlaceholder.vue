<template>
  <div
    v-if="type === 'title'"
    class="bg-gray-200 rounded-md h-6 w-2/3"
  />
  <div
    v-else-if="type === 'name'"
    class="bg-gray-200 rounded-md h-4 w-1/3"
  />
  <div
    v-else
    class="flex flex-col space-y-2 flex-1"
  >
    <div
      v-for="g in items"
      :key="g"
      class="bg-gray-200 rounded-md h-2 w-full"
    />
  </div>
</template>

<script>
export default {
  name: 'NPlaceholder',
  props: {
    items: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
