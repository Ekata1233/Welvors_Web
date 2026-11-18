import type { EventCategory } from "../types/event.types";

type CategoryCardProps = {
  category: EventCategory;
  isSelected?: boolean;
  onClick: (categoryId: string) => void;
};

export default function CategoryCard({
  category,
  isSelected = false,
  onClick,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={() => onClick(category.id)}
      className={`group relative block h-[160px] w-full min-w-0 cursor-pointer overflow-hidden rounded-[24px] bg-white text-left shadow-[0_12px_30px_rgba(0,0,0,0.08),0_2px_5px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 ${
        isSelected ? "ring-2 ring-[#EE4D78]" : ""
      }`}
    >
      {/* Category Image - 80px */}
      <div className="relative h-[80px] w-full overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Category Icon */}
      <div className="absolute top-[60px] left-[12px] z-10 flex h-[36px] w-[36px] items-center justify-center rounded-[12px] bg-white text-[20px] shadow-[0_5px_12px_rgba(0,0,0,0.12)]">
        {category.icon}
      </div>

      {/* Category Content - 80px */}
      <div className="h-[80px] min-w-0 px-3 pt-[20px] pb-[5px]">

        {/* Title */}
        <h3
          title={category.name}
          className="truncate text-[15px] leading-[19px] font-bold text-[#202020]"
        >
          {category.name}
        </h3>

        {/* Description */}
        <p className="mt-1 line-clamp-2 text-[12px] leading-[16px] font-normal text-[#908B85]">
          {category.description}
        </p>

      </div>
    </button>
  );
}