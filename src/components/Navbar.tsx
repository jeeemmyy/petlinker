import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <PawPrint className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">PetPal</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">How it Works</Button>
            <Button variant="ghost">Find a Sitter</Button>
            <Button variant="ghost">Become a Sitter</Button>
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
          <Button variant="ghost" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;