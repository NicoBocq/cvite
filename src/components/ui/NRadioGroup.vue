<template>
  <RadioGroup v-model="selectedColor">
    <RadioGroupLabel class="block text-sm font-medium text-gray-700">
      Choose a label color
    </RadioGroupLabel>
    <div class="mt-4 flex items-center space-x-3">
      <RadioGroupOption
        v-for="color in colors"
        :key="color.name"
        v-slot="{ active, checked }"
        as="template"
        :value="color"
      >
        <div :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
          <RadioGroupLabel
            as="p"
            class="sr-only"
          >
            {{ color.name }}
          </RadioGroupLabel>
          <span
            aria-hidden="true"
            :class="[color.bgColor, 'h-8 w-8 border border-black border-opacity-10 rounded-full']"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription
} from '@headlessui/vue'
const colors = [
  { name: 'Pink', bgColor: 'bg-pink-500', selectedColor: 'ring-pink-500' },
  { name: 'Purple', bgColor: 'bg-purple-500', selectedColor: 'ring-purple-500' },
  { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
  { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
  { name: 'Yellow', bgColor: 'bg-yellow-500', selectedColor: 'ring-yellow-500' }
]
export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription
  },

  setup () {
    const plan = ref('startup')

    return { plan, colors }
  }
}
</script>
