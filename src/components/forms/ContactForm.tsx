"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    
    try {
      // Add your API call here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      

      
      event.currentTarget.reset();
    } catch (error) {
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{t("fields.name")}</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder={t("placeholders.name")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("fields.email")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder={t("placeholders.email")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t("fields.phone")}</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder={t("placeholders.phone")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">{t("fields.subject")}</Label>
        <Input
          id="subject"
          name="subject"
          required
          placeholder={t("placeholders.subject")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("fields.message")}</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t("placeholders.message")}
          className="min-h-[150px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="attachment">{t("fields.attachment")}</Label>
        <Input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t("submitting") : t("submit")}
      </Button>
    </form>
  );
}
