<template>
  <resume-preview
    v-if="active"
    :model="modelData"
    :resume="resumeData"
    :theme="themeData"
    :print="true"
  />
</template>

<script>
import ResumePreview from '../layout/ResumePreview.vue'
import { ref } from 'vue'
export default {
  name: 'Preview',
  components: { ResumePreview },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    resume: {
      type: Object,
      default: () => {}
    }
  },
  setup () {
    const modelData = ref({})
    const resumeData = ref({})
    const themeData = ref({})
    const active = ref(false)

    window.getData = (data) => {
      const { model, resume, theme } = data
      modelData.value = model
      resumeData.value = resume
      themeData.value = theme
      active.value = true
    }

    return {
      modelData,
      resumeData,
      themeData,
      active
    }
  }
}
</script>

<!--<style scoped>-->
<!--  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');-->
<!--  body {-->
<!--    font-family: 'Inter', sans-serif;-->
<!--}-->
<!--</style>-->
