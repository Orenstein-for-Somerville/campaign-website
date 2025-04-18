import React, { useState, useEffect } from "react";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AnnouncementBanner = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Subtle animation effect that runs every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 overflow-hidden border-b border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-campaign-blue to-campaign-teal" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTE1IDBoLTE1djE1aDE1eiIvPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="relative container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-3">
          {/* Center section with image and text */}
          <div className="flex items-center justify-center gap-3">
            <div className={`flex items-center justify-center h-8 w-8 rounded-md bg-white/10 backdrop-blur-sm ${isAnimating ? 'animate-pulse' : ''}`}>
              <CalendarCheck className="h-4 w-4 text-white" />
            </div>
            
            <span className="font-medium text-white/90 text-sm">
              <span className="text-white font-semibold">Campaign Kickoff:</span> Join us on May 13th at the Davis Square VFW!
            </span>
          </div>
          
          {/* Button section */}
          <div className="flex items-center gap-2 ml-2 md:ml-4">
            <Link
              to="/kickoff"
              className="group inline-flex items-center justify-center bg-white text-campaign-blue rounded-md text-sm font-medium px-4 py-1.5 hover:bg-white/90 transition-all shadow-sm shadow-black/5"
            >
              Event Details <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;