const fallbackSiteUrl = "https://book.nature-lang.cn";
const appStoreUrl =
  "https://apps.apple.com/cn/app/%E9%9D%99%E5%90%AC-%E5%A4%9A%E8%A7%92%E8%89%B2%E6%B2%89%E6%B5%B8%E5%BC%8F%E5%90%AC%E4%B9%A6/id6760906009";
const androidDownloadUrl = "https://www.pgyer.com/jingting";

function normalizeUrl(value: string | undefined, fallback: string) {
  const trimmed = String(value ?? "").trim();
  if (!trimmed) {
    return fallback;
  }

  return trimmed.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "静静听书",
  shortName: "静静听书",
  description: "多角色分析沉浸式听书，内置 40+ 免费语音，无限畅听。",
  siteUrl: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL, fallbackSiteUrl),
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim() || "wwhacker@qq.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "wwhacker@qq.com",
  appStoreUrl,
  androidDownloadUrl,
  companyName: "静静听书",
};

export function absoluteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
}
