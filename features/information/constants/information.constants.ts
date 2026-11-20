
export const LEGAL_PAGE_TYPES = {
  TERMS_OF_SERVICE: "TERMS_OF_SERVICE",
  PRIVACY_POLICY: "PRIVACY_POLICY",
  COMMUNITY_GUIDELINES: "COMMUNITY_GUIDELINES",
  DATING_SAFETY_TIPS: "DATING_SAFETY_TIPS",
  CHILD_SAFETY_STANDARDS: "CHILD_SAFETY_STANDARDS",
  AGE_POLICY_18_PLUS: "AGE_POLICY_18_PLUS",
  CONTENT_MODERATION_LAW_ENFORCEMENT:
    "CONTENT_MODERATION_LAW_ENFORCEMENT",
  REFUND_CANCELLATION_POLICY: "REFUND_CANCELLATION_POLICY",
  WALLET_COINS_TERMS: "WALLET_COINS_TERMS",
  FOREVER_LOVE_PROGRAMME_TERMS:
    "FOREVER_LOVE_PROGRAMME_TERMS",
  COOKIE_POLICY: "COOKIE_POLICY",
  DATA_YOUR_RIGHTS: "DATA_YOUR_RIGHTS",
  VERIFICATION_ID_POLICY: "VERIFICATION_ID_POLICY",
  DELETE_ACCOUNT_DATA: "DELETE_ACCOUNT_DATA",
  LICENSES_ACKNOWLEDGEMENTS: "LICENSES_ACKNOWLEDGEMENTS",
  GRIEVANCE_OFFICER_REDRESSAL:
    "GRIEVANCE_OFFICER_REDRESSAL",
} as const;

export type LegalPageType =
  (typeof LEGAL_PAGE_TYPES)[keyof typeof LEGAL_PAGE_TYPES];

export const LEGAL_PAGES = [
  {
    slug: "terms-and-conditions",
    title: "Terms & Conditions",
    pageType: LEGAL_PAGE_TYPES.TERMS_OF_SERVICE,
    badge: "Terms",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    pageType: LEGAL_PAGE_TYPES.PRIVACY_POLICY,
    badge: "Privacy",
  },
  {
    slug: "community-guidelines",
    title: "Community Guidelines",
    pageType: LEGAL_PAGE_TYPES.COMMUNITY_GUIDELINES,
    badge: "Community",
  },
  {
    slug: "dating-safety-tips",
    title: "Dating Safety Tips",
    pageType: LEGAL_PAGE_TYPES.DATING_SAFETY_TIPS,
    badge: "Dating Safety",
  },
  {
    slug: "child-safety-policy",
    title: "Child Safety Policy",
    pageType: LEGAL_PAGE_TYPES.CHILD_SAFETY_STANDARDS,
    badge: "Child Safety",
  },
  {
    slug: "age-policy",
    title: "Age Policy",
    pageType: LEGAL_PAGE_TYPES.AGE_POLICY_18_PLUS,
    badge: "18+",
  },
  {
    slug: "content-moderation",
    title: "Content Moderation & Law Enforcement",
    pageType:
      LEGAL_PAGE_TYPES.CONTENT_MODERATION_LAW_ENFORCEMENT,
    badge: "Moderation",
  },
  {
    slug: "refund-and-cancellation",
    title: "Refund & Cancellation",
    pageType: LEGAL_PAGE_TYPES.REFUND_CANCELLATION_POLICY,
    badge: "Refunds",
  },
  {
    slug: "wallet-coins-terms",
    title: "Wallet & Coins Terms",
    pageType: LEGAL_PAGE_TYPES.WALLET_COINS_TERMS,
    badge: "Wallet",
  },
  {
    slug: "forever-love-programme-terms",
    title: "Forever Love Programme Terms",
    pageType:
      LEGAL_PAGE_TYPES.FOREVER_LOVE_PROGRAMME_TERMS,
    badge: "Forever Love",
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    pageType: LEGAL_PAGE_TYPES.COOKIE_POLICY,
    badge: "Cookies",
  },
  {
    slug: "data-your-rights",
    title: "Data & Your Rights",
    pageType: LEGAL_PAGE_TYPES.DATA_YOUR_RIGHTS,
    badge: "Data Rights",
  },
  {
    slug: "verification-id-policy",
    title: "Verification & ID Policy",
    pageType: LEGAL_PAGE_TYPES.VERIFICATION_ID_POLICY,
    badge: "Verification",
  },
  {
    slug: "delete-account-data",
    title: "Delete Account & Data",
    pageType: LEGAL_PAGE_TYPES.DELETE_ACCOUNT_DATA,
    badge: "Data Deletion",
  },
  {
    slug: "licenses-acknowledgements",
    title: "Licenses & Acknowledgements",
    pageType: LEGAL_PAGE_TYPES.LICENSES_ACKNOWLEDGEMENTS,
    badge: "Licenses",
  },
  {
    slug: "grievance-redressal",
    title: "Grievance Redressal",
    pageType: LEGAL_PAGE_TYPES.GRIEVANCE_OFFICER_REDRESSAL,
    badge: "Grievance",
  },
] as const;
