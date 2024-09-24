import { Button } from '@/components/ui/button';
import { SchoolIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import styles from './Class10thPapers.module.css'; // Import the CSS module

const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018,
];

export default function Class10thPapers() {
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

      {/* Custom buttons for each year */}
      <div className="flex justify-center flex-wrap gap-4 mt-10 grow"> {/* Added grow for footer positioning */}
        {years.map((year) => (
          <Link href={`/papers/Class10th/${year}`} key={year} className="m-4">
            <div className={`${styles.button} p-8 border rounded-lg shadow hover:bg-blue-100 cursor-pointer transition-all duration-300 ease-in-out`}>
              <h2 className="text-xl text-center">Year {year}</h2>
              {/* Star SVG elements */}
              <div className={styles['star-1']}>
                <svg viewBox="0 0 784.11 815.53" className={styles.fil0}>
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
                </svg>
              </div>
              <div className={styles['star-2']}>
                <svg viewBox="0 0 784.11 815.53" className={styles.fil0}>
                  <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path>
                </svg>
              </div>
              {/* Additional star components if needed */}
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
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
