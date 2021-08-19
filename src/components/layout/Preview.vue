<template>
  <div class="shadow-xl select-none cursor-move flex-shrink-0" style="width: 595px">
    <div class="flex">
      <div class="w-2/3 bg-white space-y-8 p-4">
        <preview-header resume-key="title" />
      </div>
      <div class="w-1/3 bg-gray-800 p-4 text-white">
        <preview-header resume-key="contact" />
    </div>
    </div>
    <div class="flex">
      <div class="w-2/3 bg-white space-y-6 p-4">
        <preview-section resume-key="experience" />
        <preview-section resume-key="education" />
      </div>
      <div class="w-1/3 bg-gray-800 p-4 text-white space-y-6">
        <preview-section resume-key="link" />
        <preview-section resume-key="skill" />
<!--        <preview-section resume-key="hobby" />-->
      </div>
    </div>
  </div>
</template>

<script>
import { resume, model } from '/src/store'
import PreviewSection from "../customUi/PreviewSection.vue";
import PreviewHeader from "../customUi/PreviewHeader.vue";

export default {
  name: "Preview",
  components: {PreviewHeader, PreviewSection },
  setup() {
    return {
      resume,
      model
    }
  }
}
</script>
