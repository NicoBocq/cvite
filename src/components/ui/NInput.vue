<template>
  <div class="relative">
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
      rows="5"
      :name="id"
      :id="id"
      v-bind="$attrs"
      :class="rootClasses"
      :placeholder="placeholder"
    />
    <div v-if="required" :class="[isEmpty ? 'text-gray-100' : 'text-gray-300', type === 'textarea' ? 'top-2' : 'flex items-center']" class="absolute inset-y-0 right-0 pr-3 pointer-events-none font-semibold">
      <n-icon icon="check" />
    </div>
  </div>
</template>

<script>

import {toRefs} from "@vueuse/core";
import {computed} from "vue";
import NIcon from "./NIcon.vue";

export default {
name: "NInput",
  components: {NIcon},
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
    const { required, modelValue } = toRefs(props)
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
      required,
      rootClasses,
      isEmpty
    }
  }
}
</script>
