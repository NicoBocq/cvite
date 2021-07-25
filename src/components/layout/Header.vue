<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <h1 class="text-4xl font-extralight">
              <span class="font-extrabold text-gray-600">CV</span>ite
            </h1>
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <n-button @click="printToPdf" icon="download">Télécharger</n-button>
          <n-button @click="toggleSlide">Ouvrir</n-button>
<!--          <a href="#" class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</a>-->
<!--          <a href="#" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">Sign up</a>-->
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
<!--        <a v-for="link in navigation" :key="link.name" :href="link.href" class="text-base font-medium text-white hover:text-indigo-50">-->
<!--          {{ link.name }}-->
<!--        </a>-->
        <n-button @click="printToPdf" icon="download">Télécharger</n-button>
        <n-button @click="toggleSlide">Ouvrir</n-button>
      </div>
    </nav>
  </header>
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
