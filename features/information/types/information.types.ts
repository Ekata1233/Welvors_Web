export interface InformationPageData {
  id: string;
  pageType: string;
  title: string;
  version: string;

  content: {
    html: string;
    blocks: unknown[];
    schemaVersion: number;
  };

  schemaVersion: number;
  effectiveFrom: string | null;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface InformationPageResponse {
  success: boolean;
  data: InformationPageData;
  message?: string;
}

export type InformationCategory = "Legal" | "Company";