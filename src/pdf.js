import jsPDF from "jspdf";
import html2canvas from "html2canvas"

const printToPdf = () => {
  const template = document.getElementById('print')
  // html2canvas(template)
  //   .then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png')
  //     const pdf = new jsPDF('p', 'mm', 'a4', true)
  //     let width = pdf.internal.pageSize.getWidth()
  //     let height = pdf.internal.pageSize.getHeight()
  //     let imgFormat = 'PNG'
  //     pdf.addImage(imgData, imgFormat, 0, 0, width, height, '', '')
  //     pdf.save('test.pdf')
  //   })
  const doc = new jsPDF('portrait', 'px', 'a4')
  doc.html(template, {
    callback: function (doc) {
      doc.save('test.pdf')
      // doc.output('datauristring')
    }
  })
}

export {
  printToPdf
}
