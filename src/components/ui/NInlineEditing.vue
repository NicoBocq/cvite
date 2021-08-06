<template>
  <div class="flex flex-col">
    <transition name="fade" mode="out-in">
      <div v-if="!active" @click="toggle" class="cursor-pointer hover:text-opacity-50" v-bind="$attrs" key="close">
        {{ modelValue }}
      </div>
      <div v-else class="flex space-x-2 justify-between" key="open" @keydown.enter="save" @keydown.esc="toggle">
        <n-input v-model="modelValue" class="flex-1" ref="inputRef" />
        <n-button icon="check" @click="save" />
        <n-button icon="x" @click="toggle" />
      </div>
    </transition>
  </div>
</template>

<script>
import {ref, watch, toRefs, nextTick, watchEffect, onMounted} from "vue";
import NInput from "./NInput.vue";
import NButton from "./NButton.vue";

export default {
  name: "NInlineEditing",
  props: {
    modelValue: {
      type: String
    },
  },
  emits: ['update:modelValue'],
  components: { NButton, NInput },
  setup(props, { emit }) {
    const active = ref(false)
    const inputRef = ref(null)

    const toggle = async () => {
      active.value = !active.value
      // if (active && !!inputRef.value) {
      //   setTimeout(() => {
      //     console.log('zob')
      //     inputRef.value.focus()
      //   }, 3000)
      // }
     // await nextTick(() => {
     //   refs.input.focus()
     // })
      // console.log(inputRef.value)
      // if (active.value && !!inputRef.value) {
      //   // await nextTick(() => {
      //     inputRef.value.focus()
      //   // })
      // }
    }

    const focusInput = (el) => {
      if (!el) return
      el.focus()
    }

    // watchEffect(() => {
    //     console.log(inputRef.value) // => input
    //     if (!!inputRef.value) inputRef.value.focus()
    //   },
    //   {
    //     flush: 'post'
    //   }
    // )

    const save = () => {
      emit('update:modelValue', props.modelValue)
      toggle()
    }
    watchEffect(async () => {
      if (active) {
        await nextTick()
        await focusInput(inputRef.value)
      }
      // if (!!active && inputRef.value) inputRef.value.focus()
    }, {
      flush: 'post'
    })
    // onMounted(() => {
    //   inputRef.value.focus()
    // })

    // watch(active, async (val) => {
    //   // if (active) {
    //   //   console.log(val)
    //   //   val.value.focus()
    //   // }
    //   if (val) {
    //     await nextTick(() => {
    //       val.value.focus()
    //     })
    //   }
    // })

    return {
      toggle,
      active,
      save,
      inputRef
    }
  }
}
</script>
