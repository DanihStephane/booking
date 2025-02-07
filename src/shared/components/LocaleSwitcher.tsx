"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          className="bg-[#FFB700] hover:bg-[#FFD000] text-black h-10 px-4 py-2"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="font-medium">{locale.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[120px] border-[#FFB700]"
      >
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleChange(loc)}
            className={`cursor-pointer hover:bg-[#FFD000] hover:text-black ${
              locale === loc ? "bg-[#FFB700] text-black" : ""
            }`}
          >
            <span className="flex items-center">
              {loc === "fr" ? "Français" : "English"}
              {locale === loc && (
                <span className="ml-2 h-2 w-2 rounded-full bg-black" />
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
