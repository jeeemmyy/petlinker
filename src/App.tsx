import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import Index from "./pages/Index";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SearchSitters from "./pages/SearchSitters";
import SitterProfile from "./pages/SitterProfile";
import Bookings from "./pages/Bookings";
import Messages from "./pages/Messages";

const queryClient = new QueryClient();

// Get Supabase URL and anon key from environment variables
const supabaseUrl = "https://xhvxhroddaalekaqbrau.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhodnhocm9kZGFhbGVrYXFicmF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxMTM5OTksImV4cCI6MjA1MDY4OTk5OX0.mr3FU5B3QL8X9x_rADYqd4e74RlucW6qeCFuSkczJs4";

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const App = () => (
  <SessionContextProvider supabaseClient={supabase}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<SearchSitters />} />
            <Route path="/sitter/:id" element={<SitterProfile />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </SessionContextProvider>
);

export default App;