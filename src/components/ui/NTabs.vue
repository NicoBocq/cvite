<template>
  <tab-group>
    <tab-list>
      <tab v-slot="{ selected }" as="template">
        <button
          :class="[selected ? 'bg-blue-500 text-white' : 'bg-white text-black']"
        >
          Tab 1
        </button>
      </tab>
      <tab>Tab 2</tab>
      <tab>Tab 3</tab>
    </tab-list>
    <tab-panels>
      <tab-panel>Content 1</tab-panel>
      <tab-panel>Content 2</tab-panel>
      <tab-panel>Content 3</tab-panel>
    </tab-panels>
  </tab-group>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
  name: 'NTabs',
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel
  }
}
</script>
