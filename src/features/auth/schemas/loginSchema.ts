import { z } from "zod"

export const loginSchema = (t: (key: string) => string) => {
  return z.object({
    email: z.string().email(t("login.validation.invalidEmail")),
    password: z
      .string()
      .min(8, t("login.validation.passwordMinLength"))
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        t("login.validation.passwordRequirements")
      ),
  })
}

export type LoginFormData = z.infer<ReturnType<typeof loginSchema>>;
