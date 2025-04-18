
import React from "react";
import { Button } from "@/components/ui/button";

const AboutBen = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-8 text-3xl font-bold text-campaign-blue md:text-4xl font-serif">
              About Ben Orenstein
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Ben is running for Somerville City Council At Large to make our
              city more affordable, <span class="italic">just like it was when he first arrived</span>.
            </p>

            <p className="mb-6 text-lg text-gray-600">
              In 2006, Ben moved to Somerville and found a room near Teele Square for just $575 a month. 
              That affordable start helped him build a
              career in tech, pursue his passion for music, and eventually
              <span class="font-bold"> co-found a successful software company
                right here in Somerville</span>. Now, with deep civic
              involvement and a proven track record of solving hard problems, he’s ready
              to help others find that same opportunity.
            </p>

            <p className="mb-6 text-lg text-gray-600">
              Ben is already engaged in Somerville's civic life: he attends
              most City Council meetings, helped write an early draft of the
              Davis Square Neighborhood Council’s bylaws, and created <a href="https://somervillebeacon.com" className="text-campaign-blue hover:text-campaign-teal border-b border-campaign-blue/30 hover:border-campaign-teal/50 transition-colors">The Somerville Beacon</a> to inform residents about their government.
            </p>

            <p className="mb-6 text-lg text-gray-600">
              Ben is running because our housing shortage is primarily a
              political problem, and it’s time we had leaders with the courage
              to act. If elected, Ben will fight to build more housing, support
              local businesses, and revitalize our public spaces—so Somerville
              works for everyone, not just the lucky few who got here early.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-campaign-teal to-campaign-blue opacity-25 blur"></div>
              <div className="relative aspect-square w-full max-w-[520px] overflow-hidden rounded-lg bg-white shadow-xl">
                <div className="h-full w-full bg-gray-200">
                  {/* Placeholder for Ben's image */}
                  <div className="flex h-full items-center justify-center bg-gray-100 text-gray-500">
                    <img src="/the-crew.png"></img>
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
