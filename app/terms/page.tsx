import type { Metadata } from "next";
import { LegalDocumentPage } from "@/components/legal-document-page";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { LEGAL_UPDATED_AT, TERMS_OF_SERVICE_SECTIONS } from "../../../shared/legalDocuments";

export const metadata: Metadata = {
  title: "服务条款",
  description: `${siteConfig.name} 服务条款，说明应用使用规则、订阅条款和相关责任边界。`,
  alternates: {
    canonical: absoluteUrl("/terms"),
  },
};

export default function TermsPage() {
  return (
    <LegalDocumentPage
      englishTitle="Terms of Service"
      sections={TERMS_OF_SERVICE_SECTIONS}
      title="服务条款"
      updatedAt={LEGAL_UPDATED_AT}
    />
  );
}
