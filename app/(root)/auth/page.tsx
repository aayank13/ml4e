"use client";

import { useState } from 'react';
import { LoginForm } from '@/components/auth/loginForm';
import { SignupForm } from '@/components/auth/signupForm';
import { Button } from '@/components/ui/button';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="bg-card p-8 rounded-lg shadow-lg w-full max-w-md">
        {isLogin ? <LoginForm /> : <SignupForm />}
        
        <div className="mt-6 text-center">
          <Button
            variant="link"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm"
          >
            {isLogin 
              ? "Don't have an account? Sign up" 
              : "Already have an account? Sign in"}
          </Button>
        </div>
      </div>
    </div>
  );
}