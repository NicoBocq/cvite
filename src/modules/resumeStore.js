import { computed, reactive } from 'vue'
import { nicoBocq } from '../assets/nicoBocq'

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
  hobby: null
}

const state = reactive({
  model: {
    main: {
      title: null,
      data: [
        {
          component: 'input',
          key: 'firstName',
          type: 'text',
          placeholder: 'Prénom',
          rules: ['required']
        },
        {
          component: 'input',
          key: 'lastName',
          type: 'text',
          placeholder: 'Nom',
          rules: ['required']
        },
        {
          component: 'input',
          key: 'title',
          type: 'text',
          placeholder: 'Un titre',
          rules: ['required']
        },
        {
          component: 'input',
          key: 'summary',
          type: 'textarea',
          placeholder: 'En bref...'
        },
        {
          component: 'input',
          key: 'email',
          type: 'text',
          placeholder: 'Email',
          rules: ['required', 'email']
        },
        {
          component: 'input',
          key: 'phone',
          type: 'text',
          placeholder: 'Téléphone',
          rules: ['required', 'phone']
        },
        {
          component: 'input',
          key: 'address',
          type: 'text',
          placeholder: 'Adresse'
        },
        {
          component: 'input',
          key: 'more',
          type: 'textarea',
          placeholder: 'Infos complémentaires'
        }
      ]
    },
    education: {
      title: 'Éducation',
      new: {},
      data: [
        {
          component: 'input',
          key: 'degree',
          type: 'text',
          placeholder: 'Diplôme',
          rules: ['required']
        },
        {
          component: 'input',
          key: 'beginDate',
          type: 'text',
          placeholder: 'Année de début',
          short: true,
          rules: ['required']
        },
        {
          component: 'input',
          key: 'endDate',
          type: 'text',
          placeholder: 'Année de fin',
          short: true
        },
        {
          component: 'input',
          key: 'school',
          type: 'text',
          placeholder: 'École',
          rules: ['required']
        },
        {
          component: 'input',
          key: 'city',
          type: 'text',
          placeholder: ' Ville'
        },
        {
          component: 'input',
          key: 'description',
          type: 'textarea',
          placeholder: 'Description'
        }
      ]
    },
    experience: {
      title: 'Expériences',
      new: {},
      data: [
        {
          component: 'input',
          key: 'title',
          type: 'text',
          placeholder: 'Poste',
          rules: ['required']
        },
        {
          component: 'input',
          key: 'beginDate',
          type: 'text',
          placeholder: 'Année de début',
          short: true,
          rules: ['required']
        },
        {
          component: 'input',
          key: 'endDate',
          type: 'text',
          placeholder: 'Année de fin',
          short: true
        },
        {
          component: 'input',
          key: 'company',
          type: 'text',
          placeholder: 'Société',
          rules: ['required']
        },
        {
          component: 'input',
          key: 'description',
          type: 'textarea',
          placeholder: 'Description'
        }
      ]
    },
    link: {
      title: 'Liens',
      new: {},
      data: [
        {
          component: 'input',
          key: 'label',
          type: 'text',
          placeholder: 'Titre',
          rules: ['required']
        },
        {
          component: 'input',
          key: 'url',
          type: 'text',
          placeholder: 'URL',
          rules: ['required']
        }
      ]
    },
    skill: {
      title: 'Compétences',
      new: {},
      data: [
        {
          component: 'input',
          key: 'label',
          type: 'textarea',
          placeholder: 'Compétence',
          rules: ['required']
        }
      ]
    },
    hobby: {
      title: 'Passions',
      new: {},
      data: [
        {
          component: 'input',
          key: 'hobby',
          type: 'textarea',
          placeholder: 'Passions'
        }
      ]
    }
  },
  resume: { ...initialResume }
})

const resume = computed(() => state.resume)
const model = computed(() => state.model)

const addItem = (type) => {
  state.resume[type].push({
    id: Date.now()
  })
}

const saveItem = (type) => {
  state.resume[type].push({
    id: Date.now(),
    ...state.model[type].new
  })
  clearNew(type)
}

const setNewResume = async () => {
  await clearState()
}

const isEmpty = (type) => {
  const { id, ...obj } = state.resume[type]
  return Object.values(obj).every((i) => !i)
}

const isValid = (type) => {
  const requiredArr = state.model[type].data.reduce((acc, i) => {
    if (i.rules?.includes('required')) acc.push(i.key)
    return acc
  }, [])
  return !requiredArr.every((i) => state.model[type].new[i])
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
  resume,
  model,
  addItem,
  removeItem,
  clearState,
  addNicoBocq,
  isEmpty,
  setNewResume,
  saveItem,
  isValid
}
