
import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-campaign-blue text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xl font-bold">Ben Orenstein</h3>
            <p className="mb-4 text-blue-100">
              Candidate for At Large Councilor<br />
              Somerville, Massachusetts
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61574869330087" className="text-blue-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://x.com/r00k" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#issues" className="hover:text-white transition-colors">
                  Platform Issues
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Ben
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors">
                  News & Updates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:ben@orensteinforsomerville.com" className="hover:text-white transition-colors">ben@orensteinforsomerville.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:6175551234" className="hover:text-white transition-colors">
                  (617) 555-1234
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-blue-200">
                Campaign HQ: 123 Davis Square, Somerville, MA 02144
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center">
          <p className="text-sm text-blue-200">
            Paid for by The Orenstein Committee &copy; {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
