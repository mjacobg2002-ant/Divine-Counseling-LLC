import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { localBusinessSchema } from "./SEO";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Inject persistent LocalBusiness JSON-LD once
  useEffect(() => {
    const id = "jsonld-local-business";
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(localBusinessSchema);
      document.head.appendChild(script);
    }
  }, []);

  // Add bottom padding on mobile for sticky CTA bar (except on referral/contact pages)
  const needsBottomPadding = !["/referral", "/contact"].includes(pathname);

  return (
    <div className="min-h-screen flex flex-col font-[Inter,sans-serif]">
      {/* Skip to content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:top-2 focus:left-2 focus:px-4 focus:py-2 focus:bg-[#5B2C6F] focus:text-white focus:rounded-md focus:text-sm"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" role="main" className={`flex-1 ${needsBottomPadding ? "pb-[72px] lg:pb-0" : ""}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
