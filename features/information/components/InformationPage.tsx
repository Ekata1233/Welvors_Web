import InformationHeader from "./InformationHeader";
import InformationContent from "./InformationContent";

import type {
  InformationCategory,
  InformationPageData,
} from "../types/information.types";

interface InformationPageProps {
  data: InformationPageData;
  category: InformationCategory;
  badge: string;
}

export default function InformationPage({
  data,
  category,
  badge,
}: InformationPageProps) {
  return (
    <section className="min-h-screen w-full bg-[#f9f6f2]">

      <InformationHeader
        title={data.title}
        category={category}
        badge={badge}
      />

      <InformationContent
        html={data.content.html}
      />

    </section>
  );
}