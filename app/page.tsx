import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">

        <div className="flex h-screen items-center justify-center">
          <h1 className="text-4xl font-bold text-foreground">Welcome to GemFolders</h1>
        </div>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-4xl font-bold text-foreground">Welcome to GemFolders</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;