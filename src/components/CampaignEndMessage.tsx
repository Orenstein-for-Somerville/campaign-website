import React from "react";
import { Button } from "@/components/ui/button";

const CampaignEndMessage = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-campaign-blue mb-6 font-serif text-center">
            A Message from Ben
          </h1>
          <div className="prose prose-lg text-gray-700">
            <p className="text-xl mb-6">
              I've decided not to run for City Council at this time.
            </p>
            <p className="mb-6">
              I'm glad I explored this path, but in the end, it just didn't feel right for me at this moment.
            </p>
            <p className="mb-6">
              I still love Somerville, and expect to be involved in our community in other ways. I sincerely appreciate everyone who supported me during this exploration.
            </p>
            <p className="mb-10">
              Thank you for your support!
            </p>
            <div>
              <p className="text-xl font-medium text-campaign-blue">
                — Ben Orenstein
              </p>
            </div>
          </div>
          <div className="mt-10">
            <Button className="bg-campaign-blue hover:bg-campaign-blue/90" asChild>
              <a href="mailto:ben@orenstein.com">
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignEndMessage;
