function openPDF(pdfName) {
  var pdfPath = pdfName; // Assuming PDFs are in the same folder as the HTML

  var pdfIframe = document.getElementById('pdfIframe');
  pdfIframe.src = pdfPath;
}
