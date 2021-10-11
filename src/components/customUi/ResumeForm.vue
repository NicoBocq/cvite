<template>
  <div class="space-y-6 py-6">
    <form-section state-key="main" :is-list="false" :has-title="false" />
    <n-box-form>
      <n-upload v-model="resume.avatar" />
    </n-box-form>
    <form-section state-key="experience" title-key="title" />
    <form-section state-key="education" title-key="degree" />
    <form-section state-key="link" />
    <form-section state-key="skill" />
    <form-section state-key="hobby" :is-list="false" />
  </div>
</template>

<script>
import NBoxForm from '../ui/NBoxForm.vue'
import NInput from '../ui/NInput.vue'
import NUpload from '../ui/NUpload.vue'
import FormSection from './FormSection.vue'
import { resume, model } from '@/modules/resumeStore.js'
import NInlineEditing from '../ui/NInlineEditing.vue'

export default {
  name: 'ResumeForm',
  components: { NInlineEditing, FormSection, NUpload, NInput, NBoxForm },
  setup () {
    return {
      resume,
      model
    }
  }
}
</script>
