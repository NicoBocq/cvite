<template>
 <component :is="processedIcon" :class="small ? 'h-4 w-4' : 'h-5 w-5'" class="text-blue-500 inline-block" aria-hidden="true" />
</template>

<script>
import {
  ChevronRightIcon,
  DownloadIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/vue/solid'
import { computed } from "vue"
export default {
  name: 'NIcon',
  components: {
    ChevronRightIcon,
    DownloadIcon,
    PlusIcon,
    TrashIcon
  },
  props: {
    icon: {
      type: String
    },
    small: {
      type: Boolean,
      default: false
    }
  },
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
