<template>
  <div class="h-screen w-screen overflow-hidden bg-white">
    <div class="flex justify-between py-2 px-4">
      <h1 class="text-4xl font-extralight"><span class="font-extrabold">CV</span>ite</h1>
      <div class="flex-1" />
      <div class="flex items-center space-x-2">
        <n-dropdown />
        <n-button @click="printToPdf">Télécharger</n-button>
        <n-button @click="toggleSlide">Ouvrir</n-button>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
      <div class="flex flex-col space-y-3">
        <n-input id="firstName" v-model="meMyselfAndI.firstName" />
        <n-input id="lastName" v-model="meMyselfAndI.lastName" />
      </div>
    </div>
    <slide />
<!--    <n-icon icon="download" class="print:hidden" />-->
    <Summary :data="meMyselfAndI" />
  </div>
</template>
<script>
import { jsPDF } from "jspdf";
import { ref, computed, reactive, toRefs, watchEffect  } from 'vue'
import NInput from "./ui/NInput.vue"
import NDropdown from "./ui/NDropdown.vue"
import NIcon from "./ui/NIcon.vue";
import NButton from "./ui/NButton.vue";
import Slide from "./layout/Slide.vue";
import Summary from "./layout/Summary.vue";
import { toggleSlide } from '/src/store'

export default {
  name: 'Main',
  components: {Summary, Slide, NButton, NIcon, NDropdown, NInput },
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
      const doc = new jsPDF('portrait', 'px', 'a4')
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
      printRef,
      toggleSlide
    }
  }
}
</script>
