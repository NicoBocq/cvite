<template>
  <radio-group v-model="plan">
    <radio-group-label class="sr-only"> Plan </radio-group-label>
    <div class="bg-white rounded-md">
      <radio-group-option v-slot="{ checked }" value="startup" as="template">
        <div
          :class="
            checked ? 'bg-indigo-50 border-indigo-200' : 'border-gray-200'
          "
          class="relative flex p-4 border"
        >
          <div class="flex flex-col">
            <!-- This Label is for the `RadioGroupOption` -->
            <radio-group-label as="template">
              <span
                :class="checked ? 'text-indigo-900' : 'text-gray-900'"
                class="block text-sm font-medium"
                >Startup</span
              >
            </radio-group-label>

            <!-- This Description is for the `RadioGroupOption` -->
            <radio-group-description as="template">
              <span
                :class="checked ? 'text-indigo-700' : 'text-gray-500'"
                class="block text-sm"
              >
                Up to 5 active job postings
              </span>
            </radio-group-description>
          </div>
        </div>
      </radio-group-option>
      <radio-group-option v-slot="{ active, checked }" value="startup">
        <span
          :class="[
            checked ? 'bg-indigo-600' : '',
            active ? 'ring-2 ring-indigo-500' : '',
          ]"
          class="w-4 h-4 rounded-full"
        >
          Startup
        </span>
      </radio-group-option>
      <radio-group-option v-slot="{ active, checked }" value="startup">
        <span
          :class="[
            checked ? 'bg-indigo-600' : '',
            active ? 'ring-2 ring-indigo-500' : '',
          ]"
          class="w-4 h-4 rounded-full"
        >
          Startup
        </span>
      </radio-group-option>
    </div>
  </radio-group>
</template>

<script>
import { ref } from 'vue'
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription
} from '@headlessui/vue'

export default {
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription
  },

  setup () {
    const plan = ref('startup')

    return { plan }
  }
}
</script>
