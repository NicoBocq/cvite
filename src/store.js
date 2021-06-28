
import { reactive, computed, toRefs } from 'vue'

const state = reactive({
  isSlideOpen: false,
  model: {
    education: {
      beginDate: null,
      endDate: null,
      school: null,
      degree: null,
      city: null,
      description: null
    },
    experiences: {
      year: null,
      title: null,
      company: null,
      description: null
    },
    links: {
      label: null,
      url: null
    }
  },
  resume: {
    firstName: 'Nicolas',
    lastName: 'Bocquet',
    title: 'Dev UI',
    summary: 'YoupiYoupla',
    email: '',
    phone: '',
    address: '',
    links: [{
      order: 1,
      label: 'gitHub',
      url: 'https://github.com/NicoBocq'
    }],
    experiences: [
      {
        order: 1,
        id: 1,
        year: '20-21',
        title: 'Dev',
        company: 'Oparedo',
        description: 'plein de trucs'
      },
      {
        id: 2,
        order: 2,
        year: '2012 - 2021',
        title: 'Truc',
        company: 'La Province',
        description: 'plein de trucs'
      }
    ],
    education: [
      {
        order: 1,
        beginDate: '1996',
        endDate: '1998',
        school: 'Université des Pays du Vaucluse',
        degree: 'MST Communication : conception multimédias',
        city: 'Avignon',
        description: null
      }
    ],
    skills: ['Javascript', 'Vuejs', 'ES6', 'Figma'],
  }
})

const isSlideOpen = computed(() => state.isSlideOpen)
const resume = computed(() => state.resume)

const sortedList = (type) => {
  return state.resume[type].sort((a, b) => a.order - b.order)
}

const toggleSlide = () => {
  state.isSlideOpen = !state.isSlideOpen
}

const addItem = (type) => {
  state.resume[type].push({ ...state.model[type], order: state.resume[type].length + 1 })
}

const removeItem = (id, type) => {
  state.resume[type + 's'].splice(id, 1)
}

export {
  isSlideOpen,
  toggleSlide,
  resume,
  sortedList,
  addItem,
  removeItem
}
