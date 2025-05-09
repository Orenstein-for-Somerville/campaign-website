
import React from "react";
import Footer from "@/components/Footer";
import CampaignEndMessage from "@/components/CampaignEndMessage";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <CampaignEndMessage />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
