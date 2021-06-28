<template>
  <div class="flex justify-between py-2 px-4">
    <h1 class="text-4xl font-extralight"><span class="font-extrabold text-gray-600">CV</span>ite</h1>
    <div class="flex-1" />
    <div class="flex items-center space-x-2">
      <n-dropdown />
      <n-button @click="printToPdf" icon="download">Télécharger</n-button>
      <n-button @click="toggleSlide">Ouvrir</n-button>
    </div>
  </div>
</template>

<script>
import { toggleSlide } from '/src/store'
import NDropdown from "../ui/NDropdown.vue";
import NButton from "../ui/NButton.vue";
import { printToPdf } from '/src/pdf'
import { useRouter } from "vue-router";
export default {
  name: "Header",
  components: {
    NButton,
    NDropdown
  },
  setup() {
    const router = useRouter()
    const redirectToExport = () => {
      router.push({ name: 'Export' })
    }
    return {
      toggleSlide,
      printToPdf
    }
  }
}
</script>
