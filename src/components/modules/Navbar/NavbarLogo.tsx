"use client";
import React from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";
import { useGetSettingsQuery } from "@/redux/featured/settings/settingsApi";

const NavbarLogo = () => {
  const { data: settings } = useGetSettingsQuery();
  
  return (
    <div>
      <MobileMenu />
      <Link href="/" className="flex items-center">
        {settings?.logo ? (
          <Image
            src={settings.logo}
            alt="NS eMart Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        ) : (
          <span className="text-xl font-bold">NS eMart</span>
        )}
      </Link>
    </div>
  );
};

export default NavbarLogo;
