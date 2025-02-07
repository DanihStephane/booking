"use client";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  VerifyOtpFormData,
  createVerifyOtpSchema,
} from "@/features/auth/schemas/verifyOtpSchema";
import { useVerifyOtp } from "@/features/auth/hooks/useVerifyOtp";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  ResendOtpError,
  VerifyOtpErrorCode,
} from "@/features/auth/types/authTypes";
import { useResendOtp } from "../hooks/useResendOtp";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import { ROUTES } from "@/shared/config/routes";

export function VerifyOtpForm() {
  const t = useTranslations("auth");
  const {
    isLoading,
    error,
    isAuthenticated,
    user,
    verifyOtp,
    resetAccessToken,
  } = useVerifyOtp();

  const { resendOtp } = useResendOtp();
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const verifyOtpSchema = createVerifyOtpSchema(t);
  const params = useParams();
  const locale = params.locale as string;
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const form = useForm<VerifyOtpFormData>({
    resolver: zodResolver(verifyOtpSchema),
    defaultValues: {
      code: "",
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(t("verifyOtp.success.title"), {
        description: t("verifyOtp.success.message"),
      });
      router.push(`/${locale}${ROUTES.DASHBOARD.ROOT}`);
    }

    if (!isAuthenticated && error) {
      console.log(error);
      console.log("errrorrr");
      if (error.code === "VALIDATION_ERROR") {
        form.setError("code", {
          type: "manual",
          message: t("verifyOtp.errors.invalidCode"),
        });
        toast.error(t("verifyOtp.errors.title"), {
          description: t("verifyOtp.errors.invalidCode"),
        });
      } else {
        toast.error(t("verifyOtp.errors.title"), {
          description: t("verifyOtp.errors.default"),
        });
      }
    }
  }, [isAuthenticated, error, form, t, locale, router, resetAccessToken]);

  const onSubmit = async (data: VerifyOtpFormData) => {
    if (email) {
      await verifyOtp(data, email);
    }
  };

  const handleResendOtp = async () => {
    setIsPending(true);
    try {
      await resendOtp();
      toast.success(t("verifyOtp.resend.success"), {
        description: t("verifyOtp.resend.message"),
      });
    } catch (err) {
      const error = err as ResendOtpError;
      switch (error.code) {
        case "NOT_FOUND":
          toast.error(t("verifyOtp.errors.userNotFound"));
          break;
        case "SERVER_ERROR":
        default:
          toast.error(t("verifyOtp.errors.default"));
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("verifyOtp.code")}</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  render={({ slots }) => (
                    <InputOTPGroup className="gap-2">
                      {slots.map((slot, index) => (
                        <InputOTPSlot key={index} {...slot} />
                      ))}
                    </InputOTPGroup>
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? t("verifyOtp.submitting") : t("verifyOtp.submit")}
        </Button>

        <div className="text-center text-sm">
          <Button
            variant="link"
            className="text-primary"
            onClick={handleResendOtp}
            disabled={isPending}
          >
            {isPending ? t("verifyOtp.resending") : t("verifyOtp.resendCode")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
