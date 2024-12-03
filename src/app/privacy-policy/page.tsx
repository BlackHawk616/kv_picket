"use client";

import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust the import path according to your project
import { SchoolIcon } from "lucide-react"; // Adjust the import path according to your project

const PrivacyPolicy: FC = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - School-Hub</title>
                <meta name="description" content="Privacy Policy for School-Hub" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className="flex flex-col min-h-screen">
                {/* Header */}
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
                                <span className="hover:underline">Code and Programs</span>
                            </Link>
                            <Link href="/#notes">
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

                {/* Main Content */}
                <main className="flex-grow container mx-auto px-6 py-8">
                    <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
                    <p className="text-sm mb-4">Effective Date: [Insert Date]</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>
                                <strong>Personal Information:</strong> Name, email address, or any
                                other information you provide when you contact us or subscribe to
                                updates.
                            </li>
                            <li>
                                <strong>Non-Personal Information:</strong> Browser type, operating
                                system, and browsing behavior (collected through cookies).
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <p>The information collected is used to:</p>
                        <ul className="list-disc list-inside ml-4 space-y-2">
                            <li>Provide you with academic resources such as notes, sample papers, and programming materials.</li>
                            <li>Improve the functionality and user experience of the website.</li>
                            <li>Respond to your inquiries and feedback.</li>
                            <li>Notify you of updates and new features.</li>
                        </ul>
                        <p className="mt-4">
                            We will not sell, rent, or share your personal information with third
                            parties without your consent, except as required by law.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance user experience. Cookies are small
                            data files stored on your device that help us analyze web traffic and
                            improve the website. You can disable cookies in your browser settings,
                            though some website features may not function correctly without them.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                        <p>
                            We prioritize protecting your information and use industry-standard
                            measures to prevent unauthorized access, disclosure, or loss of data.
                            However, no method of transmission over the Internet is entirely
                            secure, and we can&apos;t guarantee absolute security.
                        </p>
                    </section>


                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">5. Third-Party Links</h2>
                        <p>
                            School-Hub may contain links to third-party websites. We are not
                            responsible for the privacy practices or content of those sites.
                            Please review their privacy policies before engaging with them.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
                        <p>
                            Our website is designed for students and educators. We do not knowingly
                            collect personal information from children under the age of 13. If you
                            believe a child has provided us with their information, please contact
                            us to have it removed.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">7. Updates to this Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically. Changes will be posted
                            on this page with an updated effective date. Your continued use of the
                            website after any modifications indicates your acceptance of the
                            revised policy.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy, please
                            contact us at:
                        </p>
                        <ul className="list-none mt-4 space-y-2">
                            <li>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:blackhawk.workonly@gmail.com" className="text-blue-600 underline">
                                    blackhawk.workonly@gmail.com
                                </a>
                            </li>
                        </ul>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-primary text-primary-foreground py-4 text-center">
                    <p>&copy; {new Date().getFullYear()} White Hawk Studios. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default PrivacyPolicy;
