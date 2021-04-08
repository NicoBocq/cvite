<template>
  <div class="h-screen w-screen overflow-hidden bg-white">
    <div class="flex justify-between py-2 px-4">
      <h1 class="text-4xl font-extralight"><span class="font-extrabold">CV</span>ite</h1>
      <div class="flex-1" />
      <div class="flex items-center space-x-2">
        <n-dropdown />
        <n-button @click="printToPdf">Télécharger</n-button>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
      <div class="flex flex-col space-y-3">
        <n-input id="firstName" v-model="meMyselfAndI.firstName" />
        <n-input id="lastName" v-model="meMyselfAndI.lastName" />
      </div>
    </div>
<!--    <n-icon icon="download" class="print:hidden" />-->
    <div class="ring ring-gray-200 ring-offset-2 shadow-lg ring-opacity-25 rounded-md container mx-auto max-w-4xl">
      <div class="bg-white text-gray-800 p-5 h-full flex flex-col space-y-10" ref="printRef">
        <div class="flex justify-between">
          <div class="flex flex-col">
            <div class="text-2xl text-red-500">{{ meMyselfAndI.firstName }} {{ meMyselfAndI.lastName }}</div>
            <div class="text-3xl font-bold">{{ meMyselfAndI.title }}</div>
            <div class="text-gray-600">{{ meMyselfAndI.description }}</div>
          </div>
          <div class="text-right text-sm text-gray-500 flex flex-col">
            <span>{{ meMyselfAndI.phone }}</span>
            <a href="{{ meMyselfAndI.gitHub }}" class="text-gray-500">GitHub</a>
          </div>
        </div>
      <div class="flex">
        <div class="w-2/3">
          <div>{{ items }}</div>
          <div class="divide divide-y divide-gray-200">
            <div v-for="(item, idx) in meMyselfAndI.experiences" :key="idx" class="py-2">
              <div class="flex flex-col">
                <div class="text-sm text-gray-800 font-semibold">{{ item.title }}</div>
                <div class="text-gray-500">{{ item.company }}</div>
                <div class="text-gray-500">{{ item.year }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 bg-gray-50 p-4 rounded-md">
          <div>Dev</div>

        </div>
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
import NButton from "./ui/NButton.vue";
export default {
  name: 'Main',
  components: {NButton, NIcon, NDropdown, NInput },
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
      gitHub: 'https://github.com/NicoBocq',
      url: '',
      phone: '06 21 02 31 65'
    })

    const items = computed(() => {
      return meMyselfAndI.value.experiences.length
    })

    // watchEffect(() => {
    //     console.log(printRef.value) // => <div></div>
    //   },
    //   {
    //     flush: 'post'
    //   })

    const printRef = ref(null)

    const printToPdf = () => {
      const doc = new jsPDF('portrait', 'pt', 'a4')
      const contentHtml = printRef.value
      doc.html(contentHtml, {
        callback: function (doc) {
          doc.save(`${meMyselfAndI.value.firstName}-${meMyselfAndI.value.lastName}.pdf`)
        }
      })
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
