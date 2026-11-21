import { GOOGLE_PLAY_URL } from "@/constants/appLinks";

/* ========================================================
   IMAGE & APP LINKS
   ======================================================== */

const BANNER_IMAGE =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1800&q=85";

const APP_STORE_URL = "https://www.apple.com/app-store/";

/* ========================================================
   DOWNLOAD APP SECTION
   ======================================================== */

export default function DownloadAppSection() {
  return (
    <section id="download-app" className="w-full bg-white">

      <div className="mx-auto max-w-[1280px] px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-[68px]">

        {/* Main Banner */}
        <div className="relative flex min-h-[340px] items-end overflow-hidden rounded-[24px] sm:min-h-[380px] sm:rounded-[28px] lg:min-h-[400px]">

          {/* Background Image */}
          <img
            src={BANNER_IMAGE}
            alt="A couple sharing a romantic moment"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#170b0d]/80 via-[#201012]/30 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 w-full px-6 py-8 sm:px-9 sm:py-10 lg:px-12 lg:py-12">

            <h2 className="font-serif text-[32px] font-semibold leading-[1.1] tracking-[-0.025em] text-[#fff8f5] sm:text-[44px] lg:text-[52px]">
              Your person is
              <br />
              verified, and waiting.
            </h2>

            <p className="mt-4 max-w-[600px] text-[14px] leading-relaxed text-[#e7dbd7] sm:text-[16px] lg:text-[17px]">
              Download Welvors and meet someone who is ready too.
            </p>

            {/* Download Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">

              {/* App Store */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[54px] items-center gap-3 rounded-[14px] bg-white px-4 py-2.5 text-[#201b1c] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[190px] sm:px-5"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.05 12.54c-.03-2.7 2.2-4.01 2.3-4.07-1.26-1.84-3.21-2.09-3.9-2.12-1.64-.17-3.23.98-4.07.98-.86 0-2.16-.96-3.55-.93-1.8.03-3.49 1.07-4.41 2.69-1.91 3.31-.49 8.18 1.34 10.86.91 1.31 1.98 2.77 3.38 2.72 1.37-.06 1.88-.88 3.53-.88 1.64 0 2.11.88 3.55.85 1.47-.03 2.4-1.32 3.28-2.64 1.05-1.5 1.48-2.98 1.5-3.06-.04-.01-2.92-1.12-2.95-4.4zM14.38 4.61c.74-.92 1.25-2.18 1.11-3.45-1.08.05-2.43.75-3.2 1.65-.69.8-1.3 2.1-1.14 3.32 1.22.09 2.47-.62 3.23-1.52z" />
                </svg>

                <div className="text-left">
                  <p className="text-[10px] leading-tight text-[#777070] sm:text-[11px]">
                    Download on the
                  </p>

                  <p className="mt-0.5 text-[15px] font-semibold leading-tight sm:text-[17px]">
                    App Store
                  </p>
                </div>
              </a>

              {/* Google Play */}
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[54px] items-center gap-3 rounded-[14px] bg-white px-4 py-2.5 text-[#201b1c] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-w-[190px] sm:px-5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fill="#00D26A"
                    d="M3 2L14 12L3 22Q2 21.5 2 20V4Q2 2.5 3 2Z"
                  />
                  <path
                    fill="#00A6FF"
                    d="M3 2L17 9L14 12Z"
                  />
                  <path
                    fill="#FFCE00"
                    d="M17 9L22 11.2Q23.5 12 22 12.8L17 15L14 12Z"
                  />
                  <path
                    fill="#FF3A44"
                    d="M3 22L14 12L17 15Z"
                  />
                </svg>

                <div className="text-left">
                  <p className="text-[10px] leading-tight text-[#777070] sm:text-[11px]">
                    Get it on
                  </p>

                  <p className="mt-0.5 text-[15px] font-semibold leading-tight sm:text-[17px]">
                    Google Play
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
