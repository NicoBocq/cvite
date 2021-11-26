<template>
  <Listbox
    v-model="selected"
    as="div"
  >
    <ListboxLabel class="sr-only">
      Change published status
    </ListboxLabel>
    <div class="relative">
      <div class="inline-flex shadow-sm rounded-md divide-x divide-brand-600">
        <div class="relative z-0 inline-flex shadow-sm rounded-md divide-x divide-brand-600">
          <div class="relative inline-flex items-center bg-brand-500 py-2 pl-3 pr-4 border border-transparent rounded-l-md shadow-sm text-white">
            <div
              class="ml-2.5 text-sm font-medium flex"
              @click=""
            >
              <span>Download</span>
              <n-icon icon="download" />
            </div>
          </div>
          <ListboxButton class="relative inline-flex items-center bg-brand-500 p-2 rounded-l-none rounded-r-md text-sm font-medium text-white hover:bg-brand-600 focus:outline-none focus:z-10 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-brand-500">
            <span class="sr-only">Change published status</span>
            <ChevronDownIcon
              class="h-5 w-5 text-white"
              aria-hidden="true"
            />
          </ListboxButton>
        </div>
      </div>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions class="origin-top-right absolute z-10 right-0 mt-2 w-72 rounded-md shadow-lg overflow-hidden bg-white divide-y divide-gray-200 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <ListboxOption
            v-for="option in publishingOptions"
            :key="option.title"
            v-slot="{ active, selected }"
            as="template"
            :value="option"
          >
            <li :class="[active ? 'text-white bg-brand-500' : 'text-gray-900', 'cursor-default select-none relative p-4 text-sm']">
              <div class="flex flex-col">
                <div class="flex justify-between">
                  <p :class="selected ? 'font-semibold' : 'font-normal'">
                    {{ option.title }}
                  </p>
                  <span
                    v-if="selected"
                    :class="active ? 'text-white' : 'text-brand-500'"
                  >
                    <CheckIcon
                      class="h-5 w-5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/solid'
import NIcon from '../ui/NIcon.vue'

const publishingOptions = [
  { title: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
  { title: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false }
]

export default {
  name: 'Menu',
  components: {
    NIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronDownIcon
  },
  setup () {
    const selected = ref(publishingOptions[0])

    return {
      publishingOptions,
      selected
    }
  }
}
</script>
