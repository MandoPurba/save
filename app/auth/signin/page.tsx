"use client"

import { SignInForm } from "@/components/login-form"
import { AuthService } from "@/lib/supabase/services/auth";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleWithEmailSignIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);
      await AuthService.signInWithEmail(email, password);
      // Redirect on success
      router.push("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Email login failed');
      
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignIn = async (provider: 'github' | 'google' | 'apple') => {
    try {
      setIsLoading(true);
      setError(null);

      await AuthService.signInWithOAuth(provider);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'OAuth login failed');
      setIsLoading(false);
    }
  }
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignInForm
          onEmailLogin={handleWithEmailSignIn}
          onOAuthLogin={handleOAuthSignIn}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  )
}
