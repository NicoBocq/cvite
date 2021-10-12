import { computed, reactive } from 'vue'

const uiStore = reactive({
  activeTab: 1,
  lang: 'en-US',
  tabs: [
    { id: 1, label: 'Contenu' },
    { id: 2, label: 'Design' }
  ],
  options: {
    colorList: ['']
  },
  theme: {
    color: null
  }
})

const activeTab = computed(() => uiStore.activeTab)
const tabs = computed(() => uiStore.tabs)
const lang = computed(() => uiStore.lang)

const setTab = (id) => {
  uiStore.activeTab = id
}

export { activeTab, tabs, setTab, lang }
