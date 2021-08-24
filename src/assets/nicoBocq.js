import {avatar} from "./avatar";

export const nicoBocq = {
  firstName: 'Nicolas',
  lastName: 'Bocquet',
  title: 'Développeur Front-End',
  summary: '25 ans d\'expériences sur le web et toujours la même passion : mettre en forme les données.',
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
      title: 'Développeur fullstack',
      company: 'Freelance',
      description: 'Création de sites web : graphisme, développement et intégration'
    }
  ],
  education: [
    {
      id: 1,
      beginDate: '1999',
      endDate: '2001',
      school: 'Université des Pays du Vaucluse',
      degree: 'MST Communication : conception multimédias',
      city: 'Avignon',
      description: null
    }
  ],
  skill: [
    { id: 1, label: 'Javascript (ES6)'},
    { id: 2, label: 'Vuejs (Vue3, Vuex)' },
    { id: 4, label: 'Tailwind, Headless UI, Vuetify, Quasar' },
    { id: 8, label: 'Datavisualisation : D3, OpenLayers' },
    { id: 3, label: 'Figma, Adobe XD' },
    { id: 5, label: 'Storybook, Bit' },
    { id: 6, label: 'Tests unitaires et fonctionnels' },
    { id: 7, label: 'Git' }
  ],
  hobbies: 'Histoire, sports (course à pied, football et basket)'
}
