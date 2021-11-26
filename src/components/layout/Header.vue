<template>
  <header class="h-16 w-full py-2 px-4 sm:px-6 lg:px-8 bg-white shadow-sm flex justify-between sm:justify-between sm:items-center shadow z-10">
    <div class="flex space-x-1 items-center group cursor-pointer">
      <n-icon
        icon="lightning-bolt"
        class="text-brand-600 group-hover:text-gray-800"
      />
      <div class="text-brand-600 font-extrabold text-3xl group-hover:text-gray-800">
        CV<span class="text-gray-800 font-normal group-hover:text-brand-600">ite</span>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <n-menu />
    </div>
  </header>
</template>

<script>
import NIcon from '../ui/NIcon.vue'
import NMenu from '../customUi/NMenu.vue'

export default {
  name: 'Header',
  components: {
    NMenu,
    NIcon
  }
}
</script>
