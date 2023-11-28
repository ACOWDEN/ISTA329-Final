function openPDF(pdfName) {
  var pdfPath = pdfName; 

  var pdfIframe = document.getElementById('pdfIframe');
  pdfIframe.src = pdfPath;
}
