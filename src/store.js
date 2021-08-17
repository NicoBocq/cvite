import {computed, reactive, ref} from 'vue'
import { nicoBocq } from "./assets/nicoBocq"

const initialResume = {
    firstName: null,
    lastName: null,
    title: null,
    summary: null,
    email: null,
    phone: null,
    address: null,
    avatar: null,
    more: null,
    link: [],
    experience: [],
    education: [],
    skill: [],
    hobbies: null
}

const state = reactive({
  isSlideOpen: false,
  model: {
    education: {
      title: 'Éducation',
      data: [
        { key: 'beginDate', type: 'text', placeholder: 'Année de début' },
        { key: 'endDate', type: 'text', placeholder: 'Année de fin' },
        { key: 'school', type: 'text', placeholder: 'École' },
        { key: 'degree', type: 'text', placeholder: 'Diplôme' },
        { key: 'city', type: 'text', placeholder: ' Ville' },
        { key: 'description', type: 'textarea', placeholder: 'Description' },
      ]
    },
    experience: {
      title: 'Expériences',
      data: [
        { key: 'year', type: 'text', placeholder: 'Année(s)' },
        { key: 'title', type: 'text', placeholder: 'Poste' },
        { key: 'company', type: 'text', placeholder: 'Société' },
        { key: 'description', type: 'textarea', placeholder: 'Description' },
      ]
    },
    link: {
      title: 'Liens',
      data: [
        { key: 'label', type: 'text', placeholder: 'Titre' },
        { key: 'url', type: 'text', placeholder: 'URL' }
      ]
    },
    skill: {
      title: 'Compétences',
      data: [
        { key: 'label', type: 'text', placeholder: 'Compétence' }
      ]
    },
    hobby: {
      title: 'Passions',
      data: [
        { key: 'label', type: 'textarea', placeholder: 'Passions' }
      ]
    }
  },
  resume: initialResume
})

const isSlideOpen = computed(() => state.isSlideOpen)
const resume = computed(() => state.resume)
const model = computed(() => state.model)

const toggleSlide = () => {
  state.isSlideOpen = !state.isSlideOpen
}

const addItem = (type) => {
  state.resume[type].push({
    ...state.model[type].data,
    id: Math.max(...state.resume[type].map((i) => i.id)) + 1
  })
}

const removeItem = (id, type) => {
  if (!id) return
  const index = state.resume[type].findIndex((i) => i.id === id)
  if (index !== -1) state.resume[type].splice(index, 1)
}

const clearState = (key) => {
  if (!key) {
    state.resume = initialResume
    // Object.assign(state.resume, initialResume)
  } else {
    state.resume[key] = null
  }
}

const addNicoBocq = () => {
  Object.assign(state.resume, nicoBocq)
}

const handleImage = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.addEventListener("load",  () => {
    state.resume.avatar = reader.result
  }, false)
  reader.readAsDataURL(file)
}

export {
  isSlideOpen,
  toggleSlide,
  resume,
  addItem,
  removeItem,
  clearState,
  handleImage,
  model,
  addNicoBocq
}
