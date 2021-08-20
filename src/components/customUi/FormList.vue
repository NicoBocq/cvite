<template>
  <n-box-form>
    <n-inline-editing class="text-xl font-bold" v-model="model[stateKey].title" />
    <draggable
      v-model="resume[stateKey]"
      item-key="id"
      ghost-class="ghost-class"
      handle=".handle"
      class="space-y-6"
      tag="transition-group"
      :component-data="{ tag: 'div', name: 'list', type: 'transition' }"
    >
      <template #item="{ element }">
        <form-list-item :element="element" />
      </template>
    </draggable>
    <n-button @click="addItem(stateKey)" icon="plus" small>
      Ajouter un nouvel élément
    </n-button>
  </n-box-form>
</template>
<script>
import draggable from 'vuedraggable'
import NDisclosure from "../ui/NDisclosure.vue";
import NButton from "../ui/NButton.vue";
import NIcon from "../ui/NIcon.vue";
import NInput from "../ui/NInput.vue";
import { addItem, resume, model, removeItem } from "../../store.js";
import NBoxForm from "../ui/NBoxForm.vue";
import NInlineEditing from "../ui/NInlineEditing.vue";
import {onMounted, ref, toRefs, watch, watchEffect, provide} from "vue";
import FormListItem from "./FormListItem.vue";

export default {
  name: "FormList",
  components: {FormListItem, NInlineEditing, NBoxForm, NInput, NIcon, NButton, NDisclosure, draggable },
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


    return {
      stateKey,
      titleKey,
      addItem,
      resume,
      model,
      removeItem
    }
  }
}
</script>
