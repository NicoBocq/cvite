<template>
  <div class="h-screen w-screen bg-white">
    <Header />
    <NSlide :active="isSlideOpen" @close="toggleSlide">
      <template #body>
        <resume-form />
      </template>
    </NSlide>
    <Summary />
  </div>
</template>
<script>
import NInput from './ui/NInput.vue'
import NDropdown from "./ui/NDropdown.vue"
import NIcon from "./ui/NIcon.vue";
import NButton from "./ui/NButton.vue";
import NSlide from "./ui/NSlide.vue";
import Summary from "./layout/Summary.vue";
import Header from "./layout/Header.vue";
import ResumeForm from "./customUi/ResumeForm.vue";
import { isSlideOpen, toggleSlide } from "../store";

export default {
  name: 'Main',
  components: { ResumeForm, Header, Summary, NSlide, NButton, NIcon, NDropdown, NInput },
  setup(props, context) {
    return {
      isSlideOpen,
      toggleSlide
    }
  }
}
</script>
