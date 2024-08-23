import Image from "next/image";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import SocialMediaLinks from "../../components/socialmedia";
import { SchoolIcon } from "lucide-react";

export default function ContactUs() {
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
              Code And Programs
            </Link>
            <Link href="#notes" className="hover:underline" prefetch={false}>
              Notes
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Sample Papers
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Exam Papers
            </Link>
          </nav>
          <Link href="/contact-us/">
            <Button variant="primary" className="hidden md:inline-flex">
              Contact Us
            </Button>
          </Link>
        </div>
      </header>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ marginBottom: "1rem" }}>Contact Us</h1>
        <Card style={{ maxWidth: "600px", margin: "0 auto", padding: "1.5rem" }}>
          <CardContent>
            <div style={{ marginBottom: "1rem" }}>
              {/* Developer's Image */}
              <Image
                src="/image.png" alt="Developer Image"
                width={200}
                height={150}
                style={{
                  borderRadius: "50%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: "1rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <h2 style={{ marginBottom: "1rem" }}>Sri Ram Charan</h2>
              <p style={{ fontSize: "1.5rem", color: "#555" }}>
                Passionate developer with expertise in web development, AI, and
                game development. Connect with me through the links below.
              </p>
              <p><strong>Email:</strong> <a href="mailto:blackhawk.workonly@gmail.com">blackhawk.workonly@gmail.com</a></p>
            </div>

            {/* Social Media Links */}
            <SocialMediaLinks />
          </CardContent>
          <CardFooter style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
