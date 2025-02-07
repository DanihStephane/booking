"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Car,
  DollarSign,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ROUTES } from '@/shared/config/routes'

export function DashboardSidebar() {
  const t = useTranslations("admin.sidebar");
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const params = useParams();
  const locale = params.locale as string;
  const navItems = [
    { title: t("dashboard"), href: `/${locale}${ROUTES.DASHBOARD.ROOT}`, icon: LayoutDashboard },
    { title: t("vehicles"), href: `/${locale}${ROUTES.DASHBOARD.VEHICLES}`, icon: Car },
    { title: t("pricing"), href: `/${locale}${ROUTES.DASHBOARD.PRICING}`, icon: DollarSign },
    { title: t("agencies"), href: `/${locale}${ROUTES.DASHBOARD.AGENCIES}`, icon: MapPin },
    { title: t("bookings"), href: `/${locale}${ROUTES.DASHBOARD.BOOKINGS}`, icon: Calendar },
  ];
//${locale}${ROUTES.AUTH.OTP}
  return (
    <div
      className={cn(
        "relative hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40 transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center justify-between border-b px-3">
        {!isCollapsed && (
          <Link href={ROUTES.DASHBOARD.ROOT} className="px-3">
            <span className="font-bold">{t("title")}</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto h-8 w-8"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-1 p-2">
          {navItems.map(({ title, href, icon: Icon }) => (
            <Button
              key={href}
              asChild
              variant={pathname === href ? "secondary" : "ghost"}
              className={cn("w-full justify-start", isCollapsed && "px-2")}
            >
              <Link href={href}>
                <Icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                {!isCollapsed && <span>{title}</span>}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
}
