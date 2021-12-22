<template>
  <div
    class="relative h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden"
  >
    <n-header />
    <div
      class="flex-grow w-full max-w-7xl mx-auto xl:px-8 flex overflow-hidden"
    >
      <div
        class="w-1/2 hidden md:flex md:flex-col md:items-center md:justify-center overflow-scroll pt-4"
      >
        <resume-preview
          :resume="resume"
          :model="model"
          :theme="theme"
        />
      </div>
      <div class="w-full lg:w-1/2 flex flex-col flex-1">
        <n-tabs
          :active-tab="activeTab"
          :tabs="tabs"
          @click="setTab"
        />
        <transition-group
          name="fade"
          tag="div"
          class="relative h-full overflow-y-auto"
        >
          <resume-form
            v-if="activeTab === 1"
            key="form"
          />
          <design-form
            v-if="activeTab === 2"
            key="design"
          />
        </transition-group>
      </div>
    </div>
  </div>
  <n-loading
    v-if="isLoading.pdf"
    :title="t('ui.pdfGeneration')"
  />
</template>

<script>
import { onMounted, defineAsyncComponent } from 'vue'
import { tabs, activeTab, setTab } from '../../modules/uiStore'
import { resume, model, theme, isLoading } from '../../modules/resumeStore'

import NLoading from '../ui/NLoading.vue'
import { useI18n } from 'vue-i18n'

const DesignForm = defineAsyncComponent({
  loader: () => import('../layout/DesignForm.vue'),
  loadingComponent: NLoading
})
const NTabs = defineAsyncComponent({
  loader: () => import('../ui/NTabs.vue'),
  loadingComponent: NLoading
})

const NHeader = defineAsyncComponent({
  loader: () => import('../layout/Header.vue'),
  loadingComponent: NLoading
})
const ResumeForm = defineAsyncComponent({
  loader: () => import('../layout/ResumeForm.vue'),
  loadingComponent: NLoading
})
const ResumePreview = defineAsyncComponent({
  loader: () => import('../layout/ResumePreview.vue'),
  loadingComponent: NLoading
})
export default {
  name: 'Edit',
  components: {
    NLoading,
    DesignForm,
    NTabs,
    NHeader,
    ResumePreview,
    ResumeForm
  },
  setup () {
    const setViewHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    const { t } = useI18n()

    onMounted(async () => {
      setViewHeight()
      window.addEventListener('resize', () => {
        setViewHeight()
      })
    })
    return {
      tabs,
      activeTab,
      setTab,
      resume,
      model,
      theme,
      isLoading,
      t
    }
  }
}
</script>
