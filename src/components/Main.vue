<template>
  <div class="h-screen overflow-hidden bg-white">
    <div class="flex justify-between">
      <h1 class="text-3xl font-bold">CVite</h1>
      <n-dropdown />
      <button
        class="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="printToPdf"
      >
        print
      </button>
    </div>
    <div>
      <n-input id="firstName" v-model="meMyselfAndI.firstName" />
      <n-input id="lastName" v-model="meMyselfAndI.lastName" />
    </div>
    <div class="container mx-auto bg-gray-200 print:text-red-500 print:bg-red-300 p-5" ref="printRef">
      <n-icon icon="download" />
      <div>{{ meMyselfAndI.firstName }} {{ meMyselfAndI.lastName }}</div>
      <div>{{ meMyselfAndI.title }}</div>
      <div>{{ meMyselfAndI.description }}</div>
      <div>{{ items }}</div>
      <div v-for="(item, idx) in meMyselfAndI.experiences" :key="idx">
        <div class="flex">
        <div class="text-sm text-gray-800">{{ item.title }}</div>
        <div class="text-gray-500">{{ item.company }}</div>
        <div class="text-gray-500">{{ item.year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { jsPDF } from "jspdf";
import { ref, computed, reactive, toRefs, watchEffect  } from 'vue'
import NInput from "./ui/NInput.vue"
import NDropdown from "./ui/NDropdown.vue"
import NIcon from "./ui/NIcon.vue";
export default {
  name: 'Main',
  components: { NIcon, NDropdown, NInput },
  setup(props, context) {
    const meMyselfAndI = ref({
      firstName: 'Nicolas',
      lastName: 'Bocquet',
      title: 'Dev UI',
      description: 'YoupiYoupla',
      experiences: [
        {
          year: '20-21',
          title: 'Dev',
          company: 'Oparedo'
        },
        {
          year: '2012 - 2021',
          title: 'Truc',
          company: 'La Province'
        }
      ],
      gitHub: 'https://github.com/NicoBocq'
    })

    const items = computed(() => {
      return meMyselfAndI.value.experiences.length
    })

    watchEffect(() => {
        console.log(printRef.value) // => <div></div>
      },
      {
        flush: 'post'
      })

    const printRef = ref(null)

    const printToPdf = () => {
      const doc = new jsPDF('portrait', 'pt', 'a4')
      const contentHtml = printRef.value
      console.log(printRef.value)
      doc.html(contentHtml)
      doc.save(`${meMyselfAndI.value.firstName}-${meMyselfAndI.value.lastName}.pdf`)
    }

    return {
      meMyselfAndI,
      items,
      printToPdf,
      printRef
    }
  }
}
</script>
