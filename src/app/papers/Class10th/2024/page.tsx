"use client";  // Add this to make the component a Client Component

import { useParams } from 'next/navigation'; // Correct hook for Next.js App Router
import Link from 'next/link';

const testTypes = ['Monthly Test', 'HalfYearly', 'FinalYear'];

export default function YearClass10Papers() {
  const params = useParams();  // Access dynamic parameters from the URL
  const { year } = params;  // 'year' is dynamically retrieved from the URL

  return (
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
  );
}
