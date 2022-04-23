<template>
  <div
    class="print:items-stretch"
    :style="'background:' + background"
  >
    <div
      ref="preview"
      class="select-none cursor-move shadow-xl print:shadow-none flex flex-col p-4 print:p-6 "
      :style="!print ? `width: 529px; min-height: 748px;` : `width: 210mm; min-height: 297mm;`"
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
        <div class="w-1/3 text-white p-4 print:p-6">
          <preview-header
            resume-key="contact"
            :resume="resume"
            :model="model"
          />
        </div>
      </div>
      <div class="flex">
        <div class="space-y-6 w-2/3 p-4 print:p-6">
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
        <div class="text-white w-1/3 space-y-6 p-4 print:p-6">
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
            <div class="font-bold text-plg print:text-clg">
              {{ model.hobby.title }}
            </div>
            <div
              v-if="resume.hobby"
              class="text-pxs print:text-csm"
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
import { computed, ref, toRefs } from 'vue'

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

    const background = computed(() => {
      return `linear-gradient(90deg, #fff ${100 * 2 / 3}%, ${theme.value.color} ${100 / 3}%`
    })

    return {
      preview,
      background
    }
  }
}
</script>
