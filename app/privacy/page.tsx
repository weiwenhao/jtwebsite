import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal-document-page";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { LEGAL_UPDATED_AT, PRIVACY_POLICY_SECTIONS } from "@/legalDocuments";

export const metadata: Metadata = {
  title: "隐私政策",
  description: `${siteConfig.name} 隐私政策，说明账号、订阅、反馈和本地阅读数据的处理方式。`,
  alternates: {
    canonical: absoluteUrl("/privacy"),
  },
};

export default function PrivacyPage() {
  return (
    <LegalDocumentPage
      englishTitle="Privacy Policy"
      sections={PRIVACY_POLICY_SECTIONS}
      title="隐私政策"
      updatedAt={LEGAL_UPDATED_AT}
    />
  );
}
