import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { AlertCircle, Home, Wrench, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse our waterproofing services or contact us for help."
      />

      <div className="min-h-[70vh] w-full flex items-center justify-center bg-background py-12">
        <Card className="w-full max-w-lg mx-4 border-border">
          <CardContent className="pt-8 pb-8 px-6">
            {/* Error Icon and Title */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <AlertCircle className="h-10 w-10 text-destructive" />
              </div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                404 - Page Not Found
              </h1>
              <p className="text-muted-foreground">
                Oops! The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Helpful Links */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Here are some helpful links to get you back on track:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link href="/">
                  <Button variant="outline" className="w-full justify-start" data-testid="button-404-home">
                    <Home className="w-4 h-4 mr-2" />
                    Go to Home
                  </Button>
                </Link>

                <Link href="/services">
                  <Button variant="outline" className="w-full justify-start" data-testid="button-404-services">
                    <Wrench className="w-4 h-4 mr-2" />
                    Our Services
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button variant="outline" className="w-full justify-start" data-testid="button-404-contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => window.history.back()}
                  data-testid="button-404-back"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Need help with waterproofing or building repairs?
              </p>
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90" data-testid="button-404-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  Get a Free Inspection
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
