import { ROUTES } from "@/shared/config/routes";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/forms/ContactForm";

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <main className="container mx-auto px-4">
      <section className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>
        <ContactForm />
      </section>
    </main>
  );
}
