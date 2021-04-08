<template>
  <button
    class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    @click="onClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: "NButton",
  emits: ['click'],
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props,  { emit } ) {
    const onClick = () => {
      !props.disabled && emit('click')
    }
    return {
      onClick
    }
  }
}
</script>
