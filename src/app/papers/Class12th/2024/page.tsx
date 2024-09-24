"use client";  // Add this to make the component a Client Component

import { useParams } from 'next/navigation'; // Correct hook for Next.js App Router
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SchoolIcon } from 'lucide-react';

const testTypes = ['MonthlyTest', 'HalfYearly', 'FinalYear'];

export default function YearClass10Papers() {
  const params = useParams();  // Access dynamic parameters from the URL
  const { year } = params;  // 'year' is dynamically retrieved from the URL

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
      <h1 className="text-3xl font-bold mb-8 text-center">Class 10th - Year {year}</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {testTypes.map((testType) => (
          <Link href={`/papers/Class10th/2024/${testType}`} key={testType}>
            <div className="p-4 border rounded shadow hover:bg-blue-100 cursor-pointer">
              <h2 className="text-xl text-center">{testType}</h2>
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
