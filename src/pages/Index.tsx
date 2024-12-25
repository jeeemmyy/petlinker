import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;