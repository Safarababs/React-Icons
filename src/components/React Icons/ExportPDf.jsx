import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DetailedIconSheet from "./ReactIcons";
import { FaFilePdf } from "react-icons/fa";

const ExportToPDF = () => {
  const captureRef = useRef();

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(captureRef.current, {
      scale: 2,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    // Get the size of the canvas in pixels
    const imgWidthPx = canvas.width;
    const imgHeightPx = canvas.height;

    // Convert px to mm (1px = 0.264583 mm)
    const pxToMm = 0.264583;
    const pdfWidth = imgWidthPx * pxToMm;
    const pdfHeight = imgHeightPx * pxToMm;

    // Create a PDF with custom height
    const pdf = new jsPDF("p", "mm", [pdfWidth, pdfHeight]);
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save("react-icons-showcase.pdf");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <div ref={captureRef}>
        <DetailedIconSheet />
      </div>

      <button
        onClick={handleDownloadPDF}
        style={{
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "0.75rem 2rem",
          fontSize: "1.1rem",
          fontWeight: 700,
          letterSpacing: "1px",
          boxShadow: "0 2px 8px rgba(231,76,60,0.15)",
          cursor: "pointer",
          transition: "background 0.2s, transform 0.2s",
          marginBottom: "1.5rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.7rem",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background =
            "linear-gradient(90deg, #ffb347 0%, #e74c3c 100%)")
        }
        onMouseOut={(e) => (e.currentTarget.style.background = "#444")}
      >
        <FaFilePdf size={22} style={{ marginRight: 8 }} />
        Download PDF
      </button>
    </div>
  );
};

export default ExportToPDF;
