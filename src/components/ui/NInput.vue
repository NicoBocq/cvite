<template>
  <div class="relative">
    <label
      :for="id"
      class="sr-only"
    >
      {{ label }}
    </label>
    <input
      v-if="type !== 'textarea'"
      :id="id"
      :value="modelValue"
      :type="type"
      :name="id"
      v-bind="$attrs"
      :class="rootClasses"
      :placeholder="placeholder"
      @input="onInput"
    >
    <textarea
      v-else
      :id="id"
      :value="modelValue"
      type="textarea"
      rows="5"
      :name="id"
      v-bind="$attrs"
      :class="rootClasses"
      :placeholder="placeholder"
      @input="onInput"
    />
    <div
      v-if="required"
      :class="[
        isEmpty ? 'text-gray-100' : 'text-gray-300',
        type === 'textarea' ? 'top-2' : 'flex items-center',
      ]"
      class="absolute inset-y-0 right-0 pr-3 pointer-events-none font-semibold"
    >
      <n-icon icon="check" />
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue'
import NIcon from './NIcon.vue'

export default {
  name: 'NInput',
  components: { NIcon },
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const { modelValue } = toRefs(props)
    const onInput = (e) => {
      emit('update:modelValue', e.target.value)
    }

    const isEmpty = computed(() => {
      return !modelValue.value
    })

    const rootClasses = computed(() => {
      return 'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300 border-gray-300'
    })

    return {
      onInput,
      rootClasses,
      isEmpty
    }
  }
}
</script>
