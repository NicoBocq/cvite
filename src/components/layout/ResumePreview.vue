<template>
  <div class="relative">
    <div
      ref="preview"
      class="
        shadow-xl
        select-none
        cursor-move
        flex-shrink-0
        grid grid-cols-3
        bg-white
      "
      style="width: 529px; min-height: 748px"
    >
      <div class="col-span-2 p-4 space-y-4 flex items-center">
        <preview-header
          resume-key="title"
          :resume="resume"
          :model="model"
        />
      </div>
      <div class="text-white bg-gray-800 p-4 space-y-4 flex items-center">
        <preview-header
          resume-key="contact"
          :resume="resume"
          :model="model"
        />
      </div>
      <div class="col-span-2 row-span-4 p-4 space-y-4">
        <preview-section
          resume-key="experience"
          :resume="resume"
          :model="model"
        />
        <preview-section
          resume-key="education"
          :resume="resume"
          :model="model"
        />
      </div>
      <div class="text-white row-span-4 bg-gray-800 p-4 space-y-4">
        <preview-section
          resume-key="link"
          :resume="resume"
          :model="model"
        />
        <preview-section
          resume-key="skill"
          :resume="resume"
          :model="model"
        />
        <div
          v-if="resume.hobby"
          class="space-y-2"
        >
          <div class="font-bold text-plg">
            {{ model.hobby.title }}
          </div>
          <div
            v-if="resume.hobby"
            class="text-pxs"
          >
            {{ resume.hobby }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewSection from '../customUi/PreviewSection.vue'
import PreviewHeader from '../customUi/PreviewHeader.vue'
import { ref } from 'vue'

export default {
  name: 'ResumePreview',
  components: { PreviewHeader, PreviewSection },
  props: {
    resume: {
      type: Object,
      required: true
    },
    model: {
      type: Object,
      required: true
    }
  },
  setup () {
    const preview = ref(null)
    // const isPageBreak = ref(false)
    // const calcHeight = (el) => {
    //   isPageBreak.value = el.clientHeight > 748
    // }
    // watchEffect(
    //   () => {
    //     calcHeight(preview.value)
    //   },
    //   { flush: 'post' }
    // )
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
      // isPageBreak,
      preview
    }
  }
}
</script>
