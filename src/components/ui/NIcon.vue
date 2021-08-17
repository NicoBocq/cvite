<template>
 <component :is="processedIcon" :class="[size, color]" class="inline-block" aria-hidden="true" />
</template>

<script>
import {
  CheckIcon as CheckIconSolid,
  ChevronLeftIcon as ChevronLeftIconSolid,
  ChevronRightIcon as ChevronRightIconSolid,
  DownloadIcon as DownloadIconSolid,
  PencilIcon as PencilIconSolid,
  PlusIcon as PlusIconSolid,
  SelectorIcon as SelectorIconSolid,
  SwitchVerticalIcon as SwitchVerticalIconSolid,
  TrashIcon as TrashIconSolid,
  UploadIcon as UploadIconSolid,
  XIcon as XIconSolid
} from '@heroicons/vue/solid'
import {
  UserCircleIcon as UserCircleIconOutline
} from '@heroicons/vue/outline'
import { computed } from "vue"
export default {
  name: 'NIcon',
  components: {
    CheckIconSolid,
    ChevronLeftIconSolid,
    ChevronRightIconSolid,
    DownloadIconSolid,
    PencilIconSolid,
    PlusIconSolid,
    TrashIconSolid,
    SelectorIconSolid,
    SwitchVerticalIconSolid,
    UserCircleIconOutline,
    UploadIconSolid,
    XIconSolid
  },
  props: {
    icon: {
      type: String
    },
    size: {
      type: String,
      default: 'h-5 w-5'
    },
    type: {
      type: String,
      default: 'solid'
    },
    color: {
      type: String,
      default: 'text-white'
    }
  },
  setup({ icon, color, type }) {
    const processedIcon = computed(() => {
      return `${icon}-icon-${type}`
    })

    return {
      processedIcon,
      color
    }
  }
}
</script>
