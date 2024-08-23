import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const subjects = [
  { name: "Physics", href: "/notes/class-12/physics" },
  { name: "Chemistry", href: "/notes/class-12/chemistry" },
  { name: "Maths", href: "/notes/class-12/maths" },
  { name: "Computer Science", href: "/notes/class-12/cs" },
  { name: "Informatics Practices", href: "/notes/class-12/ip" },
];

export default function Class12Notes() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <SchoolIcon className="w-6 h-6" />
            <span className="text-xl font-bold">School-Hub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/announcements" className="hover:underline" prefetch={false}>
              Announcements
            </Link>
            <Link href="/#notes" className="hover:underline" prefetch={false}>
              Notes
            </Link>
            <Link href="/gallery" className="hover:underline" prefetch={false}>
              Gallery
            </Link>
            <Link href="/curriculum" className="hover:underline" prefetch={false}>
              Curriculum
            </Link>
            <Link href="/sample-papers" className="hover:underline" prefetch={false}>
              Sample Papers
            </Link>
            <Link href="/exam-papers" className="hover:underline" prefetch={false}>
              Exam Papers
            </Link>
          </nav>
          <Link href="/contact-us">
            <Button variant="primary" className="hidden md:inline-flex">
              Contact Us
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl font-bold mb-8">Class 12th Notes</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%", maxWidth: "500px" }}>
          {subjects.map((subject) => (
            <Card key={subject.name} style={{ width: "100%", margin: "0 auto" }}>
              <CardContent>
                <h2 style={{ fontSize: "1.5rem", textAlign: "center" }}>{subject.name}</h2>
                <p style={{ fontSize: "1rem", textAlign: "center" }}>
                  All Chapters Notes Are Provided Here.
                  Last :- Updated 2024
                </p>
              </CardContent>
              <CardFooter>
                <Link href={`/Notes/Class12th/${subject.name.toLowerCase().replace(/\s+/g, '')}`}>
                  <Button style={{ width: "100%", padding: "0.75rem 0" }}>View Notes</Button>
                </Link>

              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function SchoolIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="currentColor"
      className="school w-5 h-5"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 00-.832.445L3 10l-1.387 2.319A2 2 0 004 15h12a2 2 0 002-2l-1.387-2.319-6.168-7.555A1 1 0 0010 2zm0 12a2 2 0 110-4 2 2 0 010 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}
