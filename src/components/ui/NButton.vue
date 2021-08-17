<template>
  <button
    class="inline-flex text-white items-center border border-transparent font-medium justify-center rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    @click="onClick"
    @change="onChange"
    v-bind="$attrs"
    :class="small ? 'px-3 py-2 text-sm space-x-1' : 'px-5 py-2 text-base space-x-2'"
  >
    <n-icon v-if="!!icon" :icon="icon" :small="small" />
    <span v-if="!!$slots.default || !!label">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script>
import NIcon from "./NIcon.vue";
export default {
  name: "NButton",
  components: { NIcon },
  emits: ['click', 'change'],
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  setup({ disabled },  { emit } ) {
    const onClick = () => {
      !disabled && emit('click')
    }
    const onChange = (e) => {
      console.log(e)
      !disabled && emit('change', e)
    }
    return {
      onClick,
      onChange
    }
  }
}
</script>
