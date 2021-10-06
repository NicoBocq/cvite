<template>
  <div>
    <label :for="id" class="sr-only">{{ label }}</label>
    <input
      v-if="type !== 'textarea'"
      :value="modelValue"
      @input="onInput"
      :type="type"
      :name="id"
      :id="id"
      v-bind="$attrs"
      :class="rootClasses"
      :placeholder="placeholder"
    >
    <textarea
      v-else
      :value="modelValue"
      @input="onInput"
      :type="type"
      :name="id"
      :id="id"
      v-bind="$attrs"
      :class="rootClasses"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>

import {toRefs} from "@vueuse/core";
import {computed} from "vue";

export default {
name: "NInput",
  emits: ['update:modelValue'],
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
      type: [String, Number]
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String
    },
    required: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    const { required } = toRefs(props)
    const onInput = (e) => {
      emit('update:modelValue', e.target.value)
    }

    const rootClasses = computed(() => {
      const computedClass = required.value ? 'border-gray-400' : 'border-gray-300'
      return 'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300 ' + computedClass
    })

    return {
      onInput,
      required,
      rootClasses
    }
  }
}
</script>
