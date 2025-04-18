
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Calendar, Users, ArrowRight, Mail, DollarSign } from "lucide-react";
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
    <section className="relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-campaign-blue to-campaign-blue/95"></div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iLjUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTYwIDBoLTYwdjYwaDYweiIvPjwvZz48L3N2Zz4=')] bg-[length:30px_30px]"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-campaign-orange/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-campaign-teal/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container relative mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm">
            <span className="block h-1.5 w-1.5 rounded-full bg-campaign-teal mr-2"></span>
            Support Ben's Campaign
          </div>
          
          <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif tracking-tight">
            How You Can Get Involved
          </h2>
          
          <p className="mb-12 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Join our movement to make Somerville more affordable, vibrant, and welcoming for everyone.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Donate Card */}
            <div className="group relative rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:bg-white/15 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-campaign-orange/20 rounded-full blur-2xl opacity-80"></div>
              
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-campaign-orange ring-1 ring-white/20">
                <DollarSign className="h-7 w-7" />
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-white">Donate</h3>
              
              <p className="mb-6 text-blue-100 leading-relaxed">
                Support our campaign with a contribution of any size. Every dollar helps us reach more voters and share our vision.
              </p>
              
              <Button 
                className="group relative w-full bg-campaign-orange hover:bg-campaign-orange/90 text-white font-medium py-6 shadow-lg shadow-campaign-orange/20 overflow-hidden transition-all" 
                asChild
              >
                <a href="https://secure.actblue.com/donate/bens-friends" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Contribute Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Volunteer Card */}
            <div className="group relative rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:bg-white/15 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-campaign-teal/20 rounded-full blur-2xl opacity-80"></div>
              
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-campaign-teal ring-1 ring-white/20">
                <Users className="h-7 w-7" />
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-white">Volunteer</h3>
              
              <p className="mb-6 text-blue-100 leading-relaxed">
                Join our team of dedicated volunteers. We need help with canvassing, phone banking, and neighborhood events.
              </p>
              
              <Button 
                className="group relative w-full bg-campaign-teal hover:bg-campaign-teal/90 text-white font-medium py-6 shadow-lg shadow-campaign-teal/20 overflow-hidden transition-all" 
                asChild
              >
                <a 
                  href="https://airtable.com/appmdNjPjTLQP8fTS/pag5GmJTm7FP7ChVC/form" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Sign Up to Help
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Newsletter Card */}
            <div className="group relative rounded-xl bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:bg-white/15 overflow-hidden">
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/20 rounded-full blur-2xl opacity-80"></div>
              
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20">
                <Mail className="h-7 w-7" />
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-white">Stay Updated</h3>
              
              <p className="mb-6 text-blue-100 leading-relaxed">
                Get the latest news, event information, and campaign updates delivered straight to your inbox.
              </p>
              
              <form onSubmit={handleSubmit}>
                {!submitted ? (
                  <div className="space-y-3">
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
                      className="bg-white/10 text-white placeholder:text-blue-200/70 border-white/10 focus-visible:ring-campaign-teal/70 ring-offset-campaign-blue h-12"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-white text-campaign-blue hover:bg-blue-50 font-medium shadow-lg py-3 h-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-md bg-campaign-teal/20 p-5 text-center border border-campaign-teal/20">
                    <p className="text-white font-medium">Thanks for subscribing!</p>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Extra call to action */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="rounded-xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to make a difference?</h3>
              <p className="text-blue-100 mb-6">
                Join us at our upcoming community events to learn more about Ben's vision and how you can help shape the future of Somerville.
              </p>
              <Button 
                className="bg-white text-campaign-blue hover:bg-blue-50 transition-all shadow-lg"
                asChild
              >
                <a href="/kickoff" className="px-6 py-3 font-medium">View Upcoming Events</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
