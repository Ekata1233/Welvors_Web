import "server-only";

import { cacheLife } from "next/cache";

import type {
  InformationPageData,
  InformationPageResponse,
} from "../types/information.types";

import type {
  LegalPageType,
} from "../constants/information.constants";

export async function getInformationPage(
  pageType: LegalPageType,
): Promise<InformationPageData | null> {
  "use cache";

  cacheLife({
    stale: 60,
    revalidate: 60,
    expire: 3600,
  });

  const baseUrl = process.env.API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API_BASE_URL is not configured");
  }

  const response = await fetch(
    `${baseUrl.replace(/\/$/, "")}/legal/legal-pages/${encodeURIComponent(pageType)}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(
      `Failed to fetch page: ${response.status}`,
    );
  }

  const result =
    (await response.json()) as InformationPageResponse;

  if (
    !result.success ||
    !result.data ||
    typeof result.data.content?.html !== "string"
  ) {
    throw new Error("Invalid API response");
  }

  return result.data;
}