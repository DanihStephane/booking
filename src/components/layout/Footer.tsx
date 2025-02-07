"use client"
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Globe, Facebook, Twitter, Youtube, MessageCircleMore } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { H3, Paragraph } from "@/components/ui/typography";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* First Column */}
          <div className="md:col-span-5">
            <Image
              src="/logo_hertz_app.png"
              alt="Hertz Logo"
              width={120}
              height={40}
              className="mb-4"
            />
            <Paragraph className="mb-6 text-white">
              Découvrez Madagascar avec nos locations de véhicule
            </Paragraph>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-md">
                <Phone className="text-primary h-5 w-5" />
                <span>+261 34 05 811 13</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-md">
                <Mail className="text-primary h-5 w-5" />
                <span>hertz-madagascar@madauto.mg</span>
              </div>

              <div className="flex items-center gap-3 bg-gray-900 p-3 rounded-md">
                <Globe className="text-primary h-5 w-5" />
                <span>www.hertz.mg</span>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="md:col-span-3">
            <H3 className="text-primary mb-4">Liens utiles</H3>
            <div className="flex flex-col space-y-3">
              <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
              <Link href="/conditions" className="hover:text-primary transition-colors">Conditions générales</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
              <Link href="/agencies" className="hover:text-primary transition-colors">Nos agences</Link>
              <Link href="/about" className="hover:text-primary transition-colors">A propos de nous</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contactez-nous</Link>
            </div>
          </div>

          {/* Third Column */}
          <div className="md:col-span-4">
            <H3 className="text-primary mb-4">Suivez-nous</H3>
            <div className="flex gap-4 mb-8">
              <Link href="#" className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors">
                <MessageCircleMore className="h-5 w-5" />
              </Link>
            </div>

            <H3 className="text-primary mb-4">Resté informé</H3>
            <div className="flex gap-2">
              <Input 
                placeholder="Recevez nos bons plans par email"
                className="bg-gray-900 border-gray-800"
              />
              <Button>
                S'inscrire
              </Button>
            </div>

            <H3 className="text-primary mt-8 mb-4">Partenaires</H3>
            <Image
              src="/madauto.jpg"
              alt="MadAuto Logo"
              width={100}
              height={40}
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
