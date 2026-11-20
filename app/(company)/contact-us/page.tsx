
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactForm from "@/features/company/components/ContactForm";


export const metadata: Metadata = {
  title: "Contact Us | Welvors",
  description:
    "Get in touch with Welvors for support, partnerships, privacy enquiries, careers, and feedback.",
};

const teamEmails = [
  { topic: "General enquiries", email: "support@welvors.com" },
  { topic: "Member support", email: "support@welvors.com" },
  { topic: "Privacy & data", email: "support@welvors.com" },
  { topic: "Partnerships", email: "support@welvors.com" },
  { topic: "Careers", email: "support@welvors.com" },
];

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 font-serif text-[25px] font-bold leading-tight text-[#302a29] sm:text-[28px]">
      {children}
    </h2>
  );
}

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#faf7f4] text-[#302a29]">
      {/* Page header */}
      <header className="border-b border-[#ebe3dd]">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-10 pt-10 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav
              aria-label="Breadcrumb"
              className="text-[13px] text-[#978b83]"
            >
              <Link href="/" className="hover:text-[#d20853]">
                Welvors
              </Link>
              <span className="mx-1.5">›</span>
              <span>Company</span>
              <span className="mx-1.5">›</span>
              <span>Contact us</span>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#d20853] hover:text-[#aa0640]"
            >
              <ArrowLeft size={15} />
              Back to Welvors
            </Link>
          </div>

          <span className="mt-7 inline-flex rounded-full border border-[#efc6d5] bg-[#fbeaf0] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[1.8px] text-[#d20853]">
            Get in touch
          </span>

          <h1 className="mt-5 font-serif text-[36px] leading-[1.13] tracking-[-0.025em] sm:text-[46px] lg:text-[54px]">
            Contact us.
          </h1>

          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.8] text-[#685f5b] sm:text-[17px]">
            Questions, feedback, or need a hand? Reach the right
            team below — we read everything.
          </p>
        </div>
      </header>

      {/* Page content */}
      <article className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-9 sm:px-8 sm:pt-12 lg:px-10">
        <div className="space-y-9 text-[15px] leading-[1.85] text-[#685f5b] sm:text-[16px]">
          <p>
            We&apos;re a small team and we genuinely care about
            getting back to you. Pick the channel that fits, or
            drop us a message using the form below.
          </p>

          {/* Member support */}
          <section>
            <SectionTitle>Member support</SectionTitle>

            <div className="space-y-2 rounded-xl border border-[#e9e0d9] bg-white/80 px-5 py-5 text-[14px] leading-[1.8]">
              <p>
                <strong className="text-[#302a29]">
                  Help &amp; support:
                </strong>{" "}
                <a
                  href="mailto:support@welvors.com"
                  className="break-all text-[#d20853] hover:underline"
                >
                  support@welvors.com
                </a>
              </p>

              <p>
                <strong className="text-[#302a29]">
                  In-app:
                </strong>{" "}
                Profile → Help &amp; Support → Live chat
              </p>

              <p>
                <strong className="text-[#302a29]">
                  Typical response:
                </strong>{" "}
                within 24 hours
              </p>
            </div>
          </section>

          {/* Reach the right team */}
          <section>
            <SectionTitle>Reach the right team</SectionTitle>

            <div className="overflow-x-auto rounded-xl border border-[#e9e0d9]">
              <table className="w-full min-w-[450px] border-collapse text-left text-[13px] sm:text-[14px]">
                <thead className="bg-[#f1eae5]">
                  <tr>
                    <th className="w-1/2 border-b border-r border-[#e9e0d9] px-4 py-3 text-[11px] font-semibold uppercase tracking-[1px] text-[#897b72]">
                      Topic
                    </th>
                    <th className="w-1/2 border-b border-[#e9e0d9] px-4 py-3 text-[11px] font-semibold uppercase tracking-[1px] text-[#897b72]">
                      Email
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {teamEmails.map((item) => (
                    <tr key={item.topic}>
                      <td className="border-b border-r border-[#e9e0d9] px-4 py-3 font-semibold text-[#302a29]">
                        {item.topic}
                      </td>

                      <td className="border-b border-[#e9e0d9] px-4 py-3">
                        <a
                          href={`mailto:${item.email}`}
                          className="text-[#d20853] hover:underline"
                        >
                          {item.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Grievance officer */}
          <section>
            <SectionTitle>Grievance officer</SectionTitle>

            <p className="mb-5">
              In line with Indian law, you can reach our Grievance
              Officer for complaints about content, safety, or
              your data.
            </p>

            <div className="space-y-2 rounded-xl border border-[#e9e0d9] bg-white/80 px-5 py-5 text-[14px] leading-[1.8]">
              <p>
                <strong className="text-[#302a29]">
                  Grievance Officer:
                </strong>{" "}
                Mr. Satish Jaywant Kadam
              </p>

              <p>
                <strong className="text-[#302a29]">
                  Email:
                </strong>{" "}
                <a
                  href="mailto:info@infynod.com"
                  className="text-[#d20853] hover:underline"
                >
                  info@infynod.com
                </a>
              </p>

              <p>
                <strong className="text-[#302a29]">
                  More:
                </strong>{" "}
                <Link
                  href="/grievance-redressal"
                  className="text-[#d20853] hover:underline"
                >
                  Grievance Redressal policy
                </Link>
              </p>
            </div>
          </section>

          {/* Office */}
          <section>
            <SectionTitle>Office</SectionTitle>

            <div className="rounded-xl border border-[#e9e0d9] bg-white/80 px-5 py-5 text-[14px] leading-[1.8]">
              <p className="font-semibold text-[#302a29]">
                Infynod Tech Private Limited
              </p>

              <p className="mt-1">
                Office No. 307, 3rd Floor, Amanora Chamber,
                Hadapsar–Kharadi Road, Hadapsar, Pune,
                Maharashtra – 411028, India
              </p>
            </div>
          </section>

          {/* Contact form */}
          <section>
            <SectionTitle>Send us a message</SectionTitle>
            <ContactForm />
          </section>
        </div>
      </article>
    </main>
  );
}
