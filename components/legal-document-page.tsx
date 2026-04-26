import type { legal_document_section } from "../legalDocuments";

type LegalDocumentPageProps = {
  englishTitle: string;
  sections: legal_document_section[];
  title: string;
  updatedAt: string;
};

export function LegalDocumentPage({
  englishTitle,
  sections,
  title,
  updatedAt,
}: LegalDocumentPageProps) {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <section className="px-6 py-6 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {englishTitle}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">更新日期：{updatedAt}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
            本文档适用于“静静听书”移动应用。若你继续使用本应用，即表示你理解并接受下述说明。
          </p>
        </section>

        <section className="px-6 py-8 sm:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <article key={section.heading}>
                <h2 className="text-lg font-semibold tracking-tight">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-7 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
