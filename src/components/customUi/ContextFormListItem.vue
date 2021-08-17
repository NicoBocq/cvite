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
          <div class="p-2 rounded-md space-y-2 hover:shadow">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-2">
                <n-icon v-if="resume[stateKey].length > 1" icon="selector" class="handle cursor-move text-gray-200 hover:text-gray-800" />
                <span>{{ element[titleKey] }}</span>
              </div>
              <n-button icon="trash" @click="removeItem(element.id, stateKey)" />
            </div>
            <div>
              <div class="flex flex-col space-y-2">
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

export default {
  name: "ContextFormListItem",
  components: {NInlineEditing, NBoxForm, NInput, NIcon, NButton, NDisclosure, draggable },
  props: {
    stateKey: {
      type: String
    },
    titleKey: {
      type: String,
      default: 'label'
    }
  },
  setup({ stateKey, titleKey }) {
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
