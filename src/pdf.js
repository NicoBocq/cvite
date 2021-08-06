import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from '/src/assets/customVfs.js'
import { resume, model } from '/src/store'

const themeColor = '#1F2937'

export function printToPdf () {
  pdfMake.vfs = pdfFonts

  pdfMake.fonts = {
    Inter : {
      normal: 'Inter-Regular.ttf',
      // medium: 'Inter-Medium.ttf',
      // semiBold: 'Inter-SemiBold.ttf',
      bold: 'Inter-Bold.ttf',
      // extraBold: 'Inter-ExtraBold.ttf'
    }
  }

  const stateResume = resume.value
  const stateModel = model.value
  const experienceList = stateResume.experience.reduce((r, i) => {
    r.push(
      {
        stack: [
          {text: i.title, style: 'listItemHeader'},
          {text: i.year.toUpperCase() + ' / ' + i.company.toUpperCase(), style: 'listItemSubHeader'},
          {text: i.description, style: 'listItemDesc' }
        ], style: 'listItem'
      })
    return r
  }, [])
  const educationList = stateResume.education.reduce((r, i) => {
    r.push(
      { stack: [
          { text: i.degree, style: 'listItemHeader' },
          { text: i.beginDate + ' - ' + i.endDate + ' / ' + i.school + ' - ' + i.city, style: 'listItemSubHeader'},
          { text: i.school + ' - ' + i.city, style: 'listItemSubHeader'},
          { text: i.description, style: 'listItemDesc' }
        ], style: 'listItem'
      })
    return r
  }, [])
  const skillList = stateResume.skill.reduce((r, i) => {
    r.push({ text: i.label, style: 'listItem' })
    return r
  }, [])
  const linkList = stateResume.link.reduce((r, i) => {
    r.push({ text: i.label, link: i.url, style: 'headerListLinks' })
    return r
  }, [])
  const infosList = [
    ...(stateResume.email ? [{ text: stateResume.email, style: 'headerListItem' }] : []),
    ...(stateResume.phone ? [{ text: stateResume.phone, style: 'headerListItem' }] : []),
    ...(stateResume.address ? [{ text: stateResume.address, style: 'headerListItem' }] : []),
    ...(stateResume.more ? [{ text: stateResume.more, style: 'headerListItem' }] : [])
  ]

  const header = [
    { columns:
      [
        ...( stateResume.avatar ? [{
        width: 75,
        image: stateResume.avatar,
        fit: [75, 75]
      }] : []),
      {
        width: '*',
        stack: [
          { text: `${stateResume.firstName} ${stateResume.lastName}`, style: 'name' },
          { text: stateResume.title, style: 'title' },
          { text: stateResume.summary, style: 'summary' }
        ]
      }],
      columnGap: 16
      }
    ]

  const arrSection = ['link', 'skill', 'education', 'experience', 'hobby']

  const linksSection = [
    { text: stateModel.link.title, style: 'sectionTitle'},
    { stack: linkList, style: 'list'}
  ]
  const infosSection = [
    { stack: infosList, style: 'headerLinks'}
  ]
  const skillsSection = [
    { text: stateModel.skill.title, style: 'sectionTitle'},
    { stack: skillList, style: 'list' }
  ]
  const educationSection = [
    { text: stateModel.education.title, style: 'sectionTitle'},
    { stack: educationList, style: 'list' }
  ]
  const experienceSection = [
    { text: stateModel.experience.title, style: 'sectionTitle'},
    { stack: experienceList, style: 'list' },
  ]
  const hobbiesSection = [
    { text: stateModel.hobby.title, style: 'sectionTitle'},
    { text: stateResume.hobbies, style: 'list' },
  ]
  const headerSide = [
    infosSection
  ]
  const main = [
    experienceSection,
    educationSection
  ]
  const side = [
    linksSection,
    skillsSection,
    !!stateResume.hobbies ? hobbiesSection : null
  ]
  const dd = {
    defaultStyle: {
      font: 'Inter'
    },
    background: function () {
      return {
        canvas: [
          {
            type: 'rect',
            x: 395, y: 0, w: 200.28, h: 841.89,
            color: themeColor
          }
        ]
      };
    },
    content: [
      {
        columns: [
          {
            width: '70%',
            stack: header,
            style: 'headerMain'
          },
          {
            width: '30%',
            stack: headerSide,
            style: 'headerSide'
          }
        ],
        columnGap: 56
      },
      {
        columns: [
          {
            width: '70%',
            stack: main
          },
          {
            width: '30%',
            stack: side,
            style: 'side'
          }
        ],
        columnGap: 56
      }
    ],
    styles: {
      subheader: {
        fontSize: 15,
        bold: true
      },
      list: {
        margin: [0, 0, 0, 16],
      },
      headerMain: {
        margin: [0, 0, 0, 24],
        color: '#1F2937'
      },
      headerSide: {
        fontSize: 10,
        color: 'white',
        margin: [0, 0, 0, 24]
      },
      section: {
        margin: [0, 0, 0, 24]
      },
      sectionTitle: {
        fontSize: 16,
        lineHeight: 1.1,
        bold: true,
        margin: [0, 0, 0, 16]
      },
      main: {
        color: '#1F2937'
      },
      side: {
        color: 'white'
      },
      name: {
        fontSize: 14,
        margin: [0, 0, 0, 4],
        color: themeColor
      },
      title: {
        fontSize: 20,
        margin: [0, 0, 0, 4],
        bold: true
      },
      summary: {
        fontSize: 10,
        lineHeight: 1.1
      },
      headerLinks: {
        margin: [0, 0, 0, 6]
      },
      listItem: {
        fontSize: 11,
        margin: [0, 0, 0, 8]
      },
      listItemHeader: {
        fontSize: 11,
        // lineHeight: 1,
        bold: true,
        margin: [0, 0, 0, 3]
      },
      listItemSubHeader: {
        fontSize: 9,
        color: themeColor,
        margin: [0, 0, 0, 3]
      },
      listItemDesc: {
        lineHeight: 1.1,
        fontSize: 9,
      },
      headerListLinks: {
        decoration: 'underline',
        margin: [0, 0, 0, 3],
        lineHeight: 1.2,
      },
      headerListItem: {
        lineHeight: 1.2,
        margin: [0, 0, 0, 3],
      }
    }
  }
  // pdfMake.createPdf(dd, null, fonts).open()
  pdfMake.createPdf(dd).open()
}
