
import React from "react";
import { Button } from "@/components/ui/button";

const AboutBen = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-4xl font-serif">
              About Ben Orenstein
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              As a long-time Somerville resident and community advocate, I've dedicated myself to making our city more vibrant, accessible, and affordable for everyone.
            </p>
            
            <div className="mb-8 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-campaign-teal">Experience</h3>
                <p className="text-gray-600">
                  With a background in community organizing and urban planning, I've worked directly with residents, local businesses, and city officials to develop practical solutions for our city's most pressing challenges.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-campaign-teal">Vision</h3>
                <p className="text-gray-600">
                  I envision a Somerville where everyone can afford to live, where our streets are safe for all users, and where our public spaces foster community connections and local businesses thrive.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-campaign-teal">Commitment</h3>
                <p className="text-gray-600">
                  I'm committed to transparent, accountable, and accessible leadership. I believe in listening to all voices in our community and working collaboratively to address our shared challenges.
                </p>
              </div>
            </div>
            
            <Button className="bg-campaign-blue hover:bg-campaign-blue/90">
              Learn More About Ben
            </Button>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-campaign-teal to-campaign-blue opacity-25 blur"></div>
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="h-full w-full bg-gray-200">
                  {/* Placeholder for Ben's image */}
                  <div className="flex h-full items-center justify-center bg-gray-100 text-gray-500">
                    Ben Orenstein
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBen;
