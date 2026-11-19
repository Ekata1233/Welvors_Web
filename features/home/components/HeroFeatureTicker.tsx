const HERO_FEATURES = [
  "NRI friendly",
  "Women-first privacy",
  "Hosted events",
  "Date plans, not small talk",
  "Verified profiles only",
  "Serious relationships",
  "Real intent",
];

/* ==========================================================
   HERO FEATURE TICKER
   ========================================================== */

export default function HeroFeatureTicker() {
  return (
    <div className="welvors-ticker">
      <div className="welvors-ticker-track">

        {/* FIRST GROUP */}

        <div className="welvors-ticker-group">
          {HERO_FEATURES.map((feature) => (
            <div
              key={feature}
              className="welvors-ticker-item"
            >
              <span
                className="welvors-ticker-star"
                aria-hidden="true"
              >
                ✦
              </span>

              <span className="welvors-ticker-text">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* DUPLICATE GROUP FOR CONTINUOUS ANIMATION */}

        <div
          className="welvors-ticker-group"
          aria-hidden="true"
        >
          {HERO_FEATURES.map((feature) => (
            <div
              key={`duplicate-${feature}`}
              className="welvors-ticker-item"
            >
              <span className="welvors-ticker-star">
                ✦
              </span>

              <span className="welvors-ticker-text">
                {feature}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}