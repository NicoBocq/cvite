<template>
  <n-box-form>
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
      <div class="flex space-x-2 items-center">
        <n-icon icon="plus" small />
        <h3 class="text-sm font-semibold cursor-pointer" @click="toggle">
          Ajouter un nouvel élément
        </h3>
      </div>
      <n-input
        v-for="item in model[stateKey].data"
        :key="stateKey + '-' + item.key + '-new'"
        :id="stateKey + '-' + item.key + '-new'"
        :type="item.type"
        v-model="model[stateKey].new[item.key]"
        :class="item.short ? '' : 'md:col-span-2'"
        :placeholder="item.placeholder"
      />
<!--      <form-item />-->
      <div class="flex space-x-4 justify-end col-span-2">
        <n-button label="Fermer" small icon="x" @click="toggle" theme="transparent" />
        <n-button label="Sauver" small icon="check" @click="save(stateKey)" />
      </div>
    </div>
    </transition>
  </n-box-form>
</template>
<script>
import draggable from 'vuedraggable'
import NDisclosure from "../ui/NDisclosure.vue";
import NButton from "../ui/NButton.vue";
import NIcon from "../ui/NIcon.vue";
import NInput from "../ui/NInput.vue";
import { addItem, resume, model, removeItem, saveItem }  from '@/modules/resumeStore.js'

import NBoxForm from "../ui/NBoxForm.vue";
import NInlineEditing from "../ui/NInlineEditing.vue";
import { onMounted, ref, toRefs, watch, watchEffect, provide} from "vue";
import FormListItem from "./FormListItem.vue";
import FormItem from "./FormItem.vue";

export default {
  name: "FormList",
  components: {FormItem, FormListItem, NInlineEditing, NBoxForm, NInput, NIcon, NButton, NDisclosure, draggable },
  props: {
    stateKey: {
      type: String
    },
    titleKey: {
      type: String,
      default: 'label'
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

    // watchEffect(() => {
    //   active.value = !resume[stateKey]?.length
    // })

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
      save
    }
  }
}
</script>
