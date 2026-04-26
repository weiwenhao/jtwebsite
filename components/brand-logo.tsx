import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <div
      className={cn(
        "relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className,
      )}
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt=""
        fill
        sizes="56px"
        className="object-cover"
        priority
      />
    </div>
  );
}
