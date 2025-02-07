"use client";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  RegisterFormData,
  createRegisterSchema,
} from "../schemas/registerSchema";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { ROUTES } from "@/shared/config/routes";
import { RegisterErrorCode } from "../types/authTypes";
import { registerService } from "../services/registerService";

export function RegisterForm() {
  const t = useTranslations("auth");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const registerSchema = createRegisterSchema(t);

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      const result = await registerService.register(data);

      if (!result.success) {
        // Handle specific error cases
        switch (result.error?.code) {
          case RegisterErrorCode.EMAIL_EXISTS:
            toast.error(t("register.errors.emailExists"));
            break;
          case RegisterErrorCode.INVALID_EMAIL:
            toast.error(t("register.errors.invalidEmail"));
            break;
          case RegisterErrorCode.SERVER_ERROR:
          default:
            toast.error(t("register.errors.serverError"));
        }
        return;
      }
      // Success case
      toast.success(t("register.success"));

      // Redirect to OTP verification page
      router.push(`/${locale}${ROUTES.AUTH.OTP_VERIFICATION}?email=${encodeURIComponent(result.data.email)}`);
    } catch (error) {
      toast.error(t("register.errors.unexpected"));
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("register.name")}</FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>{t("register.email")}</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
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
              <FormLabel>{t("register.password")}</FormLabel>
              <FormControl>
                <div className="relative flex items-center">
                  <Input
                    type={showPassword ? "text" : "password"}
                    {...field}
                    className="pr-10"
                  />
                  <div
                    className="absolute right-3 cursor-pointer hover:text-yellow-500 transition-colors"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("register.confirmPassword")}</FormLabel>
              <FormControl>
                <div className="relative flex items-center">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    {...field}
                    className="pr-10"
                  />
                  <div
                    className="absolute right-3 cursor-pointer hover:text-yellow-500 transition-colors"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? t("register.submitting") : t("register.submit")}
        </Button>
      </form>
    </Form>
  );
}
