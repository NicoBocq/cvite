<template>
  <div class="flex flex-col">
      <div
        v-if="!active"
        @click="toggle"
        class="cursor-pointer hover:text-opacity-50 space-x-2 flex items-center"
        key="close"
      >
        <div v-bind="$attrs">
          {{ sectionTitle }}
        </div>
        <n-icon icon="pencil" color="text-gray-300" />
      </div>
      <div v-show="active" class="flex space-x-2 justify-between" key="open" @keydown.enter="save" @keydown.esc="close">
        <input
          :id="'section-title-' + sectionTitle"
          v-model="sectionTitle"
          v-bind="$attrs"
          class="flex-1 focus:outline-none border-b-2 border-transparent focus:border-blue-400 focus:bg-blue-50 focus:border"
          ref="inputRef"
        />
        <n-button icon="check" @click="save" :disabled="isBlank" />
        <n-button icon="x" @click="close" />
      </div>
  </div>
</template>

<script>
import {ref, watch, toRefs, nextTick, watchEffect, onMounted, computed} from "vue";
import NInput from "./NInput.vue";
import NButton from "./NButton.vue";
import NIcon from "./NIcon.vue";
import {useModelWrapper} from "../../composables/modelWrapper";

export default {
  name: "NInlineEditing",
  props: {
    modelValue: {
      type: String
    },
  },
  emits: ['update:modelValue'],
  components: { NIcon, NButton, NInput },
  setup(props, { emit }) {
    const active = ref(false)
    const inputRef = ref(null)
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

    watch(active, async(val) => {
      if (val) {
        initialValue.value = modelValue.value
        await nextTick()
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
      sectionTitle
    }
  }
}
</script>
