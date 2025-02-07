import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { LoginForm } from "@/features/auth/components/LoginForm"
  import { useTranslations } from "next-intl"
  
  export default function LoginPage() {
    return (
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Login</CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to sign in
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    )
  }