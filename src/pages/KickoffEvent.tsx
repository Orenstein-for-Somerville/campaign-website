import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Ticket, Users, ChevronRight } from "lucide-react";

const KickoffEvent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-campaign-blue to-campaign-teal py-24 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                  Campaign Kickoff Event
                </h1>
                <p className="text-xl mb-8 text-blue-50">
                  Join Ben Orenstein and supporters as we officially launch our campaign 
                  for Somerville City Council At Large.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="bg-white text-campaign-blue hover:bg-blue-50" asChild>
                    <a href="https://secure.actblue.com/donate/orenstein-kickoff" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Get Tickets <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
                    <a href="#details">
                      Event Details
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-white/20 blur-xl"></div>
                <div className="relative aspect-video rounded-xl bg-campaign-blue/80 p-6 md:p-8 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-campaign-teal" />
                      <span className="text-lg">May 13th, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-campaign-teal" />
                      <span className="text-lg">7:00pm – 9:30pm</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-campaign-teal" />
                      <span className="text-lg">Davis Square VFW, 351 Summer St.</span>
                    </div>
                    <div className="flex items-center">
                      <Ticket className="h-5 w-5 mr-3 text-campaign-teal" />
                      <span className="text-lg">Free to $1,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section id="details" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-4xl font-serif">
                Join Us for a Special Evening
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Help us launch a campaign focused on making Somerville more affordable and vibrant for everyone.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-campaign-blue mb-6">What to Expect</h3>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-campaign-teal mb-2 flex items-center">
                      <Users className="h-5 w-5 mr-2" /> Community Gathering
                    </h4>
                    <p className="text-gray-700">
                      Connect with like-minded neighbors who care about Somerville's future. Plus-ones welcome!
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-campaign-teal mb-2 flex items-center">
                      <ChevronRight className="h-5 w-5 mr-2" /> Campaign Vision
                    </h4>
                    <p className="text-gray-700">
                      Hear Ben's passionate vision for a more affordable Somerville and his concrete plan to address our housing shortage.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-bold text-campaign-teal mb-2 flex items-center">
                      <ChevronRight className="h-5 w-5 mr-2" /> Food & Refreshments
                    </h4>
                    <p className="text-gray-700">
                      Enjoy delicious refreshments while you mingle with campaign supporters and team members.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-campaign-blue mb-6">Ticket Options</h3>
                <p className="text-gray-600 mb-6">
                  Choose the ticket level that works for you. Everyone is welcome regardless of contribution level.
                </p>
                <div className="space-y-4">
                  <div className="border border-campaign-teal/20 rounded-lg p-4 hover:border-campaign-teal/60 transition-colors">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-campaign-blue">Visionary</h4>
                      <span className="font-bold text-campaign-teal">$1,000</span>
                    </div>
                  </div>
                  <div className="border border-campaign-teal/20 rounded-lg p-4 hover:border-campaign-teal/60 transition-colors">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-campaign-blue">Builder</h4>
                      <span className="font-bold text-campaign-teal">$500</span>
                    </div>
                  </div>
                  <div className="border border-campaign-teal/20 rounded-lg p-4 hover:border-campaign-teal/60 transition-colors">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-campaign-blue">Champion</h4>
                      <span className="font-bold text-campaign-teal">$250</span>
                    </div>
                  </div>
                  <div className="border border-campaign-teal/20 rounded-lg p-4 hover:border-campaign-teal/60 transition-colors">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-campaign-blue">Ally</h4>
                      <span className="font-bold text-campaign-teal">$100</span>
                    </div>
                  </div>
                  <div className="border border-campaign-teal/20 rounded-lg p-4 hover:border-campaign-teal/60 transition-colors">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-campaign-blue">Neighbor</h4>
                      <span className="font-bold text-campaign-teal">$50</span>
                    </div>
                  </div>
                  <div className="border border-campaign-teal/20 rounded-lg p-4 hover:border-campaign-teal/60 transition-colors">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-campaign-blue">Attendee</h4>
                      <span className="font-bold text-campaign-teal">Free</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-campaign-teal hover:bg-campaign-teal/90" size="lg" asChild>
                    <a href="https://secure.actblue.com/donate/orenstein-kickoff" target="_blank" rel="noopener noreferrer">
                      Secure Your Spot Today
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Support Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-4xl font-serif">
                Why Support Ben's Campaign
              </h2>
              <p className="text-lg text-gray-600">
                Ben is running because our housing shortage is primarily a political problem, 
                and it's time we had leaders with the courage to act.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-campaign-blue mb-3">Housing for All</h3>
                <p className="text-gray-600">
                  Ben will fight to build more housing and create policies that make Somerville 
                  affordable for everyone, not just those who got here early.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-campaign-blue mb-3">Supporting Local Business</h3>
                <p className="text-gray-600">
                  As a local business owner himself, Ben understands what it takes to create 
                  a thriving local economy that serves residents.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-campaign-blue mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  Ben already attends most City Council meetings and stays deeply engaged with 
                  local issues affecting Somerville residents.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-campaign-blue hover:bg-campaign-blue/90" size="lg" asChild>
                <a href="https://secure.actblue.com/donate/orenstein-kickoff" target="_blank" rel="noopener noreferrer">
                  Join Us on May 13th
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KickoffEvent;