
import React from "react";
import { Building, MapPin, Bike } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PlatformIssues = () => {
  const issues = [
    {
      title: "End the Housing Shortage",
      description: "Let's actually take it seriously!",
      details: "Housing is expensive because we've made it illegal to build sufficient supply. Ben is committed to aggressive upzoning, streamlined permitting, and building thousands of new homes fast.",
      icon: Building,
      color: "bg-blue-50 text-campaign-blue",
    },
    {
      title: "Pedestrianize Davis Square",
      description: "Because cars and people don't mix",
      details: "If there's anywhere in Somerville where we should prioritize people over traffic, it's Elm Street in Davis Square. Let's take back this street for pedestrians and watch businesses in Davis thrive. And while we're at it, let's rework the square so you can stay on your bike while riding through on the Community Path.",
      icon: Bike,
      color: "bg-teal-50 text-campaign-teal",
    },
    {
      title: "100,000 Somervillians",
      description: "Restoring our missing population",
      details: "In 1950, Somerville's population was over 100,000. Today, it's only 80,000. A shrinking city hurts local businesses, and reduces city revenue leading to limited services. Ben will make the changes needed to attract recent graduates, new families, immigrants, and retiring seniors.",
      icon: MapPin,
      color: "bg-amber-50 text-campaign-orange",
    },
  ];

  return (
    <section id="issues" className="py-24 bg-campaign-lightgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-campaign-blue/10 text-campaign-blue text-sm font-medium">
            <span className="block h-1.5 w-1.5 rounded-full bg-campaign-blue mr-2"></span>
            Platform & Priorities
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-5xl font-serif tracking-tight">
            Ben's Vision for Somerville
          </h2>
          
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed">
            Somerville is a great city, but together we can make it even better with these key priorities:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {issues.map((issue, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className={`${issue.color} p-6`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <issue.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{issue.title}</CardTitle>
                <CardDescription className="text-sm opacity-90">
                  {issue.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600">{issue.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformIssues;
