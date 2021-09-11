<template>
  <div class="relative h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
<!--    <div class="h-20 w-full py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 flex justify-between shadow flex-shrink-0">-->
<!--      <n-button icon="chevron-left" @click="goTo({ name: 'Home'})" />-->
<!--      <n-button @click="addNicoBocq" icon="plus" label="NicoBocq" />-->
<!--      <n-button @click="setNewResume" icon="refresh" label="Nouveau" />-->
<!--      <n-button icon="download" @click="exportToPdf">-->
<!--        Télécharger-->
<!--      </n-button>-->
<!--    </div>-->
<!--    <div class="fixed top-2 left-2 hidden md:block">-->
<!--      <n-button icon="chevron-left" @click="goTo({ name: 'Home'})" />-->
<!--    </div>-->
    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 flex overflow-hidden">
      <div class="w-1/2 hidden md:flex md:flex-col md:items-center md:justify-center overflow-scroll">
        <preview />
      </div>
      <div class="w-full lg:w-1/2 flex flex-col flex-1 px-2 md:px-4">
        <div class="h-16 flex items-center justify-between border-b border-gray-200 overflow-hidden">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
<!--            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Contenu</a>-->
<!--            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Design</a>-->
          </div>
<!--          <n-menu />-->
          <div class="space-x-2">
            <n-button @click="addNicoBocq" icon="plus" />
            <n-button @click="setNewResume" icon="x" />
            <n-button icon="download" @click="exportToPdf">
              Télécharger
            </n-button>
          </div>
        </div>
        <div class="relative h-full overflow-y-auto">
          <resume-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResumeForm from "../customUi/ResumeForm.vue";
import Preview from "../layout/Preview.vue";
import NButton from "../ui/NButton.vue";
import exportToPdf from '/src/composables/pdf'
import goTo from "../../composables/helpers"
import { addNicoBocq, clearState, setNewResume, resume } from '@/modules/resumeStore.js'
import {nextTick, onMounted, ref, watch} from "vue";
import NMenu from "../ui/NMenu.vue";

export default {
  name: "Edit",
  components: {NMenu, NButton, Preview, ResumeForm},
  setup() {
    const setViewHeight = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    onMounted(async () => {
      setViewHeight()
      window.addEventListener('resize', () => {
        setViewHeight()
      })
    })
    return {
      exportToPdf,
      goTo,
      addNicoBocq,
      clearState,
      setNewResume
    }
  }
}
</script>
