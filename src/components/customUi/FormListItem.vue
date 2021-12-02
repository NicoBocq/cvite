<template>
  <div class="space-y-4 py-3">
    <div class="flex justify-between space-x-4">
      <div class="flex items-center space-x-2 min-w-0 flex-1 select-none">
        <n-icon
          v-if="resume[stateKey].length > 1"
          color="text-gray-200"
          icon="selector"
          class="handle cursor-move hover:text-gray-800"
        />
        <div
          class="cursor-pointer truncate hover:text-gray-500 flex-1"
          @click="toggle"
        >
          {{ element[titleKey] }}
        </div>
      </div>
      <n-button
        icon="trash-outline"
        theme="transparent"
        small
        @click="removeItem(element.id, stateKey)"
      />
    </div>
    <transition
      name="fade-shrink"
      tag="div"
    >
      <div
        v-if="active"
        :ref="'add' + stateKey"
        class="flex flex-col space-y-2 py-4 px-4 md:px-6"
      >
        <div class="space-y-4 md:grid md:gap-2 md:grid-cols-2">
          <form-item-generator
            v-for="(item, idx) in model[stateKey].data"
            :key="'edit-' + model[stateKey] + idx"
            :scheme-item="item"
            :edit-item="element"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { model, resume, removeItem } from '@/modules/resumeStore.js'
import { ref, inject } from 'vue'
import NButton from '../ui/NButton.vue'
import NIcon from '../ui/NIcon.vue'
import FormItemGenerator from './FormItemGenerator.vue'

export default {
  name: 'FormListItem',
  components: { FormItemGenerator, NIcon, NButton },
  props: {
    element: {
      type: Object,
      default: () => {}
    }
  },
  setup () {
    const active = ref(false)
    const stateKey = inject('stateKey')
    const titleKey = inject('titleKey')
    const toggle = () => {
      active.value = !active.value
    }

    return {
      active,
      resume,
      model,
      removeItem,
      stateKey,
      toggle,
      titleKey
    }
  }
}
</script>
