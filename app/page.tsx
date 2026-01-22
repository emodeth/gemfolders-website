import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <Features />
        <Pricing />
      </main>
    </div>
  );
};

export default Home;