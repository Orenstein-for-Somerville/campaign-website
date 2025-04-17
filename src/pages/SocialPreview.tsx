import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RefreshCw } from "lucide-react";

const SocialPreview = () => {
  const [loading, setLoading] = useState(true);
  const [customTitle, setCustomTitle] = useState("");
  const [customDescription, setCustomDescription] = useState("");
  const [customImage, setCustomImage] = useState("");
  const [siteUrl, setSiteUrl] = useState("");
  const [twitterCard, setTwitterCard] = useState("summary_large_image");

  // Read actual meta tags from the document head
  useEffect(() => {
    try {
      // Set default values first to ensure something is displayed
      setCustomTitle("Ben Orenstein for Somerville | At Large Councilor");
      setCustomDescription("Ben wants to make Somerville a city of more: more housing, more neighbors, more thriving businesses, and more vibrant squares.");
      setCustomImage("/headshot.png");
      
      // Get current window location as the default URL
      const currentUrl = window.location.origin;
      setSiteUrl(currentUrl);
      
      // Get meta tags from the actual document head
      const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
      const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
      const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
      const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content');
      const twitterCardType = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
      
      // Update states based on actual meta tags
      if (ogTitle) setCustomTitle(ogTitle);
      else if (document.title) setCustomTitle(document.title);
      
      if (ogDescription) setCustomDescription(ogDescription);
      else if (document.querySelector('meta[name="description"]')?.getAttribute('content')) {
        setCustomDescription(document.querySelector('meta[name="description"]')?.getAttribute('content') || "");
      }
      
      if (ogImage) setCustomImage(ogImage);
      else setCustomImage(`${currentUrl}/headshot.png`);
      
      if (ogUrl) setSiteUrl(ogUrl);
      
      if (twitterCardType) setTwitterCard(twitterCardType);
    } catch (error) {
      console.error("Error loading meta tags:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Store the original values for reset functionality
  const [originalValues, setOriginalValues] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  // Set original values once loading is complete
  useEffect(() => {
    if (!loading) {
      setOriginalValues({
        title: customTitle,
        description: customDescription,
        image: customImage,
        url: siteUrl,
      });
    }
  }, [loading]);

  // Reset to original values
  const resetDefaults = () => {
    setCustomTitle(originalValues.title);
    setCustomDescription(originalValues.description);
    setCustomImage(originalValues.image);
    setSiteUrl(originalValues.url);
  };

  // Reload meta tags from page head
  const reloadMetaTags = () => {
    setLoading(true);
    window.location.reload();
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Social Media Preview Tool</h1>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={reloadMetaTags}
            disabled={loading}
          >
            {loading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : null}
            Refresh Meta Tags
          </Button>
          <Link to="/">
            <Button variant="outline">Back to Site</Button>
          </Link>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-2">
            <RefreshCw className="h-10 w-10 animate-spin text-primary" />
            <p>Loading meta tags from page head...</p>
          </div>
        </div>
      ) : null}

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Social Media Meta Tags</CardTitle>
              <CardDescription>
                These values were pulled from your site's <code>&lt;head&gt;</code> section. Edit to preview changes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">
                  Title <span className="text-muted-foreground text-xs">({customTitle.length} characters)</span>
                  <div className="text-xs text-muted-foreground mt-1">Source: <code>og:title</code> or <code>document.title</code></div>
                </Label>
                <Input
                  id="title"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-muted-foreground text-xs">({customDescription.length} characters)</span>
                  <div className="text-xs text-muted-foreground mt-1">Source: <code>og:description</code> or <code>meta[description]</code></div>
                </Label>
                <Input
                  id="description"
                  value={customDescription}
                  onChange={(e) => setCustomDescription(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">
                  Image URL
                  <div className="text-xs text-muted-foreground mt-1">Source: <code>og:image</code></div>
                </Label>
                <Input
                  id="image"
                  value={customImage}
                  onChange={(e) => setCustomImage(e.target.value)}
                />
                <div className="border rounded p-2 mt-1">
                  <img src={customImage} alt="Preview" className="h-20 object-contain mx-auto" onError={(e) => {
                    e.currentTarget.src = "/headshot.png";
                  }} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">
                  Site URL
                  <div className="text-xs text-muted-foreground mt-1">Source: <code>og:url</code> or current URL</div>
                </Label>
                <Input
                  id="url"
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                />
              </div>
              <Button onClick={resetDefaults} variant="outline" className="w-full">
                Reset to Original Values
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Meta Tags for Developers</CardTitle>
              <CardDescription>
                Copy and paste these into your HTML head
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
                {`<meta property="og:title" content="${customTitle}" />
<meta property="og:description" content="${customDescription}" />
<meta property="og:image" content="${customImage}" />
<meta property="og:url" content="${siteUrl}" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${customTitle}" />
<meta name="twitter:description" content="${customDescription}" />
<meta name="twitter:image" content="${customImage}" />`}
              </pre>
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="facebook" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="twitter">Twitter</TabsTrigger>
              <TabsTrigger value="slack">Slack</TabsTrigger>
            </TabsList>

            <TabsContent value="facebook" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Facebook Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md overflow-hidden max-w-lg">
                    <div className="bg-[#f0f2f5] p-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
                        <div>
                          <div className="font-semibold text-sm">Username</div>
                          <div className="text-xs text-gray-500">Just now · Public</div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">Check out this website!</p>
                    </div>
                    <div className="border">
                      <div className="bg-gray-200">
                        <img
                          src={customImage}
                          alt="Preview"
                          className="w-full h-64 object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/headshot.png";
                          }}
                        />
                      </div>
                      <div className="bg-white p-3">
                        <div className="text-xs uppercase text-gray-500">
                          {siteUrl ? (() => {
                            try {
                              return new URL(siteUrl).hostname;
                            } catch (e) {
                              return siteUrl;
                            }
                          })() : ''}
                        </div>
                        <div className="font-semibold text-base text-[#1877f2] hover:underline">
                          {customTitle}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {customDescription}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="twitter" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Twitter/X Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md overflow-hidden max-w-lg bg-white">
                    <div className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-blue-400 rounded-full"></div>
                        <div>
                          <div className="font-bold text-sm">Username</div>
                          <div className="text-xs text-gray-500">@username</div>
                        </div>
                      </div>
                      <p className="mt-2 text-sm mb-2">Check out this campaign website!</p>
                      <div className="border rounded-md overflow-hidden">
                        <div className="bg-gray-200">
                          <img
                            src={customImage}
                            alt="Preview"
                            className="w-full h-56 object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/headshot.png";
                            }}
                          />
                        </div>
                        <div className="p-3">
                          <div className="font-bold text-sm">{customTitle}</div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {customDescription}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {siteUrl ? (() => {
                              try {
                                return new URL(siteUrl).hostname;
                              } catch (e) {
                                return siteUrl;
                              }
                            })() : ''}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="slack" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Slack Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md overflow-hidden max-w-lg bg-white">
                    <div className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-purple-600 rounded-sm"></div>
                        <div>
                          <div className="font-bold text-sm">username</div>
                          <div className="text-xs text-gray-500">12:34 PM</div>
                        </div>
                      </div>
                      <p className="text-sm mb-2">Check out this link:</p>
                      <div className="border-l-4 border-l-blue-600 pl-3 py-2">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="sm:w-2/3">
                            <div className="font-bold text-base truncate">{customTitle}</div>
                            <div className="text-sm text-gray-700 line-clamp-2 mb-1">
                              {customDescription}
                            </div>
                            <div className="text-xs text-gray-500">
                              {siteUrl ? (() => {
                                try {
                                  return new URL(siteUrl).hostname;
                                } catch (e) {
                                  return siteUrl;
                                }
                              })() : ''}
                            </div>
                          </div>
                          <div className="sm:w-1/3 h-20 bg-gray-200 rounded">
                            <img
                              src={customImage}
                              alt="Preview"
                              className="w-full h-full object-cover rounded"
                              onError={(e) => {
                                e.currentTarget.src = "/headshot.png";
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Tips for Better Social Sharing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Keep titles under 60 characters for best display across platforms</li>
                <li>Descriptions should be 2-3 sentences and under 160 characters</li>
                <li>Use images with 1200×630 pixels (ratio 1.91:1) for optimal display</li>
                <li>Make sure your image clearly represents your campaign and has good contrast</li>
                <li>Test your links before sharing widely to ensure they display properly</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SocialPreview;