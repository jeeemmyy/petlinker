import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"owner" | "sitter">("owner");
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            user_type: userType,
          },
        },
      });

      if (error) throw error;

      if (data) {
        // Create profile in profiles table
        const { error: profileError } = await supabase
          .from("profiles")
          .insert([
            {
              id: data.user?.id,
              role: userType,
              email: email,
            },
          ]);

        if (profileError) throw profileError;

        toast.success("Account created successfully! Please check your email to verify your account.");
        navigate("/auth/signin");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignUp}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="flex gap-4">
              <Button
                type="button"
                variant={userType === "owner" ? "default" : "outline"}
                className="w-1/2"
                onClick={() => setUserType("owner")}
              >
                Pet Owner
              </Button>
              <Button
                type="button"
                variant={userType === "sitter" ? "default" : "outline"}
                className="w-1/2"
                onClick={() => setUserType("sitter")}
              >
                Pet Sitter
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;