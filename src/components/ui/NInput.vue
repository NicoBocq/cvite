<template>
  <div>
    <label :for="id" class="sr-only">Email</label>
    <input
      v-if="type !== 'textarea'"
      :value="modelValue"
      @input="onInput"
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
      @input="onInput"
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
  setup(props, { emit }) {
    const onInput = (e) => {
      emit('update:modelValue', e.target.value)
    }
    return {
      onInput
    }
  }
}
</script>
