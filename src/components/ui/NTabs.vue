<template>
  <TabGroup>
    <TabList>
      <Tab v-slot="{ selected }" as="template">
        <button
          :class="[selected ? 'bg-blue-500 text-white' : 'bg-white text-black']"
        >
          Tab 1
        </button>
      </Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
  name: "NTabs",
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
}
</script>
