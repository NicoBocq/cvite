<template>
  <n-box-form>
    <template v-if="isList">
      <n-inline-editing class="text-xl font-bold" v-model="model[stateKey].title" />
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
      <transition name="fade-shrink" mode="out-in">
        <n-button
          v-if="!active"
          key="add-close"
          @click="toggle"
          theme="secondary"
          icon="plus"
          small
        >
          Ajouter un nouvel élément
        </n-button>
        <div v-else key="add-open" class="space-y-4 px-4 bg-gradient-to-b from-white via-white to-gray-100 md:px-6 py-4 rounded-lg shadow-inner shadow md:grid md:grid-cols-2 md:gap-2" ref="refAdd">
        <div class="flex space-x-2 items-center cursor-pointer group" @click="toggle">
          <n-icon icon="plus" small class="group-hover:rotate-45 group-hover:text-gray-500 transform transition duration-300" />
          <h3 class="text-sm group-hover:text-gray-500 flex-1">
            Ajouter un nouvel élément
          </h3>
        </div>
        <form-item-generator
          v-for="item in model[stateKey].data"
          :scheme-item="item"
          is-create
        />
        <div class="flex space-x-4 justify-end col-span-2">
          <n-button label="Fermer" small icon="x" @click="toggle" theme="transparent" />
          <n-button label="Sauver" small icon="check" @click="save(stateKey)" :disabled="isValid(stateKey)" />
        </div>
      </div>
      </transition>
    </template>
    <template v-else>
      <n-inline-editing v-if="hasTitle" class="text-xl font-bold" v-model="model[stateKey].title" />
      <form-item-generator
        v-for="item in model[stateKey].data"
        :scheme-item="item"
        :edit-item="resume"
      />
    </template>
  </n-box-form>
</template>
<script>
import draggable from 'vuedraggable'
import NDisclosure from "../ui/NDisclosure.vue";
import NButton from "../ui/NButton.vue";
import NIcon from "../ui/NIcon.vue";
import NInput from "../ui/NInput.vue";
import { addItem, resume, model, removeItem, saveItem, isValid }  from '@/modules/resumeStore.js'

import NBoxForm from "../ui/NBoxForm.vue";
import NInlineEditing from "../ui/NInlineEditing.vue";
import {onMounted, ref, toRefs, watch, watchEffect, provide, computed} from "vue";
import FormListItem from "./FormListItem.vue";
import FormItemGenerator from "./FormItemGenerator.vue";

export default {
  name: "FormSection",
  components: {
    FormItemGenerator,
    FormListItem, NInlineEditing, NBoxForm, NInput, NIcon, NButton, NDisclosure, draggable },
  props: {
    stateKey: {
      type: String
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
  setup(props) {
    const { stateKey, titleKey } = toRefs(props)

    provide('stateKey', stateKey)
    provide('titleKey', titleKey)
    const active = ref(false)
    const refAdd = ref(null)
    const toggle = () => {
      active.value = !active.value
    }

    const save = (key) => {
      saveItem(key)
      refAdd.value.scrollIntoView({ behavior: 'smooth'})
    }

    return {
      stateKey,
      titleKey,
      addItem,
      resume,
      model,
      removeItem,
      active,
      toggle,
      saveItem,
      refAdd,
      save,
      isValid
    }
  }
}
</script>
