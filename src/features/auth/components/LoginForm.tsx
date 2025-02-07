"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Loader2, Mail, Lock } from "lucide-react";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "../schemas/loginSchema";
import { useTranslations } from "next-intl"; // For translations
import { useLogin } from "../hooks/useLogin";
import { toast } from "sonner";
import { ROUTES } from "@/shared/config/routes";

export function LoginForm() {
  const router = useRouter();
  const { login, isLoading, error, isAuthenticated } = useLogin();
  const t = useTranslations("auth");
  const formSchema = loginSchema(t);
  const params = useParams();
  const locale = params.locale as string;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await login(values);
  }

  useEffect(() => {
    if (isAuthenticated) {
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (error) {
      // Handle error state
      toast.error("login.errors.title", {
        description: t("login.errors.invalidCredentials"),
      });
    }
    if (isAuthenticated) {
      toast.info(t("login.success.title"), {
        description: t("login.success.message"),
      });
      router.push(`/${locale}${ROUTES.DASHBOARD.ROOT}`);
    }
  }, [error, isAuthenticated]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="name@example.com"
                    className="pl-8"
                    {...field}
                    disabled={isLoading}
                  />
                </div>
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Lock className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="password"
                    className="pl-8"
                    {...field}
                    disabled={isLoading}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Sign In
        </Button>
        <div className="text-sm text-center text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href={`/${locale}${ROUTES.AUTH.REGISTER}`}
            className="text-primary underline-offset-4 hover:underline"
          >
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
