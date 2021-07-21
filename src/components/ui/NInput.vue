<template>
  <div>
    <label :for="id" class="sr-only">Email</label>
    <input
      v-if="type !== 'textarea'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :name="id"
      :id="id"
      v-bind="$attrs"
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300"
      :placeholder="placeholder"
    >
    <textarea
      v-else
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :name="id"
      :id="id"
      v-bind="$attrs"
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md placeholder-gray-300"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import {computed, toRefs} from "vue";

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
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    // let computedValue = computed({
    //   get: () => {
    //     const { modelValue } = toRefs(props)
    //     return modelValue.value
    //   },
    //   set: value => {
    //     context.emit('update:modelValue', value)
    //   }
    // })
    // const onInput = (event) => {
    //   console.log(event.target.value)
    //   computedValue = event.target.value
    // }
    // return {
    //   computedValue,
    //   onInput
    // }
  }
}
</script>
