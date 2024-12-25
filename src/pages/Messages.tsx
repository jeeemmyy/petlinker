import { useEffect, useState } from "react";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Database } from "@/lib/database.types";

type Message = Database["public"]["Tables"]["messages"]["Row"];

const Messages = () => {
  const session = useSession();
  const supabase = useSupabaseClient<Database>();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const getMessages = async () => {
      if (!session?.user?.id) return;

      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(`sender_id.eq.${session.user.id},receiver_id.eq.${session.user.id}`);

      if (error) {
        console.error("Error fetching messages:", error);
        return;
      }

      setMessages(data || []);
    };

    getMessages();
  }, [session, supabase]);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 pt-20">
          <h1 className="text-3xl font-bold mb-8">Messages</h1>
          {messages.length === 0 ? (
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500">No messages found.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {messages.map((message) => (
                <Card key={message.id}>
                  <CardHeader>
                    <CardTitle>Message #{message.id}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{message.content}</p>
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

export default Messages;