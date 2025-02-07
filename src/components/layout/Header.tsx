"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/shared/components/LocaleSwitcher";
import { ROUTES } from "@/shared/config/routes";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-secondary">
      <Link href="/">
        <Image
          src="/logo_hertz_app.png"
          alt="Hertz Logo"
          width={120}
          height={40}
          className="text-primary"
        />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className="hidden md:flex gap-4">
          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <Link href={ROUTES.VEHICLES} className="text-white font-bold">
                {t("navigation.vehicles")}
              </Link>
            </Button>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <Link href={ROUTES.RESERVE} className="text-white font-bold">
                {t("navigation.reserve")}
              </Link>
            </Button>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <Link href={ROUTES.FAQ} className="text-white font-bold">
                {t("navigation.faq")}
              </Link>
            </Button>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Button variant="ghost" asChild>
              <Link href={ROUTES.CONTACT} className="text-white font-bold">
                {t("navigation.contact")}
              </Link>
            </Button>
          </NavigationMenuItem>

          {/* Added Login Button */}
          <NavigationMenuItem>
            <Button variant="outline" asChild>
              <Link href={ROUTES.AUTH.LOGIN} className="text-white font-bold">
                {t("navigation.login")}
              </Link>
            </Button>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <LocaleSwitcher />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
