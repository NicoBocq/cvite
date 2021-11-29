<template>
  <div class="space-y-6 py-6">
    <form-section
      key="main"
      state-key="main"
      :is-list="false"
      :has-title="false"
    />
    <n-box-form key="photo">
      <n-upload v-model="resume.avatar" />
    </n-box-form>
    <form-section
      key="experience"
      state-key="experience"
      title-key="title"
    />
    <form-section
      key="education"
      state-key="education"
      title-key="degree"
    />
    <form-section
      key="link"
      state-key="link"
    />
    <form-section
      key="skill"
      state-key="skill"
    />
    <form-section
      key="hobby"
      state-key="hobby"
      :is-list="false"
    />
  </div>
</template>

<script>
import NBoxForm from '../ui/NBoxForm.vue'
import { resume, model } from '../../modules/resumeStore.js'
import { defineAsyncComponent } from 'vue'

const FormSection = defineAsyncComponent({
  loader: () => import('../customUi/FormSection.vue')
})

const NUpload = defineAsyncComponent({
  loader: () => import('../ui/NUpload.vue')
})

export default {
  name: 'ResumeForm',
  components: { FormSection, NUpload, NBoxForm },
  setup () {
    return {
      resume,
      model
    }
  }
}
</script>
