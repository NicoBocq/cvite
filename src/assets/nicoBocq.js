import { avatar } from './avatar'

export const nicoBocq = {
  firstName: 'Nicolas',
  lastName: 'Bocquet',
  title: 'Développeur Front-End',
  summary:
    "20 ans d'expérience dans le numérique. J'ai été développeur, chef de projet et même journaliste. Je suis ambitieux, curieux et m'engage à toujours suivre les meilleures pratiques.",
  email: 'nicolas.fow@gmail.com',
  phone: '06 21 02 31 65',
  address: '29 rue Wulfram Puget - 13008 Marseille',
  avatar: avatar,
  more: null,
  link: [
    {
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
      url: 'https://twitter.com/nicobocq'
    }
  ],
  experience: [
    {
      id: 8,
      beginDate: '2022',
      endDate: '',
      title: 'Développeur Front-End (React Native - Application)',
      company: 'Alltricks',
      description: 'J\'ai refactorisé l\'ensemble de l\'application Grantrofeo (React Native) :\n- en me basant sur Redux Toolkit et ses middlewares (AsyncThunk RTK Query), j\'ai entièrement reconstruit la gestion des magasins et des appels API,\n- optimisation, simplification et refactoring du code legacy : réécriture des composants de classe en composants fonctionnels, ajout de hooks personnalisés, structure du projet...\n- mise en place d\'une bibliothèque de composants.'
    },
    {
      id: 7,
      beginDate: '2022',
      endDate: '2022',
      title: 'Développeur Front-End (React - Ecommerce)',
      company: 'Alltricks',
      description: 'Développement d\'un site Ecommerce et de son backoffice, consommation d\'API et mise en place du design system avec React, Redux et Typescript).'
    },
    {
      id: 6,
      beginDate: '2020 - 2021',
      endDate: '',
      title: 'Développeur Front-End (Vue - B2B)',
      company: 'Internethic',
      description:
        "Développement d'une app BtoB (gestion de contrats, faturation...): \n" +
        '- développement de composants (UI et custom) et de stores : Vuejs, Vuex, Tailwind, Storybook\n' +
        '- spécifications fonctionnelles et ergonomiques\n' +
        '- test unitaires'
    },
    {
      id: 5,
      beginDate: '2019',
      endDate: '2020',
      title: 'Développeur Front-End (Vue - B2C)',
      company: 'Novazéo',
      description:
        'Intégration et développement sur Django CMS / Symfony (VueJs, OpenLayers).' +
        'Conception UX/UI (Figma).'
    },
    {
      id: 4,
      beginDate: '2016',
      endDate: '2018',
      title: 'Journaliste web',
      company: 'La Provence',
      description:
        'Rédaction, production de modules éditoriaux (Data journalisme, infographies).'
    },
    {
      id: 3,
      beginDate: '2011',
      endDate: '2015',
      title: 'Chef de Projet numérique',
      company: 'La Provence',
      description:
        'En charge de projets numériques : web, mobiles, applications, réseaux sociaux...'
    },
    {
      id: 2,
      beginDate: '2007',
      endDate: '2010',
      title: 'Webmaster',
      company: 'La Provence',
      description:
        'Développement et intégration, accompagnement de la rédaction au numérique.'
    },
    {
      id: 1,
      beginDate: '2001',
      endDate: '2007',
      title: 'Développeur fullstack',
      company: 'Freelance',
      description:
        'Création de sites web : graphisme, développement et intégration'
    }
  ],
  education: [
    {
      id: 1,
      beginDate: '2019',
      endDate: '',
      school: 'Le Wagon',
      degree: 'Développeur Fullstack',
      city: 'Marseille',
      description: 'Ruby, Ruby & Rails, React'
    },
    {
      id: 2,
      beginDate: '1999',
      endDate: '2001',
      school: 'Université des Pays du Vaucluse',
      degree: 'MST Communication : conception multimédias',
      city: 'Avignon',
      description: ''
    }
    // {
    //   id: 3,
    //   beginDate: '1999',
    //   endDate: '2001',
    //   school: 'Université des Pays du Vaucluse',
    //   degree: 'MST Communication : conception multimédias',
    //   city: 'Avignon',
    //   description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    // }
  ],
  skill: [
    { id: 1, label: 'Javascript / Typescript' },
    { id: 3, label: 'React / React Native / Redux Toolkit' },
    { id: 2, label: 'Vue / Vuex' },
    { id: 4, label: 'UI : Tailwind, Material UI, Headless UI, Vuetify, Quasar' },
    { id: 5, label: 'Node' },
    { id: 6, label: 'Datavisualisation : D3, OpenLayers' },
    { id: 7, label: 'Figma, Adobe XD' },
    { id: 8, label: 'Storybook, Bit' },
    {
      id: 9,
      label: 'Tests unitaires et fonctionnels : React Testing, Behat, Gherkin, Cypress'
    },
    { id: 10, label: 'Git' }
  ],
  hobby: 'Side projects, histoire, sports (course à pied, football)'
}
