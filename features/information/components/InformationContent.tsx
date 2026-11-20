
import "server-only";

import sanitizeHtml from "sanitize-html";

interface InformationContentProps {
  html: string;
}

/* =====================================================
   CACHE HTML SANITIZATION
===================================================== */

async function getSanitizedHtml(
  html: string,
): Promise<string> {
  "use cache";

  return sanitizeHtml(html, {
    allowedTags: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "br", "strong", "b",
      "em", "i", "u", "s",
      "ul", "ol", "li",
      "a", "blockquote", "span", "div",
      "hr", "table", "thead", "tbody",
      "tr", "th", "td",
    ],

    allowedAttributes: {
      a: ["href", "title"],
      span: ["style"],
      blockquote: ["class"],
      th: ["colspan", "rowspan"],
      td: ["colspan", "rowspan"],
    },

    allowedClasses: {
      blockquote: ["legal-callout"],
    },

    allowedStyles: {
      span: {
        color: [/^#[0-9a-fA-F]{3,8}$/],
      },
    },

    allowedSchemes: [
      "http",
      "https",
      "mailto",
      "tel",
    ],

    allowProtocolRelative: false,
  });
}

/* =====================================================
   INFORMATION CONTENT COMPONENT
===================================================== */

export default async function InformationContent({
  html,
}: InformationContentProps) {
  const safeHtml = await getSanitizedHtml(html);

  
return (
  <article className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-7 sm:px-8 sm:pb-16 lg:px-10 lg:pb-20">
    <div
      className="min-w-0 break-words text-[14px] leading-[1.85] text-[#6b625d] sm:text-[15px] lg:text-[16px] [&_p]:mb-5 [&_h1]:mb-5 [&_h1]:mt-9 [&_h1]:font-serif [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:text-[#d20853] [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#d20853] sm:[&_h2]:text-[25px] [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[#d20853] [&_strong]:font-semibold [&_strong]:text-[#252322] [&_b]:text-[#252322] [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-3 [&_li::marker]:text-[#d20853] [&_a]:text-[#d20853] [&_a]:underline [&_blockquote]:my-7 [&_blockquote]:rounded-r-xl [&_blockquote]:border-l-4 [&_blockquote]:border-[#d20853] [&_blockquote]:bg-[#fcebf0] [&_blockquote]:p-5 [&_table]:mb-6 [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_th]:border [&_th]:border-[#e5dcd6] [&_th]:bg-[#f2eae5] [&_th]:p-3 [&_td]:border [&_td]:border-[#e5dcd6] [&_td]:p-3 [&_hr]:my-8 [&_hr]:border-[#e5dcd6]"
      dangerouslySetInnerHTML={{
        __html: safeHtml,
      }}
    />
  </article>
);

}
