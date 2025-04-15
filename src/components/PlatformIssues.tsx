
import React from "react";
import { Building, MapPin, Bike } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PlatformIssues = () => {
  const issues = [
    {
      title: "Housing Shortage",
      description: "Creating affordable and accessible housing options for all Somerville residents.",
      details: "I believe everyone deserves a place to call home in our community. I will work to increase housing supply through smart development, preserve existing affordable housing, and implement tenant protections to prevent displacement.",
      icon: Building,
      color: "bg-blue-50 text-campaign-blue",
    },
    {
      title: "Street Infrastructure",
      description: "Making our streets safer for cyclists, pedestrians, and all forms of transit.",
      details: "I will advocate for protected bike lanes, wider sidewalks, traffic calming measures, and better public transportation options. Our streets should be safe and accessible for everyone, regardless of how they choose to travel.",
      icon: Bike,
      color: "bg-teal-50 text-campaign-teal",
    },
    {
      title: "Public Squares",
      description: "Revitalizing Davis, Magoun, Inman, and Ball Squares into vibrant community spaces.",
      details: "Our public squares should be the heart of our neighborhoods. I will work to enhance these spaces with better seating, green infrastructure, community events, and support for local businesses that make these areas thrive.",
      icon: MapPin,
      color: "bg-amber-50 text-campaign-orange",
    },
  ];

  return (
    <section id="issues" className="py-24 bg-campaign-lightgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-campaign-blue md:text-4xl font-serif">
            Key Platform Issues
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            I'm focused on addressing the most pressing needs of our community, with practical solutions that can make a real difference in how we live, work, and play in Somerville.
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
