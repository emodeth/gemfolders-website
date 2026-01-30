import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* We enforce light theme variables for this section if needed, but simple utility classes work best for explicit override */}
      <LegalNavbar />
      <main className="container mx-auto max-w-3xl px-6 py-16">
        {children}
      </main>
      <div className="bg-white border-t border-gray-100">
        <LegalFooter />
      </div>
    </div>
  );
}
