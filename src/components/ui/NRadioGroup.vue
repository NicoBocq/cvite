<template>
  <RadioGroup v-model="plan">
    <RadioGroupLabel class="sr-only">Plan</RadioGroupLabel>
    <div class="bg-white rounded-md">
      <RadioGroupOption value="startup" as="template" v-slot="{ checked }">
        <div
          :class='checked ? "bg-indigo-50 border-indigo-200" : "border-gray-200"'
          class="relative flex p-4 border"
        >
          <div class="flex flex-col">
            <!-- This Label is for the `RadioGroupOption` -->
            <RadioGroupLabel as="template">
              <span
                :class='checked ? "text-indigo-900" : "text-gray-900"'
                class="block text-sm font-medium"
              >Startup</span
              >
            </RadioGroupLabel>

            <!-- This Description is for the `RadioGroupOption` -->
            <RadioGroupDescription as="template">
              <span
                :class='checked ? "text-indigo-700" : "text-gray-500"'
                class="block text-sm"
              >
                Up to 5 active job postings
              </span>
            </RadioGroupDescription>
          </div>
        </div>
      </RadioGroupOption>
    <RadioGroupOption v-slot="{ active, checked }" value="startup">
      <span
        :class="[
          checked ? 'bg-indigo-600' : '',
          active ? 'ring-2 ring-indigo-500' : ''
        ]"
        class="w-4 h-4 rounded-full"
      >
        Startup
      </span>
    </RadioGroupOption>
    <RadioGroupOption v-slot="{ active, checked }" value="startup">
      <span
        :class="[
          checked ? 'bg-indigo-600' : '',
          active ? 'ring-2 ring-indigo-500' : ''
        ]"
        class="w-4 h-4 rounded-full"
      >
        Startup
      </span>
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

export default {
  components: { RadioGroup, RadioGroupLabel, RadioGroupOption, RadioGroupDescription },

  setup() {
    const plan = ref('startup')

    return { plan }
  },
}
</script>
