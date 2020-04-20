import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export let htmlToPdf = async (pageHeightPixels, pageOrientation, pdfRef, fileName) => {
    var input = pdfRef.current;
    const numPages = input.scrollHeight <= pageHeightPixels ? 1 : Math.floor(input.scrollHeight / pageHeightPixels) + 1;

    const canvas = await html2canvas(input, { windowHeight: input.scrollHeight });

    var pagesCanvases = [];

    for (var i = 0; i < numPages; i++) {
        var pageCanvas = cropPage(canvas, pageHeightPixels, pageHeightPixels * i);
        pagesCanvases.push(pageCanvas)
    }

    let pdf = new jsPDF({
        orientation: pageOrientation,
        compress: true
    });

    for (var i = 0; i < pagesCanvases.length; i++) {
        var pageCanvas = pagesCanvases[i];
        if (i > 0) {
            pdf.addPage();
        }

        const imgData = pageCanvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0);
    }

    return pdf.output('datauristring');
}

function cropPage(canvas, pageHeight, offset) {
    var context = canvas.getContext("2d");
    var pageData = context.getImageData(0, offset, canvas.width, pageHeight);

    var pageCanvas = document.createElement("canvas");
    var pageContext = pageCanvas.getContext("2d");

    pageCanvas.width = canvas.width;
    pageCanvas.height = pageHeight;
    pageContext.putImageData(pageData, 0, 0);

    return pageCanvas;
}
