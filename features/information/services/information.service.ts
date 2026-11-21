
import "server-only";

import { cacheLife } from "next/cache";
import { getApiBaseUrl } from "@/lib/api";

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

  try {
    const apiUrl = `${getApiBaseUrl()}/legal/legal-pages/${encodeURIComponent(pageType)}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    // Legal page not found
    if (response.status === 404) {
      return null;
    }

    // Handle API errors
    if (!response.ok) {
      console.error(
        `Failed to fetch legal page ${pageType}: ${response.status}`,
      );
      return null;
    }

    const result =
      (await response.json()) as InformationPageResponse;

    // Validate response
    if (
      !result.success ||
      !result.data ||
      typeof result.data.content?.html !== "string"
    ) {
      console.error(
        `Invalid API response for ${pageType}`,
      );
      return null;
    }

    return result.data;
  } catch (error) {
    console.error(
      `Error fetching legal page ${pageType}:`,
      error,
    );

    return null;
  }
}
