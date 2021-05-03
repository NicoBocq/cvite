<template>
  <div class="h-screen w-screen overflow-hidden bg-white">
    <Header />
    <Slide />
    <Summary />
  </div>
</template>
<script>
import { ref, computed, reactive, toRefs, watchEffect  } from 'vue'
import NInput from "./ui/NInput.vue"
import NDropdown from "./ui/NDropdown.vue"
import NIcon from "./ui/NIcon.vue";
import NButton from "./ui/NButton.vue";
import Slide from "./layout/Slide.vue";
import Summary from "./layout/Summary.vue";
import Header from "./layout/Header.vue";

export default {
  name: 'Main',
  components: {Header, Summary, Slide, NButton, NIcon, NDropdown, NInput },
  setup(props, context) {
  }
}
</script>
