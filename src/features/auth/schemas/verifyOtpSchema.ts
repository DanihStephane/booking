import { z } from "zod";

export const createVerifyOtpSchema = (t: any) =>
  z.object({
    code: z
      .string()
      .min(6, t("verifyOtp.validation.required"))
      .max(6, t("verifyOtp.validation.maxLength"))
      .regex(/^[0-9]+$/, t("verifyOtp.validation.numbersOnly"))
      .transform((val) => val.trim()),
  });

export type VerifyOtpFormData = z.infer<ReturnType<typeof createVerifyOtpSchema>>;
