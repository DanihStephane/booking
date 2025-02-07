import * as z from "zod"

export const createRegisterSchema = (t: (key: string) => string) => {
    return z.object({
    name: z.string().min(2, t("register.validation.nameMinLength")),
    email: z.string().email(t("register.validation.invalidEmail")),
    password: z
      .string()
      .min(8, t("register.validation.passwordMinLength"))
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        t("register.validation.passwordRequirements")
      ),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: t("register.validation.passwordsMatch"),
    path: ["confirmPassword"],
  })
}

export type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>
