import React from "react";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 font-medium text-sm">
          Last updated: January 2026
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-bold text-black mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            By accessing and using Gem Folders (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">2. Description of Service</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            Gem Folders is a browser extension designed to help users organize their Gemini chats. We provide tools for creating folders, organizing conversations, and searching through chat history.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">3. User Conduct</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            You agree to use the Service only for lawful purposes. You comprise not to disable, damage, or interfere with the Service or servers or networks connected to the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">4. Intellectual Property</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Gem Folders and its licensors.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">5. Termination</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">6. Changes to Terms</h2>
          <p className="text-gray-800 leading-relaxed text-base">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
          </p>
        </section>
      </div>
    </div>
  );
}
