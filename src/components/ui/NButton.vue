<template>
  <button
    class="inline-flex items-center border border-transparent font-semibold justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    @click="onClick"
    @change="onChange"
    v-bind="$attrs"
    :class="[themeStyle, styleSize]"
  >
    <n-icon v-if="!!icon" :icon="icon" :small="small" />
    <span v-if="!!$slots.default || !!label">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script>
import NIcon from "./NIcon.vue";
import {computed, toRefs} from "vue";
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
    theme: {
      type: String,
      default: 'primary'
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  setup(props,  { emit, slots } ) {
    const { disabled, small, theme, label } = toRefs(props)

    const onClick = () => {
      !disabled.value && emit('click')
    }

    const themeStyle = computed(() => {
      let style
      switch (theme.value) {
        case 'primary':
          style = 'text-white bg-blue-600 hover:bg-blue-700 shadow-sm'
          break
        case 'secondary':
          style = 'text-white bg-blue-300 hover:bg-blue-400 shadow-sm'
          break
        case 'transparent':
          style = 'text-gray-400 hover:text-gray-500'
          break
      }
      return style
    })

    const styleSize = computed(() => {
      let style
      switch (small.value) {
        case false:
          if (!label.value || !slots.default) {
            style = 'px-4 py-2 text-base space-x-2'
          } else {
            style = 'p-2'
          }
          break
        case true:
          if (!label.value || !slots.default) {
            style = 'px-2.5 py-1.5 text-sm space-x-1'
          } else {
            style = 'p-1.5'
          }
          break
      }
      return style
    })

    const onChange = (e) => {
      !disabled.value && emit('change', e)
    }
    return {
      onClick,
      onChange,
      themeStyle,
      styleSize
    }
  }
}
</script>
