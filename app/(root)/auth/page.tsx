"use client";

import { useState } from "react";
import { LoginForm } from "@/components/auth/loginForm";
import { SignupForm } from "@/components/auth/signupForm";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">Get started</h1>
          {!isLogin && (
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-primary text-indigo-600 hover:underline font-bold"
              >
                Sign in
              </button>
            </p>
          )}
          {isLogin && (
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setIsLogin(false)}
                className="text-primary text-indigo-600 hover:underline font-bold"
              >
                Sign up
              </button>
            </p>
          )}
        </div>

        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}
