<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex max-h-screen">
    <div class="w-1/2 overflow-y-auto">
      <preview />
    </div>
    <div class="w-1/2 relative overflow-y-auto bg-gray-800">
      <div class="h-16 p-2 flex items-center">
        <div class="flex space-x-4">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
        </div>
      </div>
      <div class="px-4 py-2">
        <resume-form />
      </div>
      <div class="absolute z-10 bottom-0 h-auto w-full px-2 py-1">
        <n-button icon="download" @click="exportToPdf">
          Télécharger
        </n-button>
      </div>
    </div>
  </div>
</template>

<script>
import ResumeForm from "../customUi/ResumeForm.vue";
import Preview from "../layout/Preview.vue";
import NButton from "../ui/NButton.vue";
import exportToPdf from '/src/use/pdf'

export default {
  name: "Edit",
  components: {NButton, Preview, ResumeForm},
  setup() {
    return {
      exportToPdf
    }
  }
}
</script>
