import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create Your Profile",
      description: "Sign up and create your profile as a pet owner or pet sitter. Add your details and preferences.",
    },
    {
      title: "Find the Perfect Match",
      description: "Browse through verified pet sitters in your area or receive booking requests if you're a sitter.",
    },
    {
      title: "Book and Connect",
      description: "Schedule meet & greets, make secure payments, and enjoy peace of mind with our trusted platform.",
    },
    {
      title: "Share Your Experience",
      description: "After the service, leave a review to help other pet owners make informed decisions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            How <span className="text-primary">PetPal</span> Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary mr-2" />
                  <span className="text-sm text-gray-500">Step {index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;