// Central site configuration — single source of truth for contact + social details.
// Override the email in Vercel with the NEXT_PUBLIC_COMPANY_EMAIL environment variable.
// NOTE: the default email below was taken from Dimension-PH's own marketing banner.
//       Confirm it is correct, or change it here / set the env var.
export const COMPANY_EMAIL =
    process.env.NEXT_PUBLIC_COMPANY_EMAIL && process.env.NEXT_PUBLIC_COMPANY_EMAIL.trim() !== ""
        ? process.env.NEXT_PUBLIC_COMPANY_EMAIL
        : "dimensionph1@gmail.com";

export const FACEBOOK_URL = "https://www.facebook.com/dimensionphbutuan";

export const PHONE_TEL = "+639304390294";
export const PHONE_DISPLAY = "+63 930 439 0294";
