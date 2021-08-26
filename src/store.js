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
  model: {
    education: {
      title: 'Éducation',
      new: {},
      data: [
        { key: 'degree', type: 'text', placeholder: 'Diplôme' },
        { key: 'beginDate', type: 'text', placeholder: 'Année de début', short: true },
        { key: 'endDate', type: 'text', placeholder: 'Année de fin', short: true },
        { key: 'school', type: 'text', placeholder: 'École' },
        { key: 'city', type: 'text', placeholder: ' Ville' },
        { key: 'description', type: 'textarea', placeholder: 'Description' },
      ]
    },
    experience: {
      title: 'Expériences',
      new: {},
      data: [
        { key: 'title', type: 'text', placeholder: 'Poste' },
        { key: 'beginDate', type: 'text', placeholder: 'Année de début', short: true },
        { key: 'endDate', type: 'text', placeholder: 'Année de fin', short: true },
        { key: 'company', type: 'text', placeholder: 'Société' },
        { key: 'description', type: 'textarea', placeholder: 'Description' },
      ]
    },
    link: {
      title: 'Liens',
      new: {},
      data: [
        { key: 'label', type: 'text', placeholder: 'Titre' },
        { key: 'url', type: 'text', placeholder: 'URL' }
      ]
    },
    skill: {
      title: 'Compétences',
      new: {},
      data: [
        { key: 'label', type: 'text', placeholder: 'Compétence' }
      ]
    },
    hobby: {
      title: 'Passions',
      new: {},
      data: [
        { key: 'label', type: 'textarea', placeholder: 'Passions' }
      ]
    }
  },
  resume: { ...initialResume }
})

const resume = computed(() => state.resume)
const model = computed(() => state.model)

const toggleSlide = () => {
  state.isSlideOpen = !state.isSlideOpen
}

const addItem = (type) => {
  state.resume[type].push({
    id: Date.now()
  })
  // scrollTo(type)
}

const saveItem = (type) => {
  state.resume[type].push({
    id: Date.now(),
    ...state.model[type].new
  })
  clearNew(type)
}

// const scrollTo = (type) => {
//   const ref = 'add-' + type
//   ref.scrollIntoView()
// }

const setNewResume = async () => {
  await clearState()
}

const isEmpty = (type) => {
  const { id, ...obj } = state.resume[type]
  return Object.values(obj).every((i) => !i)
}

const removeItem = (id, type) => {
  if (!id) return
  const index = state.resume[type].findIndex((i) => i.id === id)
  if (index !== -1) state.resume[type].splice(index, 1)
}

const clearNew = (type) => {
  for (const item of Object.getOwnPropertyNames(state.model[type].new)) {
    delete state.model[type].new[item]
  }
}

const clearState = (key, customPath = resume) => {
  if (!key) {
    Object.assign(state.resume, initialResume)
  } else {
    state[customPath][key] = null
  }
}

const addNicoBocq = () => {
  Object.assign(state.resume, nicoBocq)
}

export {
  toggleSlide,
  resume,
  addItem,
  removeItem,
  clearState,
  model,
  addNicoBocq,
  isEmpty,
  setNewResume,
  saveItem
}
