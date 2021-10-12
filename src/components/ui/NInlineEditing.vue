<template>
  <div ref="inlineEditRef">
    <div
      v-if="!active"
      key="close"
      class="cursor-pointer hover:text-opacity-50 space-x-2 flex items-center"
      @click="toggle"
    >
      <div v-bind="$attrs">
        {{ sectionTitle }}
      </div>
      <n-icon
        icon="pencil"
        color="text-gray-300"
      />
    </div>
    <div
      v-show="active"
      key="open"
      class="flex space-x-2 justify-between"
      @keydown.enter="save"
      @keydown.esc="close"
    >
      <input
        :id="'section-title-' + sectionTitle"
        v-bind="$attrs"
        ref="inputRef"
        v-model="sectionTitle"
        class="flex-1 focus:outline-none border-b-2 border-transparent focus:border-blue-400 focus:bg-blue-50 focus:border"
      >
      <div class="flex items-center space-x-2">
        <n-button
          icon="check"
          small
          theme="secondary"
          @click="save"
        />
        <n-button
          icon="x"
          small
          theme="transparent"
          @click="close"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  watch,
  toRefs,
  nextTick,
  computed
} from 'vue'
import NButton from './NButton.vue'
import NIcon from './NIcon.vue'
import { useModelWrapper } from '../../composables/modelWrapper'

export default {
  name: 'NInlineEditing',
  components: { NIcon, NButton },
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const active = ref(false)
    const inputRef = ref(null)
    const inlineEditRef = ref(null)
    const { modelValue } = toRefs(props)
    const initialValue = ref(null)
    const toggle = () => {
      active.value = !active.value
    }
    const isBlank = computed(() => !!modelValue)
    const focusInput = (el) => {
      el.focus()
    }
    const sectionTitle = useModelWrapper(props, emit)

    const close = () => {
      active.value = false
      sectionTitle.value = initialValue.value
    }

    const save = () => {
      active.value = false
    }

    watch(active, async (val) => {
      if (val) {
        initialValue.value = modelValue.value
        await nextTick()
        inlineEditRef.value.scrollIntoView({ behavior: 'smooth' })
        focusInput(inputRef.value)
      }
    })

    return {
      toggle,
      active,
      save,
      inputRef,
      close,
      isBlank,
      sectionTitle,
      inlineEditRef
    }
  }
}
</script>
