/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fRk68eqqh3e
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <SchoolIcon className="w-6 h-6" />
            <span className="text-xl font-bold">Kendriya Vidyalaya Picket</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Announcements
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Images
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Gallery
            </Link>
            <Link href="#curriculum" className="hover:underline" prefetch={false}>
              Curriculum
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Sample Papers
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Exam Papers
            </Link>
          </nav>
          <Button herf="/contact-us"variant="outline" className="hidden md:inline-flex">
            Contact Us
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="announcements" className="bg-muted py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Announcements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">New Extracurricular Activities</h3>
                  <p className="text-muted-foreground">
                    We are excited to announce the addition of new extracurricular activities for our students. Sign up
                    now!
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Parent-Teacher Conference Schedule</h3>
                  <p className="text-muted-foreground">
                    The upcoming parent-teacher conferences are scheduled for next month. Please check the schedule and
                    sign up for a slot.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    View Schedule
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">School Closure Due to Weather</h3>
                  <p className="text-muted-foreground">
                    Due to the severe weather conditions, the school will be closed tomorrow. Please stay safe and check
                    for updates.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="images" className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Images</h2>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Image 1"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Image 2"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Image 3"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Image 4"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section id="gallery" className="bg-muted py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Gallery</h2>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Gallery Image 1"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Gallery Image 2"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Gallery Image 3"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width={300}
                height={200}
                alt="Gallery Image 4"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "300/200", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section id="notes" className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Notes</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Class 12th</h3>
                  <p className="text-muted-foreground">Class 12 All Subjects Notes Science Stream Only</p>
                </CardContent>
                <CardFooter>
                <Link href="#" passHref>
                  Learn More
                </Link>

                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Class 11th</h3>
                  <p className="text-muted-foreground">Class 11th All Subject Notes Science Stream Only</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Class 10th</h3>
                  <p className="text-muted-foreground">Class 10th All Subject Notes</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        
        </section>
        <section id="curriculum" className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Curriculum</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Primary</h3>
                  <p className="text-muted-foreground">Comprehensive curriculum for grades 1-5.</p>
                </CardContent>
                <CardFooter>
                <Link href="/curriculum/primary" passHref>
                  Learn More
                </Link>

                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Secondary</h3>
                  <p className="text-muted-foreground">Rigorous curriculum for grades 6-10.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Higher Secondary</h3>
                  <p className="text-muted-foreground">Advanced curriculum for grades 11-12.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
          
        </section>
        <section id="sample-papers" className="bg-muted py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Sample Papers</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Class 10 Sample Papers</h3>
                  <p className="text-muted-foreground">Download sample papers for Class 10 exams.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Download
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Class 12 Sample Papers</h3>
                  <p className="text-muted-foreground">Download sample papers for Class 12 exams.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Download
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Board Exam Sample Papers</h3>
                  <p className="text-muted-foreground">Download sample papers for board exams.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Download
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="exam-papers" className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Exam Papers</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Class 10 Previous Year Papers</h3>
                  <p className="text-muted-foreground">Download previous year exam papers for Class 10.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Download
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Class 12 Previous Year Papers</h3>
                  <p className="text-muted-foreground">Download previous year exam papers for Class 12.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Download
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Board Exam Previous Year Papers</h3>
                  <p className="text-muted-foreground">Download previous year board exam papers.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Download
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardContent>
                  <h3 className="text-xl font-bold mb-2">Entrance Exam Previous Year Papers</h3>
                  <p className="text-muted-foreground">Download previous year entrance exam papers.</p>
                </CardContent>
                <CardFooter>
                  <Link href="#" className="text-primary hover:underline" prefetch={false}>
                    Download
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 School Name</p>
          <nav className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/contact-us" className="hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}