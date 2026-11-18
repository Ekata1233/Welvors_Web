import { EVENT_RATING_SUMMARY, EVENT_REVIEWS } from "../constants/event-details.constants";


export default function EventReviews() {
  const ratingSummary = EVENT_RATING_SUMMARY;

  const reviews = EVENT_REVIEWS;

  return (
    <section className="w-full min-w-0">

      {/* ================= SECTION HEADING ================= */}

      <h2 className="mb-4 text-[20px] leading-[26px] font-bold text-[#202020]">
        Real Experiences, Real Connections
      </h2>

      {/* ================= RATING SUMMARY CARD ================= */}

      <div className="flex items-center gap-4 rounded-[24px] border border-[#EAE6E2] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)] sm:gap-5 sm:p-[18px]">

        {/* ================= OVERALL RATING ================= */}

        <div className="flex shrink-0 flex-col items-center">

          {/* Rating Number */}

          <span className="text-[36px] leading-none font-bold tracking-[-1.5px] text-[#202020] sm:text-[44px]">

            {ratingSummary.averageRating.toFixed(1)}

          </span>

          {/* Rating Stars */}

          <div
            aria-label={`${ratingSummary.averageRating} out of 5 stars`}
            className="mt-[5px] text-[15px] leading-[18px] tracking-[1px] text-[#FFAA18] sm:text-[16px]"
          >

            ★★★★★

          </div>

          {/* Total Reviews */}

          <p className="mt-[6px] text-[12px] leading-[18px] whitespace-nowrap text-[#908B85] sm:text-[13px]">

            {ratingSummary.totalReviews} reviews

          </p>

        </div>

        {/* ================= RATING DISTRIBUTION ================= */}

        <div className="min-w-0 flex-1 space-y-[5px]">

          {ratingSummary.distribution.map((item) => (
            <div
              key={item.stars}
              className="flex items-center gap-[8px]"
            >

              {/* Rating Label */}

              <span className="w-[8px] shrink-0 text-[12px] leading-[12px] font-semibold text-[#908B85]">

                {item.stars}

              </span>

              {/* Rating Progress Bar */}

              <div
                role="progressbar"
                aria-label={`${item.stars}-star reviews`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={item.percentage}
                className="h-[6px] flex-1 overflow-hidden rounded-full bg-[#F1E6EB]"
              >

                <div
                  style={{
                    width: `${item.percentage}%`,
                  }}
                  className="h-full rounded-l-full bg-[#FFAA18]"
                />

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ================= REVIEW CARDS ================= */}

      <div className="mt-4 grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-3">

        {reviews.map((review) => (
          <article
            key={review.id}
            className="group flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-[#EAE6E2] bg-white shadow-[0_5px_18px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-[#F5CBD6] hover:bg-[#FDE4E9] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          >

            {/* ================= REVIEW EVENT IMAGE ================= */}

            <div className="h-[125px] w-full shrink-0 overflow-hidden bg-[#F4F1ED]">

              <img
                src={review.eventPhoto}
                alt={`Event experience shared by ${review.name}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

            </div>

            {/* ================= REVIEW CONTENT ================= */}

            <div className="flex flex-1 flex-col p-[15px]">

              {/* Reviewer Profile */}

              <div className="flex items-center gap-[10px]">

                {/* Profile Photo */}

                <img
                  src={review.profilePhoto}
                  alt={review.name}
                  loading="lazy"
                  className="h-[40px] w-[40px] shrink-0 rounded-full object-cover"
                />

                {/* Reviewer Name And Stars */}

                <div className="min-w-0">

                  <h3 className="text-[15px] leading-[20px] font-bold text-[#202020]">

                    {review.name}

                  </h3>

                  <div
                    aria-label={`${review.rating} out of 5 stars`}
                    className="mt-[5px] flex items-center text-[13px] leading-[16px] text-[#FFAA18]"
                  >

                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={
                          index < review.rating
                            ? "text-[#FFAA18]"
                            : "text-[#E5DFDA]"
                        }
                      >
                        ★
                      </span>
                    ))}

                  </div>

                </div>

              </div>

              {/* ================= REVIEW DESCRIPTION ================= */}

              <p className="mt-[12px] text-[13px] leading-[21px] text-[#65615D] sm:text-[14px]">

                &quot;{review.review}&quot;

              </p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}