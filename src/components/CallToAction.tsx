
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Calendar, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to our Netlify function instead of directly to Airtable
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email
        })
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      setSubmitted(true);
      setEmail("");

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "There was a problem subscribing you. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-campaign-blue text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-serif">
            Join Our Campaign
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            If you're excited about Ben's platform, we'd love to have you support our campaign!
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
              <Button className="w-full bg-campaign-orange hover:bg-campaign-orange/90 text-white" asChild>
                <a href="https://secure.actblue.com/donate/bens-friends" target="_blank" rel="noopener noreferrer">
                  Contribute
                </a>
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
              <Button className="w-full bg-campaign-teal hover:bg-campaign-teal/90 text-white" asChild>
                <a href="https://airtable.com/appmdNjPjTLQP8fTS/pag5GmJTm7FP7ChVC/form" target="_blank" rel="noopener noreferrer">Sign Up</a>
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
                    <Button
                      type="submit"
                      className="w-full bg-white text-campaign-blue hover:bg-blue-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
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
