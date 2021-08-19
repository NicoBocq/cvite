<template>
  <div class="flex flex-col">
      <div
        v-if="!active"
        @click="toggle"
        class="cursor-pointer hover:text-opacity-50 space-x-2 flex items-center"
        key="close"
      >
        <div v-bind="$attrs">
          {{ modelValue }}
        </div>
        <n-icon icon="pencil" color="text-gray-300" />
      </div>
      <div v-show="active" class="flex space-x-2 justify-between" key="open" @keydown.enter="save" @keydown.esc="toggle">
        <input
          :id="'title-' + modelValue"
          v-model="modelValue"
          v-bind="$attrs"
          class="flex-1 rounded-md border focus:ring-indigo-500 focus:border-indigo-500"
          ref="inputRef"
        />
        <n-button icon="check" @click="save" />
        <n-button icon="x" @click="toggle" />
      </div>
  </div>
</template>

<script>
import { ref, watch, toRefs, nextTick, watchEffect, onMounted } from "vue";
import NInput from "./NInput.vue";
import NButton from "./NButton.vue";
import NIcon from "./NIcon.vue";

export default {
  name: "NInlineEditing",
  props: {
    modelValue: {
      type: String
    },
  },
  emits: ['update:modelValue'],
  components: {NIcon, NButton, NInput },
  setup(props, { emit }) {
    const active = ref(false)
    const inputRef = ref(null)

    const toggle = () => {
      active.value = !active.value
    }

    const focusInput = (el) => {
      el.focus()
    }

    const save = () => {
      emit('update:modelValue', props.modelValue)
      toggle()
    }

    watch(active, async(val) => {
      if (val) {
        await nextTick()
        focusInput(inputRef.value)
      }
    })

    return {
      toggle,
      active,
      save,
      inputRef
    }
  }
}
</script>
