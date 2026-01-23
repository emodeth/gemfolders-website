import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <Features />
        <Pricing />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Home;