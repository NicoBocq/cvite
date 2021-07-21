<template>
 <component :is="processedIcon" :class="[small ? 'h-4 w-4' : 'h-5 w-5', classColor]" class="inline-block" aria-hidden="true" />
</template>

<script>
import {
  ChevronRightIcon,
  DownloadIcon,
  PlusIcon,
  TrashIcon,
  SwitchVerticalIcon,
} from '@heroicons/vue/solid'
import {
  UserCircleIcon
} from '@heroicons/vue/outline'
import { computed } from "vue"
export default {
  name: 'NIcon',
  components: {
    'ChevronRightIconSolid': ChevronRightIcon,
    'DownloadIconSolid': DownloadIcon,
    'PlusIconSolid': PlusIcon,
    'TrashIconSolid': TrashIcon,
    'SwitchVerticalIconSolid': SwitchVerticalIcon,
    'UserCircleIconOutline': UserCircleIcon
  },
  props: {
    icon: {
      type: String
    },
    small: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'solid'
    },
    color: {
      type: String,
      default: 'text-gray-500'
    }
  },
  setup({ icon, color, type }) {
    const processedIcon = computed(() => {
      return `${icon}-icon-${type}`
    })
    const classColor = computed(() => {
      return color
    })
    return {
      processedIcon,
      classColor
    }
  }
}
</script>
