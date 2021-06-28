import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs
import { resume } from '/src/store'
import {reactive, toRefs} from 'vue'

export function printToPdf () {
  const item = resume.value
  const experiences = item.experiences.reduce((r, i) => {
    r.push(
      { text: i.year + ' - ' + i.title + '\n', style: 'listHeader' },
      { text: i.company + '\n', style: 'listSubHeader'},
      { text: i.description + '\n', style: 'desc' })
    return r
  }, [])
  const skillList = item.skills.reduce((r, i) => {
    r.push(`${i}\n`)
    return r
  }, [])
  const skills = [{ text: 'Compétences\n', style: 'title'}, { ul: skillList, style: 'listItem' }]
  const header = [
    { text: `${item.firstName} ${item.lastName}\n`, style: 'name' },
    { text: item.summary, style: 'description' }
  ]
  const main = [
    { text: experiences, style: 'list' }
  ]
  const side = [
    { text: 'info', style: 'list'},
    { text: skills },
  ]
  const dd = {
    content: [
      {
        text: header,
        style: 'header'
      },
      {
        columns: [
          {
            width: '70%',
            text: main,
            style: 'list'
          },
          {
            width: '30%',
            text: side
          }
        ],
        columnGap: 20
      }
    ],
    styles: {
      subheader: {
        fontSize: 15,
        bold: true
      },
      list: {
        margin: [0, 0, 0, 10],
        border: true
      },
      listItem: {
        margin: [0, 0, 0, 5],
      },
      header: {
        margin: [0, 0, 0, 20],
      },
      listHeader: {
        fontSize: 12,
        bold: true,
        margin: [0, 0, 0, 5]
      },
      title: {
        fontSize: 14,
        bold: true
      },
      main: {

      },
      side: {
        background: '#e6e6e6'
      },
      name: {
        fontSize: 16,
        bold: true,
        margin: [0, 0, 0, 6]
      },
      listSubHeader: {
        fontSize: 10,
        color: '#e6e6e6',
        margin: [0, 0, 0, 5]
      },
      desc: {
        fontSize: 12,
      }
    }
  }
  pdfMake.createPdf(dd).open()
}
