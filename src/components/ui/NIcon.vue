<template>
 <component :is="processedIcon" class="h-6 w-6 text-blue-500" />
</template>

<script>
import { DownloadIcon } from '@heroicons/vue/solid'
import { computed } from "vue"
export default {
  name: 'NIcon',
  components: {
    DownloadIcon
  },
  props: ['icon'],
  setup({ icon }) {
    const processedIcon = computed(() => {
      return `${icon}-icon`
    })
    return {
      processedIcon
    }
  }
}
</script>
