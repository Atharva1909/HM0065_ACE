"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth, provider } from "@/app/src/firebaseConfig"; 
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      toast({ title: "Account created", description: "Welcome to QuizMatch!" });
      router.push("/dashboard");
    } catch (error: unknown) {
      console.error("Signup Error:", error); // Debugging: Log the error object
    
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
    
      toast({
        title: "Signup failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
     finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleSignup() {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, provider);
      toast({ title: "Signed up with Google", description: "Welcome to QuizMatch!" });
      router.push("/dashboard");
    } catch (error: unknown) {
      console.error("Signup Error:", error); // Debugging: Log the error object
    
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
    
      toast({
        title: "Signup failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-muted/40">
      <div className="w-full max-w-md space-y-6 bg-card p-8 rounded-lg shadow-sm border">
        <h1 className="text-2xl font-semibold text-center">Create an account</h1>
        <Button variant="outline" className="w-full" onClick={handleGoogleSignup} disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign up with Google"}
        </Button>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Full Name" {...form.register("name")} />
          <Input type="email" placeholder="Email" {...form.register("email")} />
          <Input type="password" placeholder="Password" {...form.register("password")} />
          <Input type="password" placeholder="Confirm Password" {...form.register("confirmPassword")} />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Account"}
          </Button>
        </form>
        <p className="text-center text-sm">Already have an account? <Link href="/login" className="text-primary">Sign in</Link></p>
      </div>
    </div>
  );
}