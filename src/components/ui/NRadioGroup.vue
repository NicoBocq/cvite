<template>
  <RadioGroup v-model="theme.color">
    <RadioGroupLabel class="block text-sm font-medium text-gray-500">
      Choose the main color
    </RadioGroupLabel>
    <div class="mt-4 flex items-center space-x-3">
      <RadioGroupOption
        v-for="color in theme.options.colors"
        :key="color.name"
        as="template"
        :value="color.value"
      >
        <div
          class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
          :class="isActive(color) ? 'ring ring-gray-400 ring-offset-1' : ''"
        >
          <RadioGroupLabel
            as="p"
            class="sr-only"
          >
            {{ color.name }}
          </RadioGroupLabel>
          <span
            aria-hidden="true"
            class="h-8 w-8 border border-black border-opacity-10 rounded-full"
            :style="'background-color:' + color.value"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import { theme } from '../../modules/resumeStore'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription
} from '@headlessui/vue'
import { computed } from 'vue'

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription
  },
  setup () {
    const isActive = (item) => {
      return item.value === theme.value.color
    }

    return { theme, isActive }
  }
}
</script>
