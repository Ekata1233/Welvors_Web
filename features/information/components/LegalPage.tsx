import { notFound } from "next/navigation";

import InformationPage from "./InformationPage";

import { getInformationPage } from "../services/information.service";

import type {
  LegalPageType,
} from "../constants/information.constants";

interface LegalPageProps {
  pageType: LegalPageType;
  badge: string;
}

export default async function LegalPage({
  pageType,
  badge,
}: LegalPageProps) {
  const data = await getInformationPage(pageType);

  if (!data) {
    notFound();
  }

  return (
    <InformationPage
      data={data}
      category="Legal"
      badge={badge}
    />
  );
}