import { useEffect } from "react";
import { useLocation } from "react-router";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown>;
}

const BASE_URL = "https://www.divinecounselingllc.net";
const SITE_NAME = "Divine Counseling LLC";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

/**
 * SEO component that manages document <head> tags for each page.
 * Sets document.title, meta description, canonical URL, Open Graph,
 * Twitter Card, and optional JSON-LD structured data.
 */
export function SEO({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  noindex = false,
  structuredData,
}: SEOProps) {
  const { pathname } = useLocation();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical || `${BASE_URL}${pathname}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Helper to set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Meta description
    setMeta("name", "description", description);

    // Robots
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1");

    // Canonical link
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_US");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Geo meta (local SEO)
    setMeta("name", "geo.region", "US-MD");
    setMeta("name", "geo.placename", "Baltimore, Maryland");

    // JSON-LD structured data
    let scriptEl = document.querySelector('script[data-seo-jsonld]') as HTMLScriptElement | null;
    if (structuredData) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.setAttribute("type", "application/ld+json");
        scriptEl.setAttribute("data-seo-jsonld", "true");
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Cleanup page-specific structured data on unmount
      const el = document.querySelector('script[data-seo-jsonld]');
      if (el) el.remove();
    };
  }, [fullTitle, description, canonicalUrl, ogType, image, noindex, structuredData]);

  return null;
}

/**
 * Pre-built JSON-LD for the business (used on Home/Layout).
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MentalHealthBusiness",
  "name": "Divine Counseling LLC",
  "alternateName": "Divine Counseling",
  "description": "Holistic outpatient mental health center offering trauma-informed therapy, psychiatric rehabilitation, and counseling services in Baltimore and Owings Mills, Maryland.",
  "url": BASE_URL,
  "telephone": "+1-443-955-2662",
  "email": "referrals@divinecounselingllc.net",
  "image": DEFAULT_OG_IMAGE,
  "logo": DEFAULT_OG_IMAGE,
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Insurance, Self-Pay",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
      "opens": "09:00",
      "closes": "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "09:00",
      "closes": "17:00",
    },
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Owings Mills",
      "addressRegion": "MD",
      "addressCountry": "US",
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Baltimore",
      "addressRegion": "MD",
      "addressCountry": "US",
    },
  ],
  "areaServed": [
    { "@type": "State", "name": "Maryland" },
    { "@type": "State", "name": "Virginia" },
    { "@type": "AdministrativeArea", "name": "District of Columbia" },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mental Health Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Individual Counseling" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Couples & Family Counseling" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trauma Therapy (EMDR, TF-CBT)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Psychiatric Rehabilitation Program (PRP)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Art Therapy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CBT & Dialectical Behavioral Therapy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medication Management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Telehealth Therapy" } },
    ],
  },
  "sameAs": [],
};

/**
 * Breadcrumb structured data generator for any page.
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `${BASE_URL}${item.url}`,
    })),
  };
}
