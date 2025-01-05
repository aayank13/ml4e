"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"

export function OAuthButtons() {
  const supabase = createClient();
  const { toast } = useToast();

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
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Error signing in with OAuth",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
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