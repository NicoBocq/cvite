import {computed, reactive, ref} from 'vue'
import { avatar } from '/src/assets/avatar'
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
        { key: 'label', type: 'text', placeholder: 'Compétence' }
      ]
    }
  },
  resume: {
    firstName: 'Nicolas',
    lastName: 'Bocquet',
    title: 'Front End Lead',
    summary: '25 ans d\'expériences sur le web et toujours le même dénominateur commun : mettre en forme les données.',
    email: 'nicolas.fow@gmail.com',
    phone: '06 21 02 31 65',
    address: '29 rue Wulfram Puget - 13008 Marseille',
    avatar: avatar,
    more: null,
    link: [{
      id: 1,
      label: 'gitHub',
      url: 'https://github.com/NicoBocq'
    },
    {
      id: 2,
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/bocquetnicolas/'
    },
    {
      id: 3,
      label: 'Twitter',
      url: 'https://twitter.com/_nicolasbocquet'
    }],
    experience: [
      {
        id: 1,
        year: '2021',
        title: 'Front End Lead',
        company: 'Oparédo',
        description: 'Développement d\'une librairie de composants (Vue, Tailwind, Storybook).\n' +
          'Tests unitaires et fonctionnels\n' +
          'Spécifications UX/UI'
      },
      {
        id: 2,
        year: '2020',
        title: 'Développeur Front-End, Marseille',
        company: 'Internethic',
        description: 'Développement d\'une app BtoB : conception UX/UI (Figma), développement de composants custom et de leurs store (Vuejs, Tailwind, Storybook).'
      },
      {
        id: 3,
        year: '2019',
        title: 'Développeur Front-End',
        company: 'Novazéo',
        description: 'Intégration et développement sur Django CMS / Symfony (VueJs, OpenLayers). Conception UX/UI (Figma).'
      },
      {
        id: 4,
        year: '2016 - 2018',
        title: 'Journaliste web',
        company: 'La Provence',
        description: 'Rédaction, production de modules éditoriaux (Data journalisme, infographies).'
      },
      {
        id: 5,
        year: '2011 - 2015',
        title: 'Chef de Projet numérique',
        company: 'La Provence',
        description: 'En charge de projets numériques : web, mobiles, applications, réseaux sociaux...'
      },
      {
        id: 6,
        year: '2007 - 2010',
        title: 'Webmaster',
        company: 'La Provence',
        description: 'Développement et intégration, accompagnement de la rédaction au numérique.'
      },
      {
        id: 7,
        year: '2005 - 2007',
        title: 'Frontend developer',
        company: '3SC Global Services',
        description: 'HTML, CSS, JS'
      },
      {
        id: 8,
        year: '2001 - 2004',
        title: 'Developper fullstack',
        company: 'Freelance',
        description: 'Création de sites web : graphisme, développement et intégration'
      }
    ],
    education: [
      {
        id: 1,
        beginDate: '1996',
        endDate: '1998',
        school: 'Université des Pays du Vaucluse',
        degree: 'MST Communication : conception multimédias',
        city: 'Avignon',
        description: null
      }
    ],
    skill: [
      { id: 1, label: 'Javascript (ES6)'},
      { id: 2, label: 'Vuejs (Vue3, Vuex)' },
      { id: 3, label: 'Figma, Adobe XD' },
      { id: 4, label: 'Tailwind, Headless UI, Vuetify, Quasar' },
      { id: 5, label: 'Storybook, Bit' },
      { id: 6, label: 'Tests unitaires et fonctionnels' },
      { id: 7, label: 'Git' }
    ],
    hobbies: 'Histoire, sports (course à pied, football et basket)'
  }
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
  state.resume[type].splice(id, 1)
}

const clearState = (key) => {
  state.resume[key] = null
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
  model
}
