import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import NewsletterSection from "./NewsLetterSection";

export default function Footer() {
  return (
    <footer className="relative w-full px-3">
      <div className="bg-background py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Newsletter Section */}
          <NewsletterSection />

          {/* Footer Grid */}
          <div className="max-w-7xl mx-auto mt-5 md:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,auto] gap-8 md:gap-24">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center jus gap-2">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <span className="font-bold text-xl">ML4E</span>
                </div>

                <div className="space-y-2">
                  <p className="text-muted-foreground max-w-md">
                    Learn and master machine learning effortlessly with a
                    comprehensive platform designed for collaboration and growth
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Contact:</h3>
                  <div className="space-y-1">
                    <Link
                      href="mailto:ml4e.edu@gmail.com"
                      className="block text-muted-foreground hover:text-foreground"
                    >
                      ml4e.edu@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>

              {/* Sitemap Column */}
              <div>
                <h3 className="font-semibold mb-4">Sitemap</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 ML4E. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
