"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Loader2, User } from 'lucide-react';
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useSupabase } from "@/components/providers/SupabaseProvider";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

const profileFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { supabase, user } = useSupabase();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: user?.user_metadata?.full_name || "",
      email: user?.email || "",
    },
  });

  async function onSubmit(values: z.infer<typeof profileFormSchema>) {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        email: values.email,
        data: { full_name: values.fullName },
      });
      if (error) throw error;
      toast({
        title: "Success! 🎉",
        description: "Profile updated successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Error",
        description: "Error updating profile",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl font-bold">Your Profile</CardTitle>
          <CardDescription className="mt-2 text-sm sm:text-base">Manage your account details and preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-primary">
                <AvatarImage src={user?.user_metadata?.avatar_url} />
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  <User className="h-12 w-12 sm:h-16 sm:w-16" />
                </AvatarFallback>
              </Avatar>
              {/* <Button 
                size="icon"
                className="absolute bottom-0 right-0 rounded-full"
                variant="secondary"
              >
                <Camera className="h-4 w-4" />
              </Button> */}
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-medium">{user?.user_metadata?.full_name || "Your Name"}</p>
              <p className="text-sm text-muted-foreground mt-1">{user?.email || "your.email@example.com"}</p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Aayan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@ml4e.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-4">
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Save Changes
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}