"use client";  // Mark this as a Client Component

import { useParams } from 'next/navigation';  // Use useParams instead of useRouter
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SchoolIcon } from 'lucide-react';

// Define subjects
const subjects = [
  { name: "Maths", pdfLink: "/papers/Class10th/2024/MonthlyTest/Maths.pdf" },
  { name: "Physics", pdfLink: "/papers/Class10th/2024/MonthlyTest/Physics.pdf" },
  { name: "Chemistry", pdfLink: "/papers/Class10th/2024/MonthlyTest/Chemistry.pdf" },
  // Add more subjects as needed
];

export default function MonthlyTestPapers() {
  const params = useParams();  // Get parameters from the URL

  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container to ensure full height */}
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
            <Button variant="primary" className="hidden md:inline-flex">Contact Us</Button>
          </Link>
        </div>
      </header>

    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Class 10th - Monthly Test Papers</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {subjects.map((subject) => (
          <Link href={subject.pdfLink} key={subject.name} target="_blank">
            <div className="p-4 border rounded shadow hover:bg-blue-100 cursor-pointer">
              <h2 className="text-xl text-center">{subject.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <footer className="bg-primary text-primary-foreground py-6 mt-auto"> {/* Added mt-auto to push footer to the bottom */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 White Hawk Studios</p>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline" prefetch={false}>
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
