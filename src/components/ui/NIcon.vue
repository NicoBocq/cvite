<template>
  <component
    :is="processedIcon"
    :class="[sizeStyle, color]"
    class="inline-block"
    aria-hidden="true"
  />
</template>

<script>
import {
  CheckIcon as CheckIconSolid,
  ChevronDownIcon as ChevronDownIconSolid,
  ChevronLeftIcon as ChevronLeftIconSolid,
  ChevronRightIcon as ChevronRightIconSolid,
  CogIcon as CogIconSolid,
  DownloadIcon as DownloadIconSolid,
  FireIcon as FireIconSolid,
  GlobeAltIcon as GlobeIconSolid,
  LightningBoltIcon as LightningBoltIconSolid,
  PencilIcon as PencilIconSolid,
  PlusIcon as PlusIconSolid,
  QuestionMarkCircleIcon as QuestionMarkCircleIconSolid,
  RefreshIcon as RefreshIconSolid,
  SelectorIcon as SelectorIconSolid,
  StarIcon as StarIconSolid,
  SwitchVerticalIcon as SwitchVerticalIconSolid,
  TranslateIcon as TranslateIconSolid,
  TrashIcon as TrashIconSolid,
  UploadIcon as UploadIconSolid,
  XIcon as XIconSolid
} from '@heroicons/vue/solid'
import {
  UserCircleIcon as UserCircleIconOutline,
  TrashIcon as TrashIconOutline
} from '@heroicons/vue/outline'
import { computed, toRefs } from 'vue'
export default {
  name: 'NIcon',
  components: {
    CheckIconSolid,
    ChevronDownIconSolid,
    ChevronLeftIconSolid,
    ChevronRightIconSolid,
    CogIconSolid,
    DownloadIconSolid,
    FireIconSolid,
    GlobeIconSolid,
    LightningBoltIconSolid,
    PencilIconSolid,
    PlusIconSolid,
    QuestionMarkCircleIconSolid,
    RefreshIconSolid,
    SelectorIconSolid,
    StarIconSolid,
    SwitchVerticalIconSolid,
    TranslateIconSolid,
    TrashIconOutline,
    TrashIconSolid,
    UserCircleIconOutline,
    UploadIconSolid,
    XIconSolid
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    small: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const { icon, small, size } = toRefs(props)
    const processedIcon = computed(() => {
      const type = icon.value.includes('-outline') ? 'outline' : 'solid'
      const iconValue = icon.value.includes('-outline')
        ? icon.value.replace('-outline', '')
        : icon.value
      return `${iconValue}-icon-${type}`
    })

    const sizeStyle = computed(() => {
      return small.value ? 'h-4 w-4' : size.value ? size.value : 'h-5 w-5'
    })

    return {
      processedIcon,
      sizeStyle
    }
  }
}
</script>
