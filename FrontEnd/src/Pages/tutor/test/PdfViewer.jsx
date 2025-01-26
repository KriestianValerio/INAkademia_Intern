import { Button } from "flowbite-react";
import React, { useState } from "react";
import { useMemo } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function PdfViewer({ pdfUrl, id }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  const navigation = useNavigate();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="flex flex-col gap-2 mt-5">
        <p className="text-center">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div className="flex justify-between">
          <Button
            type="button"
            color={"failure"}
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            <HiChevronLeft className="self-center" />
            Sebelumnya
          </Button>
          <Button
            type="button"
            color={"failure"}
            onClick={() => {
              if (pageNumber >= numPages) {
                Swal.fire({
                  title: "Apakah kamu yakin ingin?",
                  icon: "question",
                  showCancelButton: true,
                  confirmButtonText: "Iya",
                  cancelButtonText: "Batal",
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigation(`/qualification/soal/finish/${id}`);
                  }
                });
              } else {
                nextPage();
              }
            }}
          >
            {pageNumber >= numPages ? (
              "Selesai"
            ) : (
              <>
                Selanjutnya <HiChevronRight className="self-center" />
              </>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
