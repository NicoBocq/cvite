<template>
  <div
    class="relative h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden"
  >
    <n-header />
    <div
      class="flex-grow w-full max-w-7xl mx-auto xl:px-8 flex overflow-hidden"
    >
      <div
        class="w-1/2 hidden md:flex md:flex-col md:items-center md:justify-center overflow-scroll"
      >
        <preview />
      </div>
      <div class="w-full lg:w-1/2 flex flex-col flex-1">
        <!--        <div-->
        <!--          class="w-full flex items-center justify-between border-b border-gray-200 px-4 md:px-6 py-4"-->
        <!--        >-->
        <!--          &lt;!&ndash;          <div class="flex space-x-4">&ndash;&gt;-->
        <!--          &lt;!&ndash; Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" &ndash;&gt;-->
        <!--          &lt;!&ndash;            <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Contenu</a>&ndash;&gt;-->
        <!--          &lt;!&ndash;            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Design</a>&ndash;&gt;-->
        <!--          &lt;!&ndash;          </div>&ndash;&gt;-->
        <!--          &lt;!&ndash;          <n-menu />&ndash;&gt;-->
        <!--        </div>-->
        <div class="relative h-full overflow-y-auto">
          <resume-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, defineAsyncComponent } from 'vue'
import NLoading from '../ui/NLoading.vue'

const NHeader = defineAsyncComponent({
  loader: () => import('../layout/Header.vue'),
  loadingComponent: NLoading
})
const ResumeForm = defineAsyncComponent({
  loader: () => import('../customUi/ResumeForm.vue'),
  loadingComponent: NLoading
})
const Preview = defineAsyncComponent({
  loader: () => import('../layout/Preview.vue'),
  loadingComponent: NLoading
})
export default {
  name: 'Edit',
  components: {
    NHeader,
    Preview,
    ResumeForm
  },
  setup () {
    const setViewHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    onMounted(async () => {
      setViewHeight()
      window.addEventListener('resize', () => {
        setViewHeight()
      })
    })
  }
}
</script>
