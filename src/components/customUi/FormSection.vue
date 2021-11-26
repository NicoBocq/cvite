<template>
  <n-box-form>
    <template v-if="isList">
      <n-inline-editing
        v-model="model[stateKey].title"
        class="text-xl font-bold"
      />
      <draggable
        v-model="resume[stateKey]"
        item-key="id"
        ghost-class="ghost-class"
        handle=".handle"
        class="divide-y divide-gray-200"
        tag="transition-group"
        :component-data="{ tag: 'div', name: 'list', type: 'transition' }"
      >
        <template #item="{ element }">
          <form-list-item :element="element" />
        </template>
      </draggable>
      <transition
        name="fade-shrink"
        mode="out-in"
      >
        <n-button
          v-if="!active"
          key="add-close"
          theme="secondary"
          icon="plus"
          small
          @click="toggle"
        >
          {{ t('ui.addElement') }}
        </n-button>
        <div
          v-else
          key="add-open"
          ref="refAdd"
          class="space-y-4 px-4 bg-gradient-to-b from-white via-white to-gray-50 md:px-6 py-4 rounded-lg shadow-inner shadow md:grid md:grid-cols-2 md:gap-2"
        >
          <div
            class="flex space-x-2 items-center cursor-pointer group"
            @click="toggle"
          >
            <n-icon
              icon="plus"
              small
              class="group-hover:rotate-45 group-hover:text-gray-500 transform transition duration-300"
            />
            <h3 class="text-sm font-medium group-hover:text-gray-500 flex-1">
              {{ t('ui.addElement') }}
            </h3>
          </div>
          <form-item-generator
            v-for="(item, idx) in model[stateKey].data"
            :key="'add-' + model[stateKey] + idx"
            :scheme-item="item"
            is-create
          />
          <div class="flex space-x-4 justify-end col-span-2">
            <n-button
              :label="t('ui.close')"
              small
              icon="x"
              theme="transparent"
              @click="toggle"
            />
            <n-button
              :label="t('ui.save')"
              small
              icon="check"
              :disabled="!isValid(stateKey)"
              @click="save(stateKey)"
            />
          </div>
        </div>
      </transition>
    </template>
    <template v-else>
      <n-inline-editing
        v-if="hasTitle"
        v-model="model[stateKey].title"
        class="text-xl font-bold"
      />
      <form-item-generator
        v-for="(item, idx) in model[stateKey].data"
        :key="'new-' + model[stateKey] + idx"
        :scheme-item="item"
        :edit-item="resume"
      />
    </template>
  </n-box-form>
</template>
<script>
import draggable from 'vuedraggable'
import NButton from '../ui/NButton.vue'
import NIcon from '../ui/NIcon.vue'
import {
  addItem,
  resume,
  model,
  removeItem,
  saveItem,
  isValid
} from '@/modules/resumeStore.js'

import NBoxForm from '../ui/NBoxForm.vue'

import {
  ref,
  toRefs,
  provide, defineAsyncComponent
} from 'vue'
import { useI18n } from 'vue-i18n'

const NInlineEditing = defineAsyncComponent({
  loader: () => import('../ui/NInlineEditing.vue')
})

const FormListItem = defineAsyncComponent({
  loader: () => import('./FormListItem.vue')
})

const FormItemGenerator = defineAsyncComponent({
  loader: () => import('./FormItemGenerator.vue')
})

export default {
  name: 'FormSection',
  components: {
    FormItemGenerator,
    FormListItem,
    NInlineEditing,
    NBoxForm,
    NIcon,
    NButton,
    draggable
  },
  props: {
    stateKey: {
      type: String,
      default: ''
    },
    titleKey: {
      type: String,
      default: 'label'
    },
    isList: {
      type: Boolean,
      default: true
    },
    hasTitle: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const { stateKey, titleKey } = toRefs(props)
    const { t } = useI18n()
    provide('stateKey', stateKey)
    provide('titleKey', titleKey)
    const active = ref(false)
    const refAdd = ref(null)
    const toggle = () => {
      active.value = !active.value
    }

    const save = (key) => {
      saveItem(key)
      refAdd.value.scrollIntoView({ behavior: 'smooth' })
    }

    return {
      addItem,
      resume,
      model,
      removeItem,
      active,
      toggle,
      saveItem,
      refAdd,
      save,
      isValid,
      t
    }
  }
}
</script>
