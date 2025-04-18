
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const isKickoffPage = location.pathname === "/kickoff";
  
  const navItems = isHomePage
    ? [
        { name: "Home", href: "#home" },
        { name: "Issues", href: "#issues" },
        { name: "About", href: "#about" },
        { name: "News", href: "#news" },
        { name: "Contact", href: "#contact" },
        { name: "Kickoff", href: "/kickoff" },
      ]
    : isKickoffPage
    ? [
        { name: "Home", href: "/" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Kickoff", href: "/kickoff" },
      ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {isHomePage ? (
              <a href="#home" className="flex items-center space-x-2 group">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-campaign-blue tracking-tight transition-colors group-hover:text-campaign-blue/90">Ben Orenstein</span>
                  <div className="mx-2 h-4 w-px bg-gray-200"></div>
                  <span className="text-base font-medium text-campaign-teal transition-colors group-hover:text-campaign-teal/90">
                    for Somerville
                  </span>
                </div>
              </a>
            ) : (
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-campaign-blue tracking-tight transition-colors group-hover:text-campaign-blue/90">Ben Orenstein</span>
                  <div className="mx-2 h-4 w-px bg-gray-200"></div>
                  <span className="text-base font-medium text-campaign-teal transition-colors group-hover:text-campaign-teal/90">
                    for Somerville
                  </span>
                </div>
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:text-campaign-teal"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:text-campaign-teal"
                >
                  {item.name}
                </a>
              )
            ))}
            <Button className="bg-campaign-teal hover:bg-campaign-teal/90 shadow-sm rounded-md font-medium px-5 py-2.5 transition-all text-white" asChild>
              <a href="https://secure.actblue.com/donate/bens-friends" target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "absolute inset-x-0 top-full bg-white transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="space-y-1 px-4 pb-5 pt-2">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-campaign-teal"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-campaign-teal"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            )
          ))}
          <Button className="mt-6 w-full bg-campaign-teal hover:bg-campaign-teal/90 shadow-sm rounded-md font-medium px-5 py-3 transition-all text-white" asChild>
            <a 
              href="https://secure.actblue.com/donate/bens-friends" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center"
            >
              Donate
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
