import { HERO_APP_IMAGES } from "../constants/home.constants";

type PhoneMockupProps = {
  image: string;
  alt: string;
  className: string;
};

/* ==========================================================
   PHONE MOCKUP
   ========================================================== */

function PhoneMockup({
  image,
  alt,
  className,
}: PhoneMockupProps) {
  return (
    <div className={`absolute ${className}`}>
      <img
        src={image}
        alt={alt}
        draggable={false}
        className="
          block
          h-full
          w-full
          select-none
          object-contain
          drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]
        "
      />
    </div>
  );
}

/* ==========================================================
   HERO APP PREVIEW
   ========================================================== */

export default function HeroAppPreview() {
  return (
    <div className="hero-app-preview relative isolate mx-auto w-full max-w-[680px]">

      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute -inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(190,65,98,0.18),transparent_75%)]" />

      <div className="pointer-events-none absolute -inset-[3%] -z-10 rounded-full bg-white/[0.025]" />

      <div className="pointer-events-none absolute inset-[7%] -z-10 rounded-full bg-white/[0.025]" />

      {/* LEFT PHONE */}

      <PhoneMockup
        image={HERO_APP_IMAGES.match}
        alt="Welvors match analysis"
        className="left-[5%] top-[18%] z-[1] h-[72%] w-[43%] -rotate-[10deg] opacity-85"
      />

      {/* RIGHT PHONE */}

      <PhoneMockup
        image={HERO_APP_IMAGES.datePlan}
        alt="Welvors date plans"
        className="right-[3%] top-[18%] z-[2] h-[72%] w-[43%] rotate-[10deg] opacity-85"
      />

      {/* CENTER PHONE */}

      <PhoneMockup
        image={HERO_APP_IMAGES.discover}
        alt="Welvors discover profiles"
        className="left-[21%] top-[0%] z-10 h-full w-[58%]"
      />

      {/* ==================================================
          TRUST SCORE
          ================================================== */}

      <div
        className="
          hero-preview-card
          hero-preview-trust
          welvors-floating-card
          welvors-float-trust
        "
      >
        <div className="hero-preview-icon hero-trust-icon">
          98
        </div>

        <div className="min-w-0">
          <p className="hero-preview-title">
            Trust Score
          </p>

          <p className="hero-preview-description">
            ID + live video verified
          </p>
        </div>
      </div>

      {/* ==================================================
          STRONG MATCH
          ================================================== */}

      <div
        className="
          hero-preview-card
          hero-preview-match
          welvors-floating-card
          welvors-float-match
        "
      >
        <div className="hero-preview-icon hero-match-icon">
          92%
        </div>

        <div className="min-w-0">
          <p className="hero-preview-title">
            Strong match
          </p>

          <p className="hero-preview-description">
            Values · family · lifestyle
          </p>
        </div>
      </div>

      {/* ==================================================
          COFFEE TONIGHT
          ================================================== */}

      <div
        className="
          hero-preview-card
          hero-preview-coffee
          welvors-floating-card
          welvors-float-coffee
        "
      >
        <div className="hero-preview-icon hero-pink-icon">
          ☕
        </div>

        <div className="min-w-0">
          <p className="hero-preview-title">
            Coffee tonight?
          </p>

          <p className="hero-preview-description hero-coffee-description">
            <span className="hero-coffee-dot" />

            3 requests
          </p>
        </div>
      </div>

      {/* ==================================================
          SAFEFACE
          ================================================== */}

      <div
        className="
          hero-preview-card
          hero-preview-safety
          welvors-floating-card
          welvors-float-safety
        "
      >
        <div className="hero-preview-icon hero-pink-icon">
          🙈
        </div>

        <div className="min-w-0">
          <p className="hero-preview-title">
            SafeFace on
          </p>

          <p className="hero-preview-description">
            Photo on her terms
          </p>
        </div>
      </div>

    </div>
  );
}