type WhyWelvorsDownloadProps = {
  appStoreUrl: string;
  googlePlayUrl: string;
};

/* ==========================================================
   DOWNLOAD APP BANNER
   ========================================================== */

export default function WhyWelvorsDownload({
  appStoreUrl,
  googlePlayUrl,
}: WhyWelvorsDownloadProps) {
  const storeButtonClass = `
    flex
    min-h-[60px]
    w-full
    items-center
    gap-3
    rounded-[14px]
    bg-white
    px-5
    py-3
    text-[#201c1d]
    transition-all
    duration-300
    hover:bg-[#fff0f4]
    motion-safe:hover:-translate-y-1
    sm:w-auto
    sm:min-w-[188px]
  `;

  return (
    <div
      className="
        mt-14
        flex
        flex-col
        items-start
        justify-between
        gap-7
        rounded-[24px]
        bg-[#1d1819]
        px-6
        py-8
        text-white
        sm:mt-20
        sm:p-9
        lg:mt-[100px]
        lg:flex-row
        lg:items-center
        lg:p-[46px]
      "
    >
      {/* BANNER HEADING */}

      <div className="min-w-0">

        <h2
          className="
            font-serif
            text-[32px]
            font-medium
            leading-[1.15]
            tracking-[-1px]
            text-[#faf5f3]
            sm:text-[38px]
            xl:text-[46px]
          "
        >
          Your love story starts today.
        </h2>

        <p
          className="
            mt-3
            text-sm
            leading-relaxed
            text-[#c6bfc0]
            sm:text-base
          "
        >
          Free on iOS and Android. Verify in 2 minutes.
        </p>

      </div>

      {/* DOWNLOAD BUTTONS */}

      <div
        className="
          flex
          w-full
          shrink-0
          flex-col
          gap-3
          sm:w-auto
          sm:flex-row
        "
      >
        {/* APP STORE */}

        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={storeButtonClass}
        >
          <svg
            width="26"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="shrink-0"
            aria-hidden="true"
          >
            <path d="M17.05 12.54c.03 3.03 2.65 4.04 2.68 4.05-.02.07-.42 1.45-1.39 2.87-.84 1.23-1.71 2.45-3.08 2.48-1.35.02-1.79-.8-3.33-.8-1.54 0-2.03.78-3.31.83-1.32.05-2.32-1.33-3.17-2.55-1.73-2.5-3.04-7.05-1.27-10.13A4.9 4.9 0 0 1 8.34 6.8c1.3-.03 2.52.88 3.32.88.79 0 2.28-1.08 3.85-.92.66.03 2.51.27 3.7 2.01-.1.06-2.21 1.29-2.16 3.77ZM14.46 5.1c.7-.85 1.17-2.03 1.04-3.2-1.01.04-2.23.68-2.95 1.53-.65.75-1.22 1.95-1.06 3.1 1.12.09 2.27-.57 2.97-1.43Z" />
          </svg>

          <div>
            <span className="block text-[11px] leading-tight text-[#817977]">
              Download on the
            </span>

            <span className="block whitespace-nowrap text-[17px] font-bold">
              App Store
            </span>
          </div>
        </a>

        {/* GOOGLE PLAY */}

        <a
          href={googlePlayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={storeButtonClass}
        >
          <svg
            width="26"
            height="28"
            viewBox="0 0 24 24"
            className="shrink-0"
            aria-hidden="true"
          >
            <path
              fill="#34A853"
              d="M3 2 12 12 3 22Z"
            />

            <path
              fill="#4285F4"
              d="M3 2 17 9 12 12Z"
            />

            <path
              fill="#FBBC04"
              d="M17 9 22 12 17 15 12 12Z"
            />

            <path
              fill="#EA4335"
              d="M3 22 17 15 12 12Z"
            />
          </svg>

          <div>
            <span className="block text-[11px] leading-tight text-[#817977]">
              Get it on
            </span>

            <span className="block whitespace-nowrap text-[17px] font-bold">
              Google Play
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}