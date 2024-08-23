import { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Adjust the import path according to your project
import { SchoolIcon } from 'lucide-react'; // Adjust the import path according to your project
 
const TermsOfService: FC = () => {
  return (
    <>
      <Head>
        <title>Terms of Service</title>
        <meta name="description" content="Terms of Service for School-Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <div className="flex items-center gap-2">
                <SchoolIcon className="w-6 h-6" />
                <span className="text-xl font-bold">Kendriya Vidyalaya Picket</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/code-programs">
                <span className="hover:underline">Code And Programs</span>
              </Link>
              <Link href="#notes">
                <span className="hover:underline">Notes</span>
              </Link>
              <Link href="/sample-papers">
                <span className="hover:underline">Sample Papers</span>
              </Link>
              <Link href="/exam-papers">
                <span className="hover:underline">Exam Papers</span>
              </Link>
            </nav>
            <Link href="/contact-us/">
              <Button variant="primary" className="hidden md:inline-flex">
                Contact Us
              </Button>
            </Link>
          </div>
        </header>

        <main className="flex-grow container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

          <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
          <p>
            Welcome to School-Hub, created by a student of Kendriya Vidyalaya Picket. By accessing or using this
            Website, you agree to comply with and be bound by the following terms and conditions. If you do not agree
            with these terms, please do not use the Website.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Purpose of the Website</h2>
          <p>
            The Website is designed to provide educational resources, including notes and other materials, primarily for
            the use of Kendriya Vidyalaya Picket students and the public. The Creator has received permission from
            Kendriya Vidyalaya Picket to upload and share these educational resources.
          </p>

          <h2 className="text-xl font-semibold mt-6">3. Content Ownership and Use</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              All content on the Website, including but not limited to notes, documents, and multimedia materials, is
              the property of the Creator or the respective owners.
            </li>
            <li>
              You are granted a non-exclusive, non-transferable license to access and use the content for personal,
              non-commercial purposes only. Unauthorized use or distribution of the content is prohibited.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">4. Content Removal and Requests</h2>
          <p>
            The Creator reserves the right to remove or modify any content on the Website at their discretion. If you
            believe that any content on the Website infringes upon your rights or if you have any requests for removal of
            content, please contact us via email at <a href="mailto:blackhawk.workonly@gmail.com">blackhawk.workonly@gmail.com</a>.
            We will review and address your request in a timely manner.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. User Conduct</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              You agree not to use the Website for any unlawful purpose or in any manner that could damage, disable, or
              impair the Website.
            </li>
            <li>
              You agree not to attempt to gain unauthorized access to any part of the Website or its systems.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">6. Disclaimers and Limitation of Liability</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              The Website is provided on an &quot;as-is&quot; basis. The Creator makes no warranties or representations regarding
              the accuracy, completeness, or reliability of the content.
            </li>
            <li>
              The Creator shall not be liable for any direct, indirect, incidental, consequential, or punitive damages
              arising from your use of the Website or any content obtained from it.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">7. Changes to Terms</h2>
          <p>
            The Creator may update these Terms of Service from time to time. Changes will be posted on this page with
            the effective date. Your continued use of the Website after any changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl font-semibold mt-6">8. School-Hub Under White Hawk Studios</h2>
          <p>
            This School Website Comes Under White Hawk Studio. A Company Owned By Sri Ram Charan Student Of Kendriya Vidyalaya Picket.
          </p>

          <h2 className="text-xl font-semibold mt-6">9. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms of Service or any content on the Website, please
            contact us at <a href="mailto:blackhawk.workonly@gmail.com">blackhawk.workonly@gmail.com</a>.
          </p>
        </main>

        <footer className="bg-primary text-primary-foreground py-4 text-center">
          <p>&copy; {new Date().getFullYear()} White Hawk Studios. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default TermsOfService;
