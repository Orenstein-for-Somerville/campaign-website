
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NewsUpdates = () => {
  const newsItems = [
    {
      title: "Housing Policy Proposal Released",
      date: "April 6, 2025",
      excerpt:
        "Read about Ben's plan to automatically address our housing shortage through a single ordinance.",
      category: "Policy",
      url: "https://www.somervillebeacon.com/p/how-to-actually-solve-a-housing-shortage"
    },
    {
      title: "See Ben sing at PorchFest!",
      date: "May 10, 2025",
      excerpt:
        "Ben will perform with his barbershop quartet at PorchFest this year. Come to 28 Newberne St between 12 and 2 to see him.",
      category: "Community",
      url: ""
    },
    {
      title: "Campaign Kickoff Event in Davis Square",
      date: "May 13th, 2025",
      excerpt:
        "Join us for our official campaign launch for speeches and conversations about Somerville's future.",
      category: "Event",
      url: "https://secure.actblue.com/donate/orenstein-kickoff"
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
              {item.url && (
                <div className="px-6 pb-6">
                  <Button 
                    variant="ghost" 
                    className="group px-3 text-campaign-teal hover:text-campaign-blue -ml-3"
                    asChild
                  >
                    <a 
                      href={item.url} 
                      target={item.url.startsWith('http') ? "_blank" : "_self"} 
                      rel={item.url.startsWith('http') ? "noopener noreferrer" : ""}
                      className="flex items-center"
                    >
                      Read More{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-campaign-teal text-campaign-teal hover:bg-campaign-teal/10"
            asChild
          >
            <a href="/news">
              View All Updates
            </a>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default NewsUpdates;
