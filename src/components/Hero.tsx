import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_100%,rgba(44,177,188,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/headshot.png"
                alt="Ben Orenstein"
                className="w-48 h-48 rounded-full object-cover border-4 border-campaign-teal shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-campaign-blue sm:text-6xl font-serif">
                Ben Orenstein for Somerville
              </h2>
              <h3 className="mt-2 text-2xl font-medium text-campaign-teal sm:text-3xl">
                At-Large Councilor Candidate
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ben wants to make Somerville a city of more: more housing, more
                neighbors, more thriving businesses, and more vibrant squares.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <Button className="w-full sm:w-auto px-8 py-6 text-base bg-campaign-blue hover:bg-campaign-blue/90">
              Join Our Campaign
            </Button>
            <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-base border-campaign-teal text-campaign-teal hover:bg-campaign-teal/10">
              Learn About My Platform
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
        <div className="absolute right-0 -z-10 h-[50rem] w-[90rem] translate-x-1/3 bg-[url('/placeholder.svg')] bg-cover opacity-20" />
      </div>
    </section>
  );
};

export default Hero;
