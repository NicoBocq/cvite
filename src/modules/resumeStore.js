import { computed, reactive } from 'vue'
import { nicoBocq } from '../assets/nicoBocq'
import { i18n } from '../composables/i18n'

const { t } = i18n.global

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
          placeholder: t('resume.firstName'),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'lastName',
          type: 'text',
          placeholder: t('resume.lastName'),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'title',
          type: 'text',
          placeholder: t('resume.title'),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'summary',
          type: 'textarea',
          placeholder: t('resume.summary')
        },
        {
          component: 'input',
          key: 'email',
          type: 'text',
          placeholder: t('resume.email'),
          rules: ['required', 'email']
        },
        {
          component: 'input',
          key: 'phone',
          type: 'text',
          placeholder: t('resume.phone'),
          rules: ['required', 'phone']
        },
        {
          component: 'input',
          key: 'address',
          type: 'text',
          placeholder: t('resume.address')
        },
        {
          component: 'input',
          key: 'more',
          type: 'textarea',
          placeholder: t('resume.more')
        }
      ]
    },
    education: {
      title: t('resume.section.title.education'),
      new: {},
      data: [
        {
          component: 'input',
          key: 'degree',
          type: 'text',
          placeholder: t('resume.section.fields.degree'),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'beginDate',
          type: 'text',
          placeholder: t('resume.section.fields.beginDate'),
          short: true,
          rules: ['required']
        },
        {
          component: 'input',
          key: 'endDate',
          type: 'text',
          placeholder: t('resume.section.fields.endDate'),
          short: true
        },
        {
          component: 'input',
          key: 'school',
          type: 'text',
          placeholder: t('resume.section.fields.school'),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'city',
          type: 'text',
          placeholder: t('resume.section.fields.city')
        },
        {
          component: 'input',
          key: 'description',
          type: 'textarea',
          placeholder: t('resume.section.fields.description')
        }
      ]
    },
    experience: {
      title: t('resume.section.title.employmentHistory'),
      new: {},
      data: [
        {
          component: 'input',
          key: 'title',
          type: 'text',
          placeholder: t('resume.section.fields.jobTitle'),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'beginDate',
          type: 'text',
          placeholder: t('resume.section.fields.beginDate'),
          short: true,
          rules: ['required']
        },
        {
          component: 'input',
          key: 'endDate',
          type: 'text',
          placeholder: t('resume.section.fields.endDate'),
          short: true
        },
        {
          component: 'input',
          key: 'company',
          type: 'text',
          placeholder: t('resume.section.fields.employer'),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'description',
          type: 'textarea',
          placeholder: t('resume.section.fields.description')
        }
      ]
    },
    link: {
      title: t('resume.section.title.links'),
      new: {},
      data: [
        {
          component: 'input',
          key: 'label',
          type: 'text',
          placeholder: t('resume.section.fields.label'),
          rules: ['required']
        },
        {
          component: 'input',
          key: 'url',
          type: 'text',
          placeholder: t('resume.section.fields.link'),
          rules: ['required']
        }
      ]
    },
    skill: {
      title: t('resume.section.title.skills'),
      new: {},
      data: [
        {
          component: 'input',
          key: 'label',
          type: 'textarea',
          placeholder: t('resume.section.fields.skill'),
          rules: ['required']
        }
      ]
    },
    hobby: {
      title: t('resume.section.title.hobbies'),
      data: [
        {
          component: 'input',
          key: 'hobby',
          type: 'textarea',
          placeholder: t('resume.section.fields.hobbies')
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
