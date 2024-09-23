import { Button } from '@/components/ui/button';
import { SchoolIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const years = [2022, 2023, 2024];

export default function Class10thPapers() {
  return (
    <div>
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
  
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Class 10th Papers</h1>
      <div className="flex justify-center flex-wrap gap-4">
        {years.map((year) => (
          <Link href={`/papers/Class10th/${year}`} key={year}>
            <div className="p-4 border rounded shadow hover:bg-blue-100 cursor-pointer">
              <h2 className="text-xl text-center">Year {year}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
    // <div></div>
    
  );
}
