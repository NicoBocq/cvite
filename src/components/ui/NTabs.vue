<template>
  <div>
    <div class="sm:hidden">
      <label
        for="tabs"
        class="sr-only"
      >
        Select a tab
      </label>
      <select
        id="tabs"
        name="tabs"
        class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md"
        @change="onChange"
      >
        <option
          v-for="tab in tabs"
          :key="tab.label"
          :selected="tab.current"
          :value="tab.id"
        >
          {{ tab.label }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav
          class="-mb-px flex space-x-8"
          aria-label="Tabs"
        >
          <a
            v-for="tab in tabs"
            :key="tab.label"
            class="cursor-pointer"
            :class="[isActive(tab.id) ? 'border-brand-500 text-brand-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm']"
            :aria-current="isActive(tab.id) ? 'page' : undefined"
            @click="onClick(tab.id)"
          >
            {{ tab.label }}
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NTabs',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: Number,
      default: 0
    }
  },
  emits: ['click'],
  setup (props, { emit }) {
    const isActive = (id) => {
      return props.activeTab === id
    }

    const onClick = (id) => {
      emit('click', id)
    }

    const onChange = (event) => {
      emit('click', +event.target.value)
    }

    return {
      isActive,
      onClick,
      onChange
    }
  }
}
</script>
