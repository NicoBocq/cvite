<template>
  <div
    class="bg-white grid grid-cols-3 w-full shadow rounded-lg h-30 overflow-hidden"
  >
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
</template>

<script>
export default {
  name: 'DesignForm'
}
</script>
