<template>
<div class="relative">
  <div
    class="shadow-xl select-none cursor-move auto-rows-25/75 flex-shrink-0 grid grid-cols-3 bg-white relative"
    style="width: 529px; min-height: 748px;"
    ref="preview"
  >
    <div class="col-span-2 p-4 space-y-4">
      <preview-header resume-key="title" />
    </div>
    <div class="text-white bg-gray-800 p-4 space-y-4">
      <preview-header resume-key="contact" />
    </div>
    <div class="col-span-2 p-4 space-y-4">
      <preview-section resume-key="experience" />
      <preview-section resume-key="education" />
    </div>
    <div class="text-white bg-gray-800 p-4 space-y-4">
    <preview-section resume-key="link" />
    <preview-section resume-key="skill" />
<!--        <preview-section resume-key="hobby" />-->
</div>
  </div>
  <div class="absolute border-gray-200 z-10 h-4 bg-white bg-opacity-75 text-xs font-bold left-0 right-0 w-full text-center" v-if="isPageBreak" style="top: 748px">
    Saut de page
  </div>
</div>
</template>

<script>
import { resume, model } from '/src/store'
import PreviewSection from "../customUi/PreviewSection.vue";
import PreviewHeader from "../customUi/PreviewHeader.vue";
import {nextTick, onMounted, ref, watch, watchEffect} from "vue";

export default {
  name: "Preview",
  components: {PreviewHeader, PreviewSection },
  setup() {
    const preview = ref(null)
    const isPageBreak = ref(false)
    const calcHeight = (el) => {
      console.log(el.clientHeight)
      isPageBreak.value = el.clientHeight > 748
    }
    watchEffect(() => {
      calcHeight(preview.value)
    }, { flush: 'post'})
    // watch(preview, async (val) => {
    //   if (!!val) {
    //     await nextTick()
    //     calcHeight()
    //   }
    // })
    // onMounted(() => {
    //   calcHeight()
    // })
    return {
      resume,
      model,
      isPageBreak,
      preview
    }
  }
}
</script>
