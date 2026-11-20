export default function InformationSkeleton() {
  return (
    <section className="min-h-screen animate-pulse bg-[#f9f6f2]">

      <div className="border-b border-[#e9e1da]">
        <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 lg:px-16 xl:px-20">

          <div className="h-4 w-52 max-w-full rounded bg-[#e9e1da]" />

          <div className="mt-6 h-7 w-36 rounded-full bg-[#efdee4]" />

          <div className="mt-5 h-12 w-80 max-w-full rounded-lg bg-[#e9e1da]" />

        </div>
      </div>

      <div className="mx-auto max-w-[1600px] space-y-5 px-5 py-8 sm:px-8 lg:px-16 xl:px-20">

        <div className="h-4 w-[40%] rounded bg-[#e9e1da]" />
        <div className="h-4 w-full rounded bg-[#e9e1da]" />
        <div className="h-4 w-[85%] rounded bg-[#e9e1da]" />

        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4 pt-8">
            <div className="h-7 w-[30%] rounded bg-[#efdee4]" />
            <div className="h-4 w-full rounded bg-[#e9e1da]" />
            <div className="h-4 w-[90%] rounded bg-[#e9e1da]" />
            <div className="h-4 w-[65%] rounded bg-[#e9e1da]" />
          </div>
        ))}

      </div>

    </section>
  );
}