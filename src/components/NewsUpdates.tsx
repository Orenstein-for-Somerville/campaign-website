
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Calendar, Users } from "lucide-react";

const NewsUpdates = () => {
  const newsItems = [
    {
      title: "Housing Policy Proposal Released",
      date: "April 6, 2025",
      excerpt:
        "Read about Ben's plan to automatically address our housing shortage through a single ordinance.",
      category: "Policy",
      icon: FileText,
      iconColor: "text-campaign-blue",
      url: "https://www.somervillebeacon.com/p/how-to-actually-solve-a-housing-shortage"
    },
    {
      title: "See Ben sing at PorchFest!",
      date: "May 10, 2025",
      excerpt:
        "Ben will perform with his barbershop quartet at PorchFest this year. Come to 28 Newberne St between 12 and 2 to see him.",
      category: "Community",
      icon: Users,
      iconColor: "text-campaign-orange",
      url: ""
    },
    {
      title: "Campaign Kickoff Event in Davis Square",
      date: "May 13th, 2025",
      excerpt:
        "Join us for our official campaign launch for speeches and conversations about Somerville's future.",
      category: "Event",
      icon: Calendar,
      iconColor: "text-campaign-teal",
      url: "/kickoff"
    },
  ];

  return (
    <section id="news" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gray-50/70"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNlZWVlZWUiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEiLz48L2c+PC9zdmc+')]"></div>
      
      {/* Decorative elements */}
      <div className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-campaign-teal/5 to-campaign-blue/5 opacity-70 blur-3xl"></div>
      <div className="absolute -left-32 bottom-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-campaign-orange/5 to-campaign-teal/5 opacity-50 blur-3xl"></div>
      
      <div className="container relative mx-auto px-6 md:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-campaign-blue/10 text-campaign-blue text-sm font-medium">
            <span className="block h-1.5 w-1.5 rounded-full bg-campaign-blue mr-2"></span>
            Latest Updates
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-5xl font-serif tracking-tight">
            News & Campaign Updates
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed">
            Stay informed about upcoming events, policy announcements, and community initiatives.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-10 md:grid-cols-3 max-w-5xl mx-auto">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl border-0 ring-1 ring-gray-200/80 hover:ring-gray-300/70 bg-white"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-campaign-blue via-campaign-teal to-campaign-orange opacity-70"></div>
              
              <CardHeader className="pt-8 pb-4 px-7">
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 ${item.iconColor}`}>
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">{item.category}</span>
                  </div>
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
                
                <CardTitle className="text-xl md:text-2xl font-bold text-campaign-blue">
                  {item.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-7 pb-4">
                <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
              </CardContent>
              
              {item.url && (
                <div className="px-7 pb-7 pt-2">
                  <Button 
                    variant="ghost" 
                    className="group p-0 font-medium text-campaign-teal hover:text-campaign-blue"
                    asChild
                  >
                    <a 
                      href={item.url} 
                      target={item.url.startsWith('http') ? "_blank" : "_self"} 
                      rel={item.url.startsWith('http') ? "noopener noreferrer" : ""}
                      className="flex items-center"
                    >
                      Read More{" "}
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              )}
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-campaign-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsUpdates;
