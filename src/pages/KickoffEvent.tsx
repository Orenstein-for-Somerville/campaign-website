import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Ticket, Users, ChevronRight, Star, Heart, Home, Building, Sparkles } from "lucide-react";

const KickoffEvent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Decorative Background */}
        <section className="relative py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-campaign-blue via-campaign-blue to-campaign-teal opacity-90 z-0"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-campaign-teal opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-300 opacity-10 rounded-full blur-2xl"></div>
          </div>
          
          <div className="container relative mx-auto px-4 md:px-6 z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <p className="text-white/90 font-medium text-sm">May 13th, 2025 • Somerville</p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-white leading-tight">
                  Join Ben's Campaign<br />Kickoff Celebration
                </h1>
                <p className="text-xl mb-8 text-blue-50 max-w-lg">
                  Be part of the movement to make Somerville more affordable and vibrant for everyone. Food, drinks, and inspiring conversations await!
                </p>
                <div>
                  <Button size="lg" className="bg-white text-campaign-blue hover:bg-blue-50 shadow-lg shadow-black/10 transition-all duration-300 transform hover:translate-y-[-2px]" asChild>
                    <a href="https://secure.actblue.com/donate/orenstein-kickoff" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Get Tickets <ChevronRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                {/* Glass card effect */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-white/20 to-white/5 blur-md"></div>
                <div className="relative rounded-2xl bg-white/10 backdrop-blur-md p-8 md:p-10 shadow-2xl border border-white/20">
                  <h3 className="text-white font-semibold text-xl mb-6">Event Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center group">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors mr-4">
                        <Calendar className="h-5 w-5 text-campaign-teal" />
                      </div>
                      <div>
                        <span className="text-white/70 text-sm">Date</span>
                        <p className="text-lg text-white font-medium">May 13th, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors mr-4">
                        <Clock className="h-5 w-5 text-campaign-teal" />
                      </div>
                      <div>
                        <span className="text-white/70 text-sm">Time</span>
                        <p className="text-lg text-white font-medium">7:00pm – 9:30pm</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors mr-4">
                        <MapPin className="h-5 w-5 text-campaign-teal" />
                      </div>
                      <div>
                        <span className="text-white/70 text-sm">Location</span>
                        <p className="text-lg text-white font-medium">Davis Square VFW</p>
                        <p className="text-sm text-white/80">351 Summer St, Somerville</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center group">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors mr-4">
                        <Ticket className="h-5 w-5 text-campaign-teal" />
                      </div>
                      <div>
                        <span className="text-white/70 text-sm">Contribution</span>
                        <p className="text-lg text-white font-medium">Free to $1,000</p>
                        <p className="text-sm text-white/80">All support levels welcome</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider with wave pattern */}
        <div className="relative h-24 bg-white">
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 74L60 61.7C120 49.3 240 24.7 360 24.7C480 24.7 600 49.3 720 49.3C840 49.3 960 24.7 1080 12.3C1200 0 1320 0 1380 0H1440V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0Z" fill="#F9FAFB"/>
          </svg>
        </div>

        {/* Event Details Section */}
        <section id="details" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-px w-8 bg-campaign-teal mr-4"></span>
                <span className="text-campaign-teal uppercase font-semibold tracking-wider text-sm">Campaign Launch</span>
                <span className="h-px w-8 bg-campaign-teal ml-4"></span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-4xl lg:text-5xl font-serif">
                A Night to Remember
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Join us as we launch a campaign focused on making Somerville more affordable and vibrant for everyone.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <h3 className="text-2xl font-bold text-campaign-blue mb-6 flex items-center">
                <Sparkles className="h-6 w-6 mr-3 text-campaign-teal" /> 
                What to Expect
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <h4 className="font-bold text-campaign-blue mb-2 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-campaign-teal" /> Community Gathering
                  </h4>
                  <p className="text-gray-700">
                    Connect with like-minded neighbors who care about Somerville's future. Plus-ones welcome! Meet residents from all corners of our city.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <h4 className="font-bold text-campaign-blue mb-2 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-campaign-teal" /> Campaign Vision
                  </h4>
                  <p className="text-gray-700">
                    Hear Ben share his passionate vision for a more affordable Somerville and his concrete plan to address our housing shortage through bold policy solutions.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <h4 className="font-bold text-campaign-blue mb-2 flex items-center">
                    <Star className="h-5 w-5 mr-2 text-campaign-teal" /> Food & Refreshments
                  </h4>
                  <p className="text-gray-700">
                    Enjoy delicious refreshments from local Somerville businesses while you mingle with campaign supporters and team members in a relaxed atmosphere.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button className="bg-campaign-teal hover:bg-campaign-teal/90 shadow-lg shadow-campaign-teal/20 transition-all duration-300 transform hover:translate-y-[-2px]" size="lg" asChild>
                  <a href="https://secure.actblue.com/donate/orenstein-kickoff" target="_blank" rel="noopener noreferrer" className="px-8 py-6">
                    Secure Your Spot Today
                  </a>
                </Button>
                <p className="mt-4 text-sm text-gray-500">Contribution levels from free to $1,000 available. Everyone is welcome!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Support Section */}
        <section className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-campaign-blue/5 to-campaign-teal/5"></div>
          <div className="container relative mx-auto px-4 md:px-6 z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="h-px w-8 bg-campaign-teal mr-4"></span>
                <span className="text-campaign-teal uppercase font-semibold tracking-wider text-sm">Our Vision</span>
                <span className="h-px w-8 bg-campaign-teal ml-4"></span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-4xl lg:text-5xl font-serif">
                Why Support Ben's Campaign
              </h2>
              <p className="text-lg text-gray-600">
                Ben is running because our housing shortage is primarily a political problem, 
                and it's time we had leaders with the courage to act.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-6">
                  <Home className="h-7 w-7 text-campaign-blue" />
                </div>
                <h3 className="text-xl font-bold text-campaign-blue mb-3">Housing for All</h3>
                <p className="text-gray-600">
                  Ben will fight to build more housing and create policies that make Somerville 
                  affordable for everyone, not just those who got here early.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-6">
                  <Building className="h-7 w-7 text-campaign-blue" />
                </div>
                <h3 className="text-xl font-bold text-campaign-blue mb-3">Supporting Local Business</h3>
                <p className="text-gray-600">
                  As a local business owner himself, Ben understands what it takes to create 
                  a thriving local economy that serves residents and supports community.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 mb-6">
                  <Users className="h-7 w-7 text-campaign-blue" />
                </div>
                <h3 className="text-xl font-bold text-campaign-blue mb-3">Community Engagement</h3>
                <p className="text-gray-600">
                  Ben already attends most City Council meetings and stays deeply engaged with 
                  local issues affecting Somerville residents on a daily basis.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-campaign-blue hover:bg-campaign-blue/90 transition-all duration-300 transform hover:translate-y-[-2px] px-8" size="lg" asChild>
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