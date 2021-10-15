<template>
  <header class="h-16 w-full py-2 px-4 sm:px-6 lg:px-8 bg-white shadow-sm flex justify-between sm:justify-between sm:items-center shadow z-10">
    <div class="flex space-x-1 items-center group cursor-pointer">
      <n-icon
        icon="lightning-bolt"
        class="text-brand-600 group-hover:text-gray-800"
      />
      <div class="text-brand-600 font-extrabold text-3xl group-hover:text-gray-800">
        CV<span class="text-gray-800 font-normal group-hover:text-brand-600">ite</span>
      </div>
    </div>
    <div class="space-x-2 flex items-center">
      <n-button
        icon="download"
        @click="useExportToPdf"
      >
        {{ t('ui.download') }}
      </n-button>
      <n-dropdown
        icon="cog"
      />
    </div>
  </header>
</template>

<script>
import NButton from '../ui/NButton.vue'
import useExportToPdf from '../../composables/pdfExport'
import { setNewResume, addNicoBocq } from '../../modules/resumeStore'
import { useI18n } from 'vue-i18n'
import NIcon from '../ui/NIcon.vue'
import NDropdown from '../ui/NDropdown.vue'

export default {
  name: 'Header',
  components: {
    NDropdown,
    NIcon,
    NButton
  },
  setup () {
    const { t } = useI18n()

    return {
      useExportToPdf,
      setNewResume,
      addNicoBocq,
      t
    }
  }
}
</script>
