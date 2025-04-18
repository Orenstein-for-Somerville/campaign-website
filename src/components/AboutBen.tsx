import React from "react";
import { Button } from "@/components/ui/button";
import { Quote, ArrowUpRight } from "lucide-react";

const AboutBen = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-gray-50/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50/30 to-transparent"></div>

      {/* Decorative elements */}
      <div className="absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-gradient-to-bl from-campaign-teal/5 to-campaign-blue/5 blur-3xl"></div>
      <div className="absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-campaign-blue/5 blur-3xl"></div>

      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-20 md:grid-cols-2">
          <div className="order-2 md:order-1 lg:pr-10">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-campaign-blue/10 text-campaign-blue text-sm font-medium">
              <span className="block h-1.5 w-1.5 rounded-full bg-campaign-blue mr-2"></span>
              About the Candidate
            </div>

            <h2 className="mb-8 text-3xl font-bold text-campaign-blue md:text-5xl font-serif tracking-tight">
              Meet Ben Orenstein
            </h2>

            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                In 2005, Ben moved to Somerville and found a modest room near Teele Square for just $575 a month. That affordable start was life-changing—it enabled him to build a career in tech, pursue his passion for music, and eventually co-found <a href="https://tuple.app" target="_blank" rel="noopener noreferrer" className="text-campaign-blue hover:text-campaign-teal border-b border-campaign-blue/30 hover:border-campaign-teal/50 transition-colors">Tuple</a>, a successful software company born and raised right here in Somerville.
              </p>

              <p className="text-lg leading-relaxed">
                Ben believes everyone deserves the chance he had, but skyrocketing rents and limited housing now threaten that possibility. That's why he's deeply engaged in civic life, working hard to ensure Somerville remains accessible for all—not just the fortunate few. You'll catch him in the front row of nearly every City Council meeting, digging through zoning minutiae, or publishing straight-talk explainers on his watchdog blog, <a href="https://somervillebeacon.com" className="font-medium text-campaign-blue hover:text-campaign-teal border-b border-campaign-blue/30 hover:border-campaign-teal/50 transition-colors">The Somerville Beacon</a>.
              </p>

              <p className="text-lg leading-relaxed">
                As your Councilor At-Large, Ben won't just chip away at problems—he'll fight boldly for transformative change. He's ready to push through tough conversations, challenge conventional thinking, and build the kind of Somerville you'd be proud to show off—not priced out of.
              </p>

              <div className="pt-2">
                <Button
                  className="group mt-4 bg-white border border-campaign-blue/20 hover:border-campaign-blue/50 text-campaign-blue hover:bg-campaign-blue/5 shadow-sm transition-all"
                  asChild
                >
                  <a href="https://somervillebeacon.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Read The Somerville Beacon
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center relative">
            <div className="relative">

              {/* Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white z-10 p-2 shadow-2xl shadow-gray-200/50 ring-1 ring-gray-100">
                <div className="aspect-square w-full max-w-[520px] overflow-hidden rounded-xl">
                  <img
                    src="/the-crew.png"
                    alt="Ben with campaign supporters"
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>

              {/* Decorative dots pattern */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full z-0 hidden md:block">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMDA2N2IxIiBmaWxsLW9wYWNpdHk9IjAuMiIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjEiLz48Y2lyY2xlIGN4PSIxIiBjeT0iMTEiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjEiIHI9IjEiLz48L2c+PC9zdmc+')]"></div>
              </div>

              {/* Accent corner */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-campaign-teal/10 rounded-full z-0 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBen;
