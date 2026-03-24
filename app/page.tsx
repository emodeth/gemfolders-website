import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import ClosingCtaFooter from "@/components/ClosingCtaFooter";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <Features />
        <Pricing />
        <SocialProofSection />
        <FAQSection />
      </main>
      <ClosingCtaFooter />
    </div>
  );
};

export default Home;
