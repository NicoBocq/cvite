<template>
  <div class="relative min-h-full">
    <div
      ref="preview"
      class="select-none cursor-move shadow-xl print:shadow-none flex flex-col p-4"
      :style="!print ? `width: 529px; min-height: 748px; background: ${background}` : 'width: 210mm; min-height: 297mm;'"
    >
      <div class="flex">
        <div class="w-2/3 p-4">
          <preview-header
            resume-key="title"
            :resume="resume"
            :model="model"
            :theme="theme"
          />
        </div>
        <div class="w-1/3 text-white p-4">
          <preview-header
            resume-key="contact"
            :resume="resume"
            :model="model"
          />
        </div>
      </div>
      <div class="flex">
        <div class="space-y-6 w-2/3 p-4">
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
        <div class="text-white w-1/3 space-y-6 p-4">
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
            <div class="font-bold text-plg print:text-lg">
              {{ model.hobby.title }}
            </div>
            <div
              v-if="resume.hobby"
              class="text-pxs print:text-sm"
            >
              {{ resume.hobby }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewSection from '../customUi/PreviewSection.vue'
import PreviewHeader from '../customUi/PreviewHeader.vue'
import { computed, onMounted, ref, toRefs } from 'vue'

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
    },
    print: {
      type: Boolean,
      default: false
    },
    theme: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const preview = ref(null)
    const { theme, print } = toRefs(props)
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

    const bodyBackground = () => {
      const body = document.body
      // const html = document.documentElement
      body.style.background = background.value
      // document.querySelectorAll('html, body').forEach(node => node.style.height = '100%')
      // // html.style.width = '210mm'
      // html.style.height = '100%'
      // // body.style.width = '210mm'
      // body.style.height = '100%'
    }

    onMounted(() => {
      if (print.value) {
        bodyBackground()
      }
    })

    const background = computed(() => {
      return `linear-gradient(90deg, #fff ${100 * 2 / 3}%, ${theme.value.color} ${100 / 3}%`
    })

    return {
      // isPageBreak,
      preview,
      background
    }
  }
}
</script>

<!--<style scoped>-->

<!--@media print {-->
<!--  @page {-->
<!--    size: A4;-->
<!--    margin: 0;-->
<!--  }-->

<!--  html, body {-->
<!--    width: 210mm;-->
<!--    height: 297mm;-->
<!--    background: v-bind(background);-->
<!--  }-->
<!--}-->

<!--</style>-->
