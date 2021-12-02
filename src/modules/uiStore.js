import { computed, reactive } from 'vue'
import { i18n } from '../composables/i18n'
const { t } = i18n.global

const uiStore = reactive({
  activeTab: 1,
  tabs: [
    { id: 1, label: computed(() => t('ui.content')) },
    { id: 2, label: computed(() => t('ui.design')) }
  ]
})

const activeTab = computed(() => uiStore.activeTab)
const tabs = computed(() => uiStore.tabs)

const setTab = (id) => {
  uiStore.activeTab = id
}

export { activeTab, tabs, setTab }
