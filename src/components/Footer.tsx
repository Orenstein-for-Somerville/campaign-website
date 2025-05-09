
import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-campaign-blue text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4 flex items-center">
            <Mail className="mr-2 h-5 w-5 text-campaign-teal/70" />
            <a
              href="mailto:ben@orenstein.com"
              className="text-blue-100 hover:text-white transition-colors"
            >
              ben@orenstein.com
            </a>
          </div>
          <p className="text-sm text-blue-200">
            &copy; {new Date().getFullYear()} Ben Orenstein
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
