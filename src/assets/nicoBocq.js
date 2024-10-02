import { avatar } from './avatar'

export const nicoBocq = {
  firstName: 'Nicolas',
  lastName: 'Bocquet',
  title: 'Front-End Engineer',
  summary: "My career has been dedicated to enhancing user experience by making information easily accessible and manageable.",
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
      title: 'Full-Stack Developer (React Native - NextJs - Typescript)',
      company: 'Inforca (web agency)',
      description: `- IOS / Android app: regularity rally application (B2C):
      Main features: road guidance, time calculation, participant management, rankings...
      React Native (CLI), Redux Toolkit, Tailwind, OpenLayers
      - Web app: Product Information Management (B2B - fashion)
      Main features: +100k references, role base access, complex filtering, bulk edition, file import, test unit and e2e
      NextJs 14 (app router), Prisma/PostgreSQL, Shadcn/Radix UI, Vitest / Playwright`
    },
    {
      id: 7,
      beginDate: '2022',
      endDate: '2022',
      title: 'Front-End Developer (React)',
      company: 'Alltricks (e-commerce)',
      description: 'Development of an Ecommerce site and its back office, API consumption, and implementation of the design system with React, Redux, and Typescript.'
    },
    {
      id: 6,
      beginDate: '2020 - 2021',
      endDate: '',
      title: 'Front-End Developer (Vue)',
      company: 'Oparedo (CRM editor - B2B)',
      description:
        "Development of a CRM app (contract management, invoicing...): \n" +
        '- development of components (UI and custom) and stores: Vuejs, Vuex, Tailwind, Storybook\n' +
        '- functional and ergonomic specifications\n' +
        '- unit tests'
    },
    {
      id: 5,
      beginDate: '2019',
      endDate: '2020',
      title: 'Front-End Developer (Vue)',
      company: 'Novazéo (web agency - B2C)',
      description:
        'Integration and development on Django CMS / Symfony (VueJs, OpenLayers).' +
        'UX/UI design (Figma).'
    },
    {
      id: 4,
      beginDate: '2016',
      endDate: '2018',
      title: 'Journalist',
      company: 'La Provence',
      description:
        'Writing, production of editorial modules (Data journalism, infographics).'
    },
    {
      id: 3,
      beginDate: '2011',
      endDate: '2015',
      title: 'Product Owner',
      company: 'La Provence',
      description:
        'In charge of digital projects: web, mobile, applications, social networks...'
    },
    {
      id: 2,
      beginDate: '2007',
      endDate: '2010',
      title: 'Web Developer',
      company: 'La Provence',
      description:
        'Development and integration, accompaniment of the writing team to digital.'
    },
    {
      id: 1,
      beginDate: '2001',
      endDate: '2007',
      title: 'Web Developer',
      company: 'Freelance',
      description:
        'Creation of websites: graphics, development, and integration'
    }
  ],
  education: [
    {
      id: 1,
      beginDate: '2019',
      endDate: '',
      school: 'Le Wagon',
      degree: 'Fullstack Developer',
      city: 'Marseille',
      description: 'Ruby, Ruby & Rails, React'
    },
    {
      id: 2,
      beginDate: '1999',
      endDate: '2001',
      school: 'Université des Pays du Vaucluse',
      degree: 'Master Communication : conception multimédias',
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
    { id: 3, label: 'React / React Native / NextJs' },
    { id: 11, label: 'ORM: Prisma / Drizzle'},
    { id: 12, label: 'PostgreSQL / MySQL'},
    { id: 2, label: 'Vue / Vuex' },
    { id: 4, label: 'Tailwind, Shadcn, Radix, Material UI, Headless UI' },
    { id: 5, label: 'Node, Express' },
    { id: 6, label: 'D3, OpenLayers, Mapbox' },
    { id: 7, label: 'Figma, Adobe XD, Storybook' },
    {
      id: 9,
      label: 'Unit tests and functional tests: React Testing Library, Vitest, Playwright, Behat, Gherkin, Cypress'
    },
    { id: 10, label: 'English'}
  ],
  hobby: 'Side projects, History, doing sport (running)'
}
