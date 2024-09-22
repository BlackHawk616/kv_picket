import Link from "next/link";
import React from "react";
import InteractiveChapterLink from "@/components/InteractiveChapterLink"; // Adjust the path if necessary

const chapters = [
  { name: "Ch2: Python Revision Tour - 2", pdfLink: "/PDFS/2.pdf" },
  { name: "Ch-3: Functions", pdfLink: "/PDFS/3.pdf" },
  { name: "Ch-4: Data File Handling", pdfLink: "/PDFS/4.pdf" },
  { name: "Ch-4.1: Binary File Handling  ", pdfLink: "/PDFS/4.1.pdf" },
  { name: "Ch-4.2: CSV File Handling", pdfLink: "/PDFS/4.2.pdf" },
  { name: "Ch-5 : Data Structures",  pdfLink: "/PDFS/5.pdf"},
  { name: "Ch-6 : Computer Networking",  pdfLink: "/PDFS/6.pdf"},
  { name: "Ch-7 : Computer Networking 2",  pdfLink: "/PDFS/7.pdf"}, 
  { name: "Ch-8 : RDBMS",  pdfLink: "/PDFS/8.pdf"},
  { name: "Ch-9 : Structured Query Language (SQL)",  pdfLink: "/PDFS/9.pdf"},
  { name: "Ch-10 : DDL And Constraints",  pdfLink: "/PDFS/10.pdf"},
  { name: "Ch-11 : Joining SQL",  pdfLink : "/PDFS/11.pdf"},
  { name: "Ch-12 : Interface Python With SQL",  pdfLink : "/PDFS/12.pdf"},
];

export default function ComputerScienceNotes() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="text-xl font-bold">School Hub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Announcements
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Notes
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Sample Papers
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Exam Papers
            </Link>
          </nav>
          <Link href="/contact-us/">
            <button
              style={{
                backgroundColor: "#4a90e2",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </header>
      <footer className="bg-primary text-primary-foreground py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 White Hawk Studios</p>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/Temrs" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/contact-us" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>         

      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Class 12th - Computer Science Notes</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {chapters.map((chapter) => (
            <InteractiveChapterLink key={chapter.name} name={chapter.name} pdfLink={chapter.pdfLink} />
          ))}
        </div>
      </main>
    </div>
  );
}
