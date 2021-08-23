<template>
  <n-input
    v-for="item in model[stateKey].data"
    :key="stateKey + '-' + item.key + '-' + id"
    :id="stateKey + '-' + item.key + '-' + id"
    :type="item.type"
    v-model="bindObj[item.key]"
    :placeholder="item.placeholder"
  />
</template>

<script>
import { resume, model } from "../../store.js";
import {toRefs, inject, watch, onMounted, ref, watchEffect, reactive, computed} from "vue";
import NInput from "../ui/NInput.vue";
import {useModelWrapper} from "../../composables/modelWrapper";

export default {
  name: "FormItem",
  components: { NInput },
  props: {
    element: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['update:element'],
  setup(props, { emit }) {
    const { element } = toRefs(props)
    const stateKey = inject('stateKey')
    const titleKey = inject('titleKey')
    const id = ref(Date.now())
    const bindObj = useModelWrapper(props, emit)
    // const bindObj = ref({})
    // const isElement = computed(() => element)
    // const bindObj = computed({
    //   get: () => isElement ? element : model[stateKey].new,
    //   set: (val) => isElement ? emit('update:element', val) : emit('update:element', val)
    // })

    // watchEffect(() => {
    //   if (!element) {
    //     console.log('new')
    //     Object.assign(bindObj.value, model[stateKey].new)
    //   } else {
    //     Object.assign(bindObj.value, element)
    //   }
    // })

    // watch(() => add, (val) => {
    //   if (val) {
    //     Object.assign(bindObj.value, model[stateKey].new)
    //   } else {
    //     Object.assign(bindObj.value, element)
    //   }
    // })
    // const vModelBinding = () => {
    //   if (!element) {
    //     console.log(element)
    //     return model[stateKey].new
    //   } else {
    //     return element
    //   }
    // }
    onMounted(() => {
      if (!element.value) {
        bindObj.value = model[stateKey]?.new
      } else {
        console.log('element ok')
        bindObj.value = element.value
      }
    })

    return {
      resume,
      model,
      stateKey,
      element,
      titleKey,
      bindObj,
      id
    }
  }
}
</script>
