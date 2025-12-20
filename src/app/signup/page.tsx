"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Chrome, Twitch, ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    setIsLoading(true)
    console.log("[v0] Submitting signup values:", values)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background font-sans">
      {/* Left side: Hero/Social Proof */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-primary/5 relative overflow-hidden border-r border-border/40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -ml-48 -mb-48" />

        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tight">Gamma Clips</span>
          </Link>

          <h1 className="text-5xl font-bold leading-tight mb-6 text-balance">
            Join the elite circle of <span className="text-primary italic">Twitch creators</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mb-8">
            Share your best moments, gain followers, and build your gaming legacy in one place.
          </p>

          <div className="space-y-4">
            {[
              "Unlimited high-quality clip uploads",
              "Direct integration with Twitch and YouTube",
              "Real-time engagement analytics",
              "Exclusive creator community access",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 pt-12 border-t border-border/40">
          <div className="flex -space-x-3 mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                <img src={`/gamer-avatar-.jpg?height=40&width=40&query=gamer-avatar-${i}`} alt="User" />
              </div>
            ))}
            <div className="h-10 w-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-white">
              +10k
            </div>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Trusted by over <span className="text-foreground">10,000+ creators</span> worldwide.
          </p>
        </div>
      </div>

      {/* Right side: Signup Form */}
      <div className="flex items-center justify-center p-6 lg:p-12 relative">
        <div className="absolute top-0 right-0 p-8 lg:p-12">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold hover:underline">
              Log in
            </Link>
          </p>
        </div>

        <div className="w-full max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Create your account</h2>
            <p className="text-muted-foreground">Start your journey with Gamma Clips today.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-11 rounded-xl bg-transparent">
              <Twitch className="h-4 w-4 mr-2 text-[#9146FF]" />
              Twitch
            </Button>
            <Button variant="outline" className="h-11 rounded-xl bg-transparent">
              <Chrome className="h-4 w-4 mr-2" />
              Google
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/40" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground font-medium">Or continue with email</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shroud"
                        className="h-11 rounded-xl bg-muted/30 border-border/40 focus:ring-primary/20"
                        {...field}
                      />
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
                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@example.com"
                        className="h-11 rounded-xl bg-muted/30 border-border/40 focus:ring-primary/20"
                        {...field}
                      />
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
                    <FormLabel className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        className="h-11 rounded-xl bg-muted/30 border-border/40 focus:ring-primary/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full h-12 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Creating account...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Create account
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </Form>

          <p className="text-xs text-center text-muted-foreground px-6 leading-relaxed">
            By clicking create account, you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}