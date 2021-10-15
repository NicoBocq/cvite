<template>
  <button
    class="inline-flex items-center border border-transparent font-semibold justify-center rounded-full"
    v-bind="$attrs"
    :class="[themeStyle, sizeStyle, rootStyle]"
    @click="onClick"
    @change="onChange"
  >
    <n-icon
      v-if="!!icon"
      :icon="icon"
      :small="small"
    />
    <span v-if="!!$slots.default || !!label">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script>
import NIcon from './NIcon.vue'
import { computed, toRefs } from 'vue'
export default {
  name: 'NButton',
  components: { NIcon },
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
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'primary'
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click', 'change'],
  setup (props, { emit, slots }) {
    const { disabled, small, theme, label } = toRefs(props)

    const onClick = () => {
      !disabled.value && emit('click')
    }

    const themeStyle = computed(() => {
      const mappedClasses = {
        primary:
          'text-white bg-brand-600 hover:bg-brand-700 shadow-sm',
        secondary: 'text-brand-500 hover:text-brand-600 hover:bg-brand-50',
        transparent: 'text-gray-400 hover:text-gray-500 hover:bg-gray-50'
      }
      return mappedClasses[theme.value]
    })

    const rootStyle = computed(() => {
      return [
        disabled.value
          ? 'cursor-default opacity-50'
          : 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500'
      ]
    })

    const sizeStyle = computed(() => {
      const mappedClasses = {
        false:
          !!label.value || !!slots.default
            ? 'px-4 py-2 text-base space-x-2'
            : 'p-2',
        true:
          !!label.value || !!slots.default
            ? 'px-2.5 py-1.5 text-sm space-x-1'
            : 'p-1.5'
      }
      return mappedClasses[small.value]
    })

    const onChange = (e) => {
      !disabled.value && emit('change', e)
    }
    return {
      onClick,
      onChange,
      themeStyle,
      sizeStyle,
      rootStyle
    }
  }
}
</script>
