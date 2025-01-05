"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export function OAuthButtons() {
  const handleOAuthSignIn = async (provider: 'github' | 'google') => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) throw error;
    } catch (error) {
      toast.error('Error signing in with OAuth');
    }
  };

  return (
    <div className="grid gap-2">
      <Button 
        variant="outline" 
        onClick={() => handleOAuthSignIn('github')}
        className="w-full"
      >
        <Github className="mr-2 h-4 w-4" />
        Continue with GitHub
      </Button>
    </div>
  );
}