import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";

const SearchSitters = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-3xl font-bold mb-8">Find a Pet Sitter</h1>
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex gap-2">
            <Input
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-500">No pet sitters found in your area yet.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SearchSitters;