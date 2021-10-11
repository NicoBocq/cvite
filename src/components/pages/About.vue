<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex">
    <div class="max-w-2xl">
      <preview />
    </div>
    <div class="h-screen max-w-2xl overflow-y-auto">
      <resume-form />
    </div>
  </div>
</template>

<script>
import ResumeForm from '../customUi/ResumeForm.vue'
import Preview from '../layout/Preview.vue'
export default {
  name: 'About',
  components: { Preview, ResumeForm }
}
</script>
