import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CampaignEndMessage from "@/components/CampaignEndMessage";

const KickoffEvent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CampaignEndMessage />
      </main>
      <Footer />
    </div>
  );
};

export default KickoffEvent;
