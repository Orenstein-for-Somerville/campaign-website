import React, { useState } from "react";
import { CalendarCheck, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-campaign-blue to-campaign-teal text-white py-3 relative">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex flex-col items-center md:flex-row md:items-center text-center gap-2">
          <CalendarCheck className="h-5 w-5 flex-shrink-0 text-white" />
          <span className="text-sm font-medium">
            Join Ben's Campaign Kickoff Event on May 13th!
          </span>
          <Link
            to="/kickoff"
            className="inline-flex items-center justify-center bg-white text-campaign-blue rounded-full text-sm font-medium px-4 py-1 hover:bg-opacity-90 transition-colors"
          >
            Learn More <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;