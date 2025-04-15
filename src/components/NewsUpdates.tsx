
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewsUpdates = () => {
  const newsItems = [
    {
      title: "Campaign Kickoff Event at Davis Square",
      date: "April 20, 2025",
      excerpt:
        "Join us for our official campaign launch with speeches, local performers, and community conversations about Somerville's future.",
      category: "Event",
    },
    {
      title: "Housing Policy Proposal Released",
      date: "April 10, 2025",
      excerpt:
        "Today we released our comprehensive plan to address Somerville's housing challenges through increased supply and tenant protections.",
      category: "Policy",
    },
    {
      title: "Community Clean-Up at Magoun Square",
      date: "April 5, 2025",
      excerpt:
        "We had a great turnout for our community clean-up event. Thanks to all the volunteers who helped beautify Magoun Square!",
      category: "Community",
    },
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-4xl font-serif">
            News & Updates
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Stay informed about our campaign events, policy announcements, and community initiatives.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-md border-t-4 border-t-campaign-teal">
              <CardHeader className="pb-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className="rounded-full bg-campaign-lightgray px-3 py-1 text-xs font-medium text-campaign-blue">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold text-campaign-blue">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group p-0 text-campaign-teal hover:text-campaign-blue">
                  Read More{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-campaign-teal text-campaign-teal hover:bg-campaign-teal/10">
            View All Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;
