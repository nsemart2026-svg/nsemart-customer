"use client";

import { useMemo, useRef, useState } from "react";
import { useGetActivePromoCategoriesQuery } from "@/redux/featured/promoCategory/promoCategoryApi";

export default function PromoCategoryRail({ onSelectCategory }: { onSelectCategory: (id: string | null) => void }) {
  const { data, isLoading, isError, error } = useGetActivePromoCategoriesQuery();
  const [selected, setSelected] = useState<string | null>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const promoCategories = useMemo(() => data || [], [data]);

  // Initialize "All" as selected since we show all products initially
  const isAllSelected = selected === null;

  if (isLoading) {
    return (
      <section className="w-full">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    console.error("Promo Category Error:", error);
    return null;
  }

  if (!promoCategories.length) {
    return null;
  }

  const handleSelect = (id: string | null) => {
    setSelected(id);
    onSelectCategory(id);
  };

  const scrollBy = (dx: number) => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: dx, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between gap-2">
        <div ref={railRef} className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin flex-1">
          <button
            onClick={() => handleSelect(null)}
            className={`whitespace-nowrap px-3 py-2 rounded-full border border-gray-300 transition-colors ${
              isAllSelected 
                ? "bg-primary text-white font-medium" 
                : "bg-white text-black hover:bg-gray-100"
            }`}
            aria-pressed={isAllSelected}
          >
            All
          </button>

          {promoCategories.map((c) => (
            <button
              key={c._id}
              onClick={() => handleSelect(c._id)}
              className={`whitespace-nowrap px-3 py-2 rounded-full border border-gray-300 transition-colors ${
                selected === c._id
                  ? "bg-primary text-white font-medium"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
              aria-pressed={selected === c._id}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex gap-2 flex-shrink-0">
          <button 
            onClick={() => scrollBy(-240)} 
            className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral hover:bg-neutral transition-colors text-primary"
            aria-label="Previous categories"
          >
            ‹
          </button>
          <button 
            onClick={() => scrollBy(240)} 
            className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral hover:bg-neutral transition-colors text-primary"
            aria-label="Next categories"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
