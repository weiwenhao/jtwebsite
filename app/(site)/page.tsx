import { ArrowUpRight, Headphones, Mic2, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "../../lib/site";

export default function HomePage() {
  return (
    <div className="container flex min-h-[calc(100vh-9rem)] items-center py-12 md:py-20">
      <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="flex flex-col justify-center gap-10">
          <div className="space-y-5">
            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              静静听书-多角色沉浸式听书
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-muted-foreground">
              让听书不再单调
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Apple Store
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.androidDownloadUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Android
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <Card className="self-center">
          <CardContent className="space-y-6 p-6 sm:p-8">
            <div className="flex items-center justify-between border-b pb-5">
              <div>
                <p className="font-medium">静静听书</p>
                <p className="text-sm text-muted-foreground">正在播放</p>
              </div>
              <Headphones className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center rounded-lg border px-4 py-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm leading-6">40+离线大模型语音、没信号没流量也能听</span>
                </div>
              </div>
              <div className="flex items-center rounded-lg border px-4 py-4">
                <div className="flex items-start gap-3">
                  <Mic2 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm leading-6">实时角色分析、自定义角色语音</span>
                </div>
              </div>
              <div className="flex items-center rounded-lg border px-4 py-4">
                <div className="flex items-start gap-3">
                  <Headphones className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="text-sm leading-6">真正的沉浸式听书体验</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
