import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./app.css"; // Adjust the import path if necessary

const PDFPrinter = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleSaveAsPDF = () => {
    html2canvas(document.getElementById("pdf-content")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("document.pdf");
    });
  };

  return (
    <div className="container">
      <h1 className="heading">PDF Printer</h1>
      <div id="pdf-content">
        {/* Your PDF content goes here */}
        <p>This is the content of your PDF.</p>
      </div>
      <button className="button" onClick={handlePrint}>
        Print PDF
      </button>
      <button className="button" onClick={handleSaveAsPDF}>
        Save as PDF
      </button>
    </div>
  );
};

export default PDFPrinter;
