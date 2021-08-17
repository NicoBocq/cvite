<template>
  <div class="relative h-screen flex flex-col bg-gray-100 overflow-hidden">
    <div class="h-20 w-full py-4 px-4 sm:px-6 lg:px-8 bg-gray-800 flex justify-between shadow flex-shrink-0">
      <n-button icon="chevron-left" @click="goTo({ name: 'Home'})" />
      <n-button @click="addNicoBocq" icon="plus" />
      <n-button @click="clearState" icon="minus" />
      <n-button icon="download" @click="exportToPdf">
        Télécharger
      </n-button>
    </div>
    <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 flex overflow-hidden">
      <div class="w-1/2 hidden md:flex items-center justify-center">
        <preview />
      </div>
      <div class="w-full md:w-1/2 flex flex-col flex-1">
        <div class="h-16 p-4 flex items-center border-b border-gray-200">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Contenu</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Design</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
          </div>
        </div>
        <div class="relative h-full px-4 overflow-y-auto">
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
import { addNicoBocq, clearState } from "../../store";

export default {
  name: "Edit",
  components: {NButton, Preview, ResumeForm},
  setup() {
    return {
      exportToPdf,
      goTo,
      addNicoBocq,
      clearState
    }
  }
}
</script>