"use client";

import { useState } from "react";

import CategoryCard from "../components/CategoryCard";
import { EVENT_CATEGORIES } from "../constants/event.constants";

export default function EventCategories() {
  const [selectedCategory, setSelectedCategory] =
    useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    const nextCategory =
      selectedCategory === categoryId
        ? null
        : categoryId;

    setSelectedCategory(nextCategory);

    console.log("Selected category:", nextCategory);
  };

  return (
    <section className="w-full min-w-0 px-2 md:px-6">

      {/* Section Heading */}
      <div className="mb-[18px]">
        <h2 className="text-[24px] leading-[30px] font-bold tracking-[-0.5px] text-[#202020]">
          Explore experiences
        </h2>

        <p className="mt-[3px] text-[15px] leading-[20px] font-normal text-[#908B85]">
          Find your vibe. Meet your people.
        </p>
      </div>

      {/* Category Cards */}
      <div
        className="
          grid
          grid-flow-col
          grid-rows-2
          auto-cols-[calc((100%_-_12px)/1.75)]
          gap-3
          overflow-x-auto
          overscroll-x-contain
          snap-x
          snap-mandatory
          pt-1
          pb-8
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          xl:grid-flow-row
          xl:grid-cols-8
          xl:grid-rows-1
          xl:overflow-visible
          xl:snap-none
        "
      >
        {EVENT_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="min-w-0 snap-start"
          >
            <CategoryCard
              category={category}
              isSelected={
                selectedCategory === category.id
              }
              onClick={handleCategoryClick}
            />
          </div>
        ))}
      </div>

    </section>
  );
}