"use client";  // Mark this as a Client Component

import { useParams } from 'next/navigation';  // Use useParams instead of useRouter
import Link from 'next/link';

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
  );
} 
