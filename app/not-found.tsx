import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-border/70 bg-card/80 p-10 text-center shadow-glow">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">404</p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">页面不存在</h1>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          你访问的页面可能已被移动，或者链接地址不正确。
        </p>
        <Link className={buttonVariants({ size: "lg" })} href="/">
        返回首页
        </Link>
      </div>
    </div>
  );
}
