<template>
  <div class="space-y-4">
    <div class="flex justify-between space-x-4">
      <div class="flex items-center space-x-2 min-w-0">
        <n-icon v-if="resume[stateKey].length > 1" color="text-gray-200" icon="selector" class="handle cursor-move hover:text-gray-800" />
        <span @click="toggle" class="cursor-pointer truncate">{{ element[titleKey] ? element[titleKey] : '[Provisoire]' }}</span>
      </div>
      <n-button icon="trash" @click="removeItem(element.id, stateKey)" />
    </div>
    <div v-if="active" class="flex flex-col space-y-2" :ref="'add' + stateKey">
<!--      <form-item :element="element" />-->
      <div class="space-y-4">
        <n-input
          v-for="item in model[stateKey].data"
          :key="stateKey + '-' + item.key + '-' + element.id"
          :id="stateKey + '-' + item.key + '-' + element.id"
          :type="item.type"
          v-model="element[item.key]"
          :placeholder="item.placeholder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { resume, model, removeItem } from "../../store.js";
import {ref, toRefs, inject} from "vue";
import NDisclosure from "../ui/NDisclosure.vue";
import NInput from "../ui/NInput.vue";
import NButton from "../ui/NButton.vue";
import NIcon from "../ui/NIcon.vue";
import FormItem from "./FormItem.vue";

export default {
  name: "FormListItem",
  components: {FormItem, NIcon, NButton, NInput, NDisclosure},
  props: {
    element: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    const active = ref(false)
    const { element } = toRefs(props)
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
      element,
      toggle,
      titleKey
    }
  }
}
</script>
