
import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, ArrowRight, MapPin, CalendarDays, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-campaign-blue text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTYwIDBoLTYwdjYwaDYweiIvPjwvZz48L3N2Zz4=')] bg-[length:30px_30px]"></div>
      
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-campaign-teal/20 rounded-full blur-3xl opacity-10 -z-0"></div>
      
      <div className="container relative mx-auto px-6 pt-16 pb-10 md:px-8">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-12">
          {/* Logo and social column */}
          <div className="md:col-span-4">
            <div className="flex items-baseline mb-5">
              <h3 className="text-2xl font-bold font-serif text-white tracking-tight">Ben Orenstein</h3>
              <div className="mx-2 h-4 w-px bg-white/20"></div>
              <span className="text-lg text-campaign-teal/90">for Somerville</span>
            </div>
            
            <p className="mb-6 text-blue-100 leading-relaxed">
              Candidate for At-Large City Councilor<br />
              Somerville, Massachusetts
            </p>
            
            <div className="flex space-x-5">
              <a 
                href="https://www.facebook.com/profile.php?id=61574869330087" 
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://x.com/r00k" 
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </a>
              <a 
                href="https://instagram.com/orensteinforsomerville" 
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick links column */}
          <div className="md:col-span-3">
            <h4 className="mb-5 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3 text-blue-100">
              <li>
                <a href="#home" className="inline-flex items-center hover:text-white transition-colors">
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-campaign-teal/60" />
                  Home
                </a>
              </li>
              <li>
                <a href="#issues" className="inline-flex items-center hover:text-white transition-colors">
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-campaign-teal/60" />
                  Platform Issues
                </a>
              </li>
              <li>
                <a href="#about" className="inline-flex items-center hover:text-white transition-colors">
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-campaign-teal/60" />
                  About Ben
                </a>
              </li>
              <li>
                <a href="#news" className="inline-flex items-center hover:text-white transition-colors">
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-campaign-teal/60" />
                  News & Updates
                </a>
              </li>
              <li>
                <a href="/kickoff" className="inline-flex items-center hover:text-white transition-colors">
                  <ArrowRight className="mr-2 h-3.5 w-3.5 text-campaign-teal/60" />
                  Campaign Kickoff
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <h4 className="mb-5 text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-5 text-blue-100">
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 mt-0.5 text-campaign-teal/70" />
                <div>
                  <a 
                    href="mailto:ben@orensteinforsomerville.com" 
                    className="hover:text-white transition-colors"
                  >
                    ben@orensteinforsomerville.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 mt-0.5 text-campaign-teal/70" />
                <div>
                  <strong className="text-white">Campaign HQ:</strong><br />
                  Maxwells Green, Somerville, MA 02144
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter signup */}
          <div className="md:col-span-2">
            <h4 className="mb-5 text-lg font-semibold text-white">Important Dates</h4>
            <ul className="space-y-5">
              <li className="flex items-start text-blue-100">
                <CalendarDays className="mr-3 h-5 w-5 mt-0.5 text-campaign-teal/70" />
                <div>
                  <strong className="text-white">Campaign Kickoff:</strong><br />
                  May 13th, 2025
                </div>
              </li>
              <li className="flex items-start text-blue-100">
                <CalendarDays className="mr-3 h-5 w-5 mt-0.5 text-campaign-teal/70" />
                <div>
                  <strong className="text-white">Election Day:</strong><br />
                  November 4th, 2025
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center">
          <div className="text-center">
            <p className="text-sm text-blue-200">
              Paid for by The Orenstein Committee &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
