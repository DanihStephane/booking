import { useTranslations } from 'next-intl'
import { RegisterForm } from "@/features/auth/components/RegisterForm"

export default function RegisterPage() {
  const t = useTranslations('auth')
  
  return (
    <div className="container mx-auto max-w-md py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        {t('register.title')}
      </h1>
      <RegisterForm />
    </div>
  )
}
