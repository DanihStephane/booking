"use client";
import { VerifyOtpForm } from "@/features/auth/components/VerifyOtpForm";

export default function VerifyOtpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <VerifyOtpForm />
      </div>
    </div>
  );
}
