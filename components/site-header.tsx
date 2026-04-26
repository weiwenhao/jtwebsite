import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "../lib/site";

export function SiteHeader() {
  return (
    <header className="border-b bg-background">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          className="inline-flex items-center gap-3"
          aria-label={`${siteConfig.name} 首页`}
        >
          <BrandLogo />
          <strong className="text-base font-semibold tracking-tight">{siteConfig.name}</strong>
        </Link>
      </div>
    </header>
  );
}
