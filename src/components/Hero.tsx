import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-16 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find the Perfect
              <span className="text-primary"> Pet Sitter</span> Near You
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Connect with trusted pet sitters in your neighborhood who will treat your pets like family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg">
                Find a Sitter
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Become a Sitter
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto animate-float">
              <img
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
                alt="Happy pet with sitter"
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;