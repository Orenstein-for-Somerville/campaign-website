
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformIssues from "@/components/PlatformIssues";
import AboutBen from "@/components/AboutBen";
import CallToAction from "@/components/CallToAction";
import NewsUpdates from "@/components/NewsUpdates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PlatformIssues />
        <AboutBen />
        <CallToAction />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
