import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pb-40"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-blue-50" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_80%,rgba(44,177,188,0.12),transparent)]" />
      <div className="absolute top-1/3 left-0 -translate-x-1/2 -z-10 h-[35rem] w-[35rem] rounded-full bg-gradient-to-tr from-campaign-blue/5 to-campaign-teal/10 blur-3xl" />
      <div className="absolute top-2/3 right-0 translate-x-1/3 -z-10 h-[40rem] w-[40rem] rounded-full bg-gradient-to-bl from-blue-50 to-campaign-teal/5 blur-3xl" />
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMyQzk1QkMiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTYwIDBoLTYwdjYwaDYweiIvPjwvZz48L3N2Zz4=')] bg-[length:60px_60px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1 flex justify-center relative">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-2 -z-10 bg-gradient-to-tr from-campaign-blue to-campaign-teal opacity-10 blur-xl rounded-full transform -rotate-6"></div>
                <div className="absolute -inset-1 -z-10 bg-gradient-to-br from-campaign-teal to-campaign-blue opacity-20 blur-lg rounded-full transform rotate-3"></div>
                
                {/* Main image with refined border */}
                <div className="relative rounded-2xl bg-white p-2 shadow-xl shadow-campaign-blue/5 ring-1 ring-gray-200/30">
                  <picture>
                    <source srcSet="/images/optimized/headshot.webp" type="image/webp" />
                    <img
                      src="/headshot.png"
                      alt="Ben Orenstein"
                      className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl shadow-sm"
                      loading="eager"
                      width="768"
                      height="768"
                    />
                  </picture>
                  
                  {/* Color accent elements */}
                  <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-campaign-teal opacity-20 blur-xl"></div>
                  <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-campaign-blue opacity-15 blur-xl"></div>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-campaign-blue/10 text-campaign-blue text-sm font-medium">
                <span className="block h-1.5 w-1.5 rounded-full bg-campaign-blue mr-2"></span>
                Election: November 5, 2025
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-campaign-blue font-serif leading-tight">
                Ben Orenstein <span className="text-campaign-teal block lg:inline">for Somerville</span>
              </h1>
              
              <h2 className="mt-3 md:mt-4 text-xl md:text-2xl font-medium text-gray-600">
                At-Large City Councilor Candidate
              </h2>
              
              <p className="mt-6 text-lg md:text-xl leading-8 text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Creating a Somerville of <span className="font-semibold">more</span>: more housing, 
                more neighbors, more thriving businesses, and more vibrant squares.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-5">
                <Button 
                  className="group relative w-full sm:w-auto px-6 py-6 text-base font-medium bg-campaign-blue hover:bg-campaign-blue/90 shadow-sm shadow-campaign-blue/20 overflow-hidden transition-all"
                  asChild
                >
                  <a href="https://airtable.com/appmdNjPjTLQP8fTS/pag5GmJTm7FP7ChVC/form" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Join Our Campaign
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="group w-full sm:w-auto px-6 py-6 text-base font-medium border-campaign-teal text-campaign-teal hover:bg-campaign-teal/5 relative overflow-hidden transition-all"
                  onClick={() => document.getElementById('issues')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span className="flex items-center gap-2">
                    Platform & Issues
                    <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
