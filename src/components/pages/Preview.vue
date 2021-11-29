<template>
  <resume-preview
    v-if="parseModel && parseResume"
    :model="parseModel"
    :resume="parseResume"
  />
</template>

<script>
import ResumePreview from '../layout/ResumePreview.vue'
import { useRoute } from 'vue-router'
export default {
  name: 'Preview',
  components: { ResumePreview },
  setup () {
    const route = useRoute()
    const params = route.params
    const { model, resume } = params
    /* Router 4 : impossible to pass object to params */
    const parseModel = JSON.parse(model)
    const parseResume = JSON.parse(resume)

    return {
      parseModel,
      parseResume
    }
  }
}
</script>
