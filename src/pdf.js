import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from '/src/assets/customVfs.js'
import { resume } from '/src/store'

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

  const item = resume.value
  const experienceList = item.experiences.reduce((r, i) => {
    r.push(
      {
        stack: [
          {text: i.title, style: 'listItemHeader'},
          {text: i.year.toUpperCase() + ' / ' + i.company.toUpperCase(), style: 'listItemSubHeader'},
          {text: i.description, style: 'listItemDesc' }
        ], style: 'listItem'
      })
    return r.sort((a, b) => a.order - b.order)
  }, [])
  const educationList = item.education.reduce((r, i) => {
    r.push(
      { stack: [
          { text: i.degree, style: 'listItemHeader' },
          { text: i.beginDate + ' - ' + i.endDate + ' / ' + i.school + ' - ' + i.city, style: 'listItemSubHeader'},
          { text: i.school + ' - ' + i.city, style: 'listItemSubHeader'},
          { text: i.description, style: 'listItemDesc' }
        ], style: 'listItem'
      })
    return r.sort((a, b) => a.order - b.order)
  }, [])
  const skillList = item.skills.reduce((r, i) => {
    r.push({ text: i, style: 'listItem' })
    return r
  }, [])
  const linkList = item.links.reduce((r, i) => {
    r.push({ text: i.label, link: i.url, style: 'headerListLinks' })
    return r
  }, [])
  const infosList = [
    ...(item.email ? [{ text: item.email, style: 'headerListItem' }] : []),
    ...(item.phone ? [{ text: item.phone, style: 'headerListItem' }] : []),
    ...(item.address? [{ text: item.address, style: 'headerListItem' }] : []),
  ]

  const header = [
    { columns:
      [
        ...( item.avatar ? [{
        width: 75,
        image: item.avatar,
        fit: [75, 75]
      }] : []),
      {
        width: '*',
        stack: [
          { text: `${item.firstName} ${item.lastName}`, style: 'name' },
          { text: item.title, style: 'title' },
          { text: item.summary, style: 'summary' }
        ]
      }],
      columnGap: 16
      }
    ]
  const linksSection = [
    { text: 'Liens', style: 'sectionTitle'},
    { stack: linkList, style: 'list'}
  ]
  const infosSection = [
    { stack: infosList, style: 'headerLinks'}
  ]
  const skillsSection = [
    { text: 'Compétences', style: 'sectionTitle'},
    { stack: skillList, style: 'list' }
  ]
  const educationSection = [
    { text: 'Education', style: 'sectionTitle'},
    { stack: educationList, style: 'list' }
  ]
  const experienceSection = [
    { text: 'Expériences', style: 'sectionTitle'},
    { stack: experienceList, style: 'list' },
  ]
  const hobbiesSection = [
    { text: 'Activités', style: 'sectionTitle'},
    { stack: item.hobbies, style: 'list' },
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
    !!item.hobbies ? hobbiesSection : null
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
