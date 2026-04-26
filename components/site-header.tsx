import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "gap-2")}
          >
            Apple Store
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.androidDownloadUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "secondary", size: "sm" }), "gap-2")}
          >
            Android
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
