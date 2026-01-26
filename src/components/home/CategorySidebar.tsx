"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useGetAllCategoryQuery } from "@/redux/featured/category/categoryApi";

type RemoteCategory = {
  _id?: string; slug?: string; name?: string;
  subCategories?: string[];
};

type UICategory = {
  id: string;
  slug: string;
  label: string;
  subCategories: string[];
};

export default function CategorySidebar() {
  const { data: remoteCats, isSuccess } = useGetAllCategoryQuery();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const cats: UICategory[] = useMemo(() => 
    isSuccess && Array.isArray(remoteCats) && remoteCats.length
      ? (remoteCats as RemoteCategory[]).map((c) => ({
          id: c._id ?? "",
          slug: c.slug ?? "",
          label: c.name ?? "Category",
          subCategories: c.subCategories ?? [],
        }))
      : [], [isSuccess, remoteCats]);

  // Auto-expand first category
  useEffect(() => {
    if (cats.length > 0 && expandedCategories.size === 0) {
      setExpandedCategories(new Set([cats[0].id]));
    }
  }, [cats, expandedCategories.size]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <aside className="hidden md:block md:col-span-3 lg:col-span-2">
      <div className="border rounded-lg overflow-hidden h-44 sm:h-56 md:h-64 lg:h-80 xl:h-96">
        <div className="px-3 bg-primary py-2 font-medium border-b text-accent">Categories</div>
        <div className="overflow-y-auto h-full pb-4">
          <ul className="divide-y">
            {cats.map((c) => (
              <li key={c.id} className="text-sm">
                <div className="flex items-center justify-between px-3 py-2 hover:bg-neutral transition-colors">
                  <Link href={`/category?slug=${encodeURIComponent(c.slug)}`} className="flex-1 text-primary hover:text-highlight transition-colors">
                    {c.label}
                  </Link>
                  {c.subCategories.length > 0 && (
                    <button
                      onClick={() => toggleCategory(c.id)}
                      className="p-1 hover:bg-neutral rounded text-primary transition-colors"
                      aria-label={`Toggle ${c.label} subcategories`}
                    >
                      {expandedCategories.has(c.id) ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </button>
                  )}
                </div>
                {c.subCategories.length > 0 && expandedCategories.has(c.id) && (
                  <ul className="ml-4 border-l bg-secondary">
                    {c.subCategories.map((sc, index) => (
                      <li key={`${sc}-${index}`}>
                        <Link
                          href={`/category?slug=${encodeURIComponent(c.slug)}&sub=${encodeURIComponent(sc)}`}
                          className="block px-3 py-1.5 hover:bg-neutral text-[13px] text-primary hover:text-highlight transition-colors"
                        >
                          {sc}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
