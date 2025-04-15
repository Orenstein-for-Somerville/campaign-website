
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Calendar, Users } from "lucide-react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would connect to a mailing list service
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-campaign-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-serif">
            Join Our Campaign
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            There are many ways to help create the Somerville we all deserve.
            Join our campaign today and make a difference in our community.
          </p>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 flex justify-center">
                <Heart className="h-10 w-10 text-campaign-orange" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Donate</h3>
              <p className="mb-4 text-blue-100">
                Support our campaign with a contribution of any size. Every dollar helps us reach more voters.
              </p>
              <Button className="w-full bg-campaign-orange hover:bg-campaign-orange/90 text-white">
                Contribute
              </Button>
            </div>
            
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 flex justify-center">
                <Users className="h-10 w-10 text-campaign-teal" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Volunteer</h3>
              <p className="mb-4 text-blue-100">
                Join our team of dedicated volunteers. We need help with canvassing, phone banking, and events.
              </p>
              <Button className="w-full bg-campaign-teal hover:bg-campaign-teal/90 text-white">
                Sign Up
              </Button>
            </div>
            
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-transform hover:scale-105">
              <div className="mb-4 flex justify-center">
                <Calendar className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Stay Updated</h3>
              <p className="mb-4 text-blue-100">
                Get the latest news, event information, and campaign updates delivered to your inbox.
              </p>
              <form onSubmit={handleSubmit}>
                {!submitted ? (
                  <div className="space-y-2">
                    <Label htmlFor="email" className="sr-only">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/20 text-white placeholder:text-blue-200 border-white/20 focus-visible:ring-campaign-teal"
                    />
                    <Button type="submit" className="w-full bg-white text-campaign-blue hover:bg-blue-50">
                      Subscribe
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-md bg-campaign-teal/20 p-3 text-center">
                    <p className="text-white">Thanks for subscribing!</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
