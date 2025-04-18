
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformIssues from "@/components/PlatformIssues";
import AboutBen from "@/components/AboutBen";
import CallToAction from "@/components/CallToAction";
import NewsUpdates from "@/components/NewsUpdates";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
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
