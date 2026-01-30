"use client";

import React from "react";
import { useParams } from "next/navigation";

import { CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";


const SuccessContent = () => {
  const params = useParams();
  const checkoutId = params.checkout_id as string;
  const [countdown, setCountdown] = React.useState(3);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      window.location.href = "https://gemini.google.com/";
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="rounded-full bg-green-100 p-6 dark:bg-green-900/30">
        <CheckCircle2 className="h-16 w-16 text-green-600 dark:text-green-500" />
      </div>

      <div className="space-y-4 max-w-md">
        <h1 className="text-4xl font-bold tracking-tight">Payment Successful!</h1>
        <p className="text-muted-foreground text-lg">
          Thank you for your purchase. Your access has been confirmed.
        </p>
        <p className="text-sm font-medium text-blue-600 animate-pulse">
          Redirecting to Gemini in {countdown} seconds...
        </p>

        {checkoutId && (
          <div className="pt-2">
            <p className="text-xs text-muted-foreground bg-muted py-2 px-4 rounded-full inline-block font-mono">
              Order ID: <span className="text-foreground">{checkoutId}</span>
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button as="a" href="/" variant="outline" size="lg">
          Return to Website
        </Button>
        <Button as="a" href="https://gemini.google.com/" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-transparent gap-2">
          Open Gemini Now
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default function SuccessPage() {
  return (
    <main className="flex flex-col items-center w-full px-6">
      <SuccessContent />
    </main>
  );
}
