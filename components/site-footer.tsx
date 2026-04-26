"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { siteConfig } from "../lib/site";

const supportDialog = {
  title: "联系支持",
  body: [
    `支持邮箱：${siteConfig.supportEmail}`,
    "如遇订阅、恢复购买、账号或使用问题，请直接发送邮件联系我们。",
    "通常会在 1 - 3 个工作日内回复。",
  ],
};

const legalLinks: Array<{
  href: string;
  title: string;
}> = [
  {
    href: "/privacy",
    title: "隐私政策",
  },
  {
    href: "/terms",
    title: "服务条款",
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-foreground">{siteConfig.name}</p>
          <p>多角色沉浸式听书</p>
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <Dialog>
            <DialogTrigger className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              {supportDialog.title}
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{supportDialog.title}</DialogTitle>
                <DialogDescription className="sr-only">{supportDialog.title}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                {supportDialog.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {legalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
            >
                {item.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
