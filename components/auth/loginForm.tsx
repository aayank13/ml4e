import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { OAuthButtons } from "./oAuthButton";
import { ForgotPasswordForm } from "./ForgotPasswordForm";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const supabase = createClient();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword(values);

      if (error) {
        switch (error.message) {
          case "Invalid login credentials":
            toast({
              variant: "destructive",
              title: "Uh oh! Invalid credentials",
              description: "Invalid email or password",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
            break;
          case "Email not confirmed":
            toast({
              variant: "destructive",
              title: "Uh oh! Verify your email",
              description: "Please verify your email address",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
            break;
          default:
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: `${(error as Error).message}`,
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        }
        return;
      }

      if (data?.user) {
        toast({
          description: "Successfully signed in! Redirecting...",
        });
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${(error as Error).message}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (showForgotPassword) {
    return <ForgotPasswordForm onBack={() => setShowForgotPassword(false)} />;
  }

  return (
    <div className="w-full space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel>Password</FormLabel>
                  <Button
                    variant="link"
                    className="px-0 font-normal text-indigo-600 hover:text-indigo-800"
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    Forgot password?
                  </Button>
                </div>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-800"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <OAuthButtons />
    </div>
  );
}
