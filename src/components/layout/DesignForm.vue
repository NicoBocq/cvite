<template>
  <div class="py-6">
    <div class="bg-white rounded-lg py-6 px-4 md:px-6 space-y-4">
      <h2 class="text-xl font-bold">
        Customize
      </h2>
      <n-radio-group />

      <!--      <div-->
      <!--        class="grid grid-cols-3 w-full shadow rounded-lg h-30 overflow-hidden"-->
      <!--      >-->
      <!--        <div class="col-span-2 flex flex-col p-2 space-y-2">-->
      <!--          <div class="flex space-x-2 items-center">-->
      <!--            <div class="bg-gray-200 h-4 w-4 rounded-full" />-->
      <!--            <div class="bg-gray-200 h-6 flex-auto rounded" />-->
      <!--          </div>-->
      <!--          <div class="bg-gray-200 rounded w-full h-6" />-->
      <!--          <div class="bg-gray-200 rounded w-full h-6" />-->
      <!--          <div class="bg-gray-200 rounded w-full h-6" />-->
      <!--        </div>-->
      <!--        <div class="bg-gray-800 flex flex-col p-2 space-y-2">-->
      <!--          <div class="bg-white w-1/3 h-1" />-->
      <!--          <div class="bg-white w-2/3 h-1" />-->
      <!--          <div class="bg-white w-1/3 h-1" />-->
      <!--          <div class="bg-white w-1/3 h-1" />-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import NRadioGroup from '../ui/NRadioGroup.vue'

export default {
  name: 'DesignForm',
  components: { NRadioGroup }
}
</script>
