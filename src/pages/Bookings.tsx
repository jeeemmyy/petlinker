import { useEffect, useState } from "react";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Database } from "@/lib/database.types";

type Booking = Database["public"]["Tables"]["bookings"]["Row"];

const Bookings = () => {
  const session = useSession();
  const supabase = useSupabaseClient<Database>();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const getBookings = async () => {
      if (!session?.user?.id) return;

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_id", session.user.id);

      if (error) {
        console.error("Error fetching bookings:", error);
        return;
      }

      setBookings(data || []);
    };

    getBookings();
  }, [session, supabase]);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 pt-20">
          <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
          {bookings.length === 0 ? (
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500">No bookings found.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardHeader>
                    <CardTitle>Booking #{booking.id}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Status: {booking.status}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Bookings;