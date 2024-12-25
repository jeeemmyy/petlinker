import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const SitterProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Pet Sitter Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-500">Sitter ID: {id}</p>
            <Button>Book Now</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SitterProfile;