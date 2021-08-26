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
    <n-button
      v-if="!active"
      @click="toggle"
      theme="transparent"
      icon="plus"
      small
    >
      Ajouter un nouvel élément
    </n-button>
    <div v-if="active" class="space-y-4 px-6 py-4 rounded-lg ring ring-gray-200 ring-opacity-50 shadow-inner shadow grid grid-cols-2 gap-2" ref="refAdd">
      <h3 class="font-medium text-gray-500 text-lg">
        Ajouter un nouvel élément
      </h3>
      <n-input
        v-for="item in model[stateKey].data"
        :key="stateKey + '-' + item.key + '-new'"
        :id="stateKey + '-' + item.key + '-new'"
        :type="item.type"
        v-model="model[stateKey].new[item.key]"
        :class="item.short ? '' : 'sm:col-span-2'"
        :placeholder="item.placeholder"
      />
<!--      <form-item />-->
      <div class="flex space-x-4 justify-end col-span-2">
        <n-button label="Fermer" small icon="x" @click="toggle" theme="transparent" />
        <n-button label="Sauver" small icon="check" @click="saveItem(stateKey)" />
      </div>
    </div>
  </n-box-form>
</template>
<script>
import draggable from 'vuedraggable'
import NDisclosure from "../ui/NDisclosure.vue";
import NButton from "../ui/NButton.vue";
import NIcon from "../ui/NIcon.vue";
import NInput from "../ui/NInput.vue";
import { addItem, resume, model, removeItem, saveItem } from "../../store.js";
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

    watchEffect(() => {
      active.value = !resume[stateKey]?.length
    })

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
      refAdd
    }
  }
}
</script>
