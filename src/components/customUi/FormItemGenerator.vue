<template>
  <component
    :is="isComponent"
    :id="id"
    :key="id"
    v-model="bindObject"
    :type="schemeItem.type"
    :class="schemeItem.short ? '' : 'md:col-span-2'"
    :placeholder="schemeItem.placeholder"
    :required="isRequired"
  />
</template>

<script>
import { model, resume } from '@/modules/resumeStore.js'
import { toRefs, inject, computed } from 'vue'
import NInput from '../ui/NInput.vue'

export default {
  name: 'FormItemGenerator',
  components: { NInput },
  props: {
    schemeItem: {
      type: Object,
      default: () => {}
    },
    isCreate: {
      type: Boolean,
      default: false
    },
    editItem: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const { schemeItem, isCreate, editItem } = toRefs(props)
    const stateKey = inject('stateKey')

    const isRequired = computed(() => {
      if (!schemeItem.value.rules) return
      return schemeItem.value.rules.includes('required')
    })

    const isComponent = computed(() => {
      return 'n-' + schemeItem.value.component
    })

    const id = computed(() => {
      return `${stateKey.value}-${schemeItem.value.key}-${
        !editItem.value ? 'new' : `${editItem.value.id}`
      }`
    })

    const bindObject = computed({
      get: () =>
        isCreate.value
          ? model.value[stateKey.value].new[schemeItem.value.key]
          : editItem.value[schemeItem.value.key],
      set: (val) =>
        isCreate.value
          ? (model.value[stateKey.value].new[schemeItem.value.key] = val)
          : (editItem.value[schemeItem.value.key] = val)
    })

    return {
      resume,
      model,
      stateKey,
      id,
      isRequired,
      isComponent,
      bindObject
    }
  }
}
</script>
