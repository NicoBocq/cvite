<template>
  <button
    class="inline-flex items-center border border-transparent font-medium justify-center rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    @click="onClick"
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
  emits: ['click'],
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
