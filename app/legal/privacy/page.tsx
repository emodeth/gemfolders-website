import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 font-medium text-sm">
          Last updated: January 2026
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-black mb-3">1. Introduction</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            Gem Folders (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the browser extension. This Privacy Policy explains how we collect, use, and protect your personal data when you use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">2. Data We Collect</h2>
          <p className="text-gray-800 mb-4 text-base">We collect minimal data to provide our services:</p>
          <ul className="space-y-2 text-gray-800 text-base">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black"></span>
              <span>
                <span className="font-bold text-black">Name:</span> We collect your name to personalize your experience and communicate with you effectively.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black"></span>
              <span>
                <span className="font-bold text-black">Email:</span> We collect your email address to send you important information regarding your account and communication.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black"></span>
              <span>
                <span className="font-bold text-black">Payment Information:</span> We collect payment details to process your orders securely. However, we do not store your payment information on our servers. Payments are processed by trusted third-party payment processors.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">3. How We Use Your Data</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            We use your data to provide and improve our services. This includes personalizing your experience, processing payments, and communicating with you about your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">4. Third-Party Services</h2>
          <p className="text-gray-800 mb-4 text-base">
            We use trusted third-party services for specific functions:
          </p>
          <ul className="space-y-2 text-gray-800 text-base">
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black"></span>
              <span>
                <span className="font-bold text-black">Payment Processing:</span> We use Polar.sh for payment processing. We do not store your credit card details.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black"></span>
              <span>
                <span className="font-bold text-black">Analytics:</span> We may use analytics tools to understand usage patterns, ensuring anonymity where possible.
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">5. Updates to the Privacy Policy</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">6. Contact Us</h2>
          <div className="text-gray-800 leading-relaxed space-y-1 text-base">
            <p>
              If you have any questions about this Privacy Policy, please contact us.
            </p>
            <p>
              Email: emirhankeskindev@gmail.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
