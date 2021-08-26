<template>
 <component :is="processedIcon" :class="[sizeStyle, color]" class="inline-block" aria-hidden="true" />
</template>

<script>
import {
  CheckIcon as CheckIconSolid,
  ChevronLeftIcon as ChevronLeftIconSolid,
  ChevronRightIcon as ChevronRightIconSolid,
  DownloadIcon as DownloadIconSolid,
  PencilIcon as PencilIconSolid,
  PlusIcon as PlusIconSolid,
  RefreshIcon as RefreshIconSolid,
  SelectorIcon as SelectorIconSolid,
  SwitchVerticalIcon as SwitchVerticalIconSolid,
  TrashIcon as TrashIconSolid,
  UploadIcon as UploadIconSolid,
  XIcon as XIconSolid
} from '@heroicons/vue/solid'
import {
  UserCircleIcon as UserCircleIconOutline,
  TrashIcon as TrashIconOutline
} from '@heroicons/vue/outline'
import {computed, toRefs} from "vue"
export default {
  name: 'NIcon',
  components: {
    CheckIconSolid,
    ChevronLeftIconSolid,
    ChevronRightIconSolid,
    DownloadIconSolid,
    PencilIconSolid,
    PlusIconSolid,
    RefreshIconSolid,
    TrashIconOutline,
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
      default: ''
    }
  },
  setup(props) {
    const { icon, color, type, small } = toRefs(props)
    const processedIcon = computed(() => {
      const type = icon.value.includes('-outline') ? 'outline' : 'solid'
      const iconValue = icon.value.includes('-outline') ? icon.value.replace('-outline', '') : icon.value
      return `${iconValue}-icon-${type}`
    })

    const sizeStyle = computed(() => {
      return small.value ? 'h-4 w-4' : 'h-5 w-5'
    })

    return {
      processedIcon,
      color,
      sizeStyle
    }
  }
}
</script>
