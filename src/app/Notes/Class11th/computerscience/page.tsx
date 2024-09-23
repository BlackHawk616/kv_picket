import Link from "next/link";
import React from "react";
import InteractiveChapterLink from "@/components/InteractiveChapterLink"; // Adjust the path if necessary

const chapters = [
  { name: "Ch-1 : Computer System Organization", pdfLink: "/PDFS/Class11th/cs/1.pdf" },
  { name: "Ch-2 : Types Of Software", pdfLink: "/PDFS/Class11th/cs/2.pdf" },
  { name: "Ch-3 : Boolean Algebra ", pdfLink: "/PDFS/Class11th/cs/3.pdf" },
  { name: "Ch-4 : Number System", pdfLink: "/PDFS/Class11th/cs/4.pdf" },
  { name: "Ch-5 : Cloud Computing and Services", pdfLink: "/PDFS/Class11th/cs/5.pdf" },
  { name: "Ch-6 : Problem Solving",  pdfLink: "/PDFS/Class11th/cs/6.pdf"},
  { name: "Ch-7 : Introduction To Python",  pdfLink: "/PDFS/Class11th/cs/7.pdf"},
  { name: "Ch-8 : Python Fundamentals",  pdfLink: "/PDFS/Class11th/cs/8.pdf"}, 
  { name: "Ch-9 : Data Handling",  pdfLink: "/PDFS/Class11th/cs/9.pdf"},
  { name: "Ch-10 : Conditional Statements",  pdfLink: "/PDFS/Class11th/cs/10.pdf"},
  { name: "Ch-11 : Working With Loops",  pdfLink: "/PDFS/Class11th/cs/11.pdf"},
  { name: "Ch-12 : Strings",  pdfLink : "/PDFS/Class11th/cs/12.pdf"},
  { name: "Ch-13 : List In Python",  pdfLink : "/PDFS/Class11th/cs/13.pdf"},
  { name: "Ch-14 : Tuple In Python",   pdfLink :"/PDFS/Class11th/cs/14.pdf"}, 
  { name: "Ch-15 : Dictionary In Python",  pdfLink : "/PDFS/Class11th/cs/15.pdf" },
  { name: "Ch-16 : Sorting In Python", pdfLink: "/PDFS/Class11th/cs/16.pdf"},
  { name: "Ch-17 : Python Modules", pdfLink:"/PDFS/Class11th/cs/17.pdf"},
  { name: "Ch-18 : Cyber Security", pdfLink:"/PDFS/Class11th/cs/18.pdf"},
  { name: "Ch-19 : Safely Accessing Website", pdfLink:"/PDFS/Class11th/cs/19.pdf"},
  { name: "Ch-20 : IPR and Privacy Law", pdfLink:"/PDFS/Class11th/cs/20.pdf"},
  { name: "Ch-21 : Technology And Society", pdfLink:"/PDFS/Class11th/cs/21.pdf"},
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
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Class 11th - Computer Science Notes</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {chapters.map((chapter) => (
            <InteractiveChapterLink key={chapter.name} name={chapter.name} pdfLink={chapter.pdfLink} />
          ))}
        </div>
      </main>
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
    </div>
  );
}
