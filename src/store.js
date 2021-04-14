
import { createApp, reactive, computed, ref, h, resolveComponent} from 'vue'
import {jsPDF} from "jspdf";

const state = reactive({
  isSlideOpen: false,
  identity: {
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
  }
})

const isSlideOpen = computed(() => state.isSlideOpen)
const identity = computed(() => state.identity)

const toggleSlide = () => {
  state.isSlideOpen = !state.isSlideOpen
}

export {
  isSlideOpen,
  toggleSlide,
  identity
}
