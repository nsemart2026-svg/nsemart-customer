"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, selectCartItems } from "@/redux/featured/cart/cartSlice";
import toast from "react-hot-toast";
import { useGetAllPromoProductsQuery, useGetProductsByPromoCategoryQuery } from "@/redux/featured/promoCategory/promoCategoryApi";
import type { IProduct } from "@/types/product";

function isRecord(v: unknown): v is Record<string, unknown> {
  return !!v && typeof v === "object";
}
function getProp(o: unknown, k: string): unknown {
  return isRecord(o) && k in o ? (o as Record<string, unknown>)[k] : undefined;
}
function getStr(o: unknown, k: string): string | undefined {
  const v = getProp(o, k);
  return typeof v === "string" ? v : undefined;
}

function productId(p: IProduct): string {
  const id = getStr(p as unknown, "_id") ?? getStr(p as unknown, "id") ?? getStr(p as unknown, "slug") ?? "";
  return String(id);
}
function productTitle(p: IProduct): string {
  return (
    getStr(p as unknown, "name") ??
    (isRecord(getProp(p as unknown, "description")) ? getStr(getProp(p as unknown, "description"), "name") : undefined) ??
    getStr(p as unknown, "title") ??
    getStr(p as unknown, "label") ??
    "Product"
  );
}
function isValidImageUrl(src: string): boolean {
  try {
    const u = new URL(src);
    const ok = u.protocol === "http:" || u.protocol === "https:";
    if (!ok) return false;
    const looksImg = /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(u.pathname);
    const known = /res\.cloudinary\.com$|images\.unsplash\.com$|picsum\.photos$/.test(u.hostname);
    return looksImg || known;
  } catch {
    return false;
  }
}
function productImage(p: IProduct): string | undefined {
  const feat = getProp(p as unknown, "featuredImg");
  const gal = getProp(p as unknown, "gallery");
  const image = getStr(p as unknown, "image");

  if (typeof feat === "string" && isValidImageUrl(feat)) return feat;
  if (Array.isArray(feat)) {
    const f = feat.find((x) => typeof x === "string" && isValidImageUrl(x));
    if (typeof f === "string") return f;
  }
  if (Array.isArray(gal)) {
    const g = gal.find((x) => typeof x === "string" && isValidImageUrl(x));
    if (typeof g === "string") return g;
  }
  if (image && isValidImageUrl(image)) return image;
  return undefined;
}
function productPriceText(p: IProduct): string | undefined {
  const info = getProp(p as unknown, "productInfo");
  const sale = isRecord(info) ? getProp(info, "salePrice") : undefined;
  const saleNum = typeof sale === "number" ? sale : typeof sale === "string" ? Number(sale) : undefined;
  const price = isRecord(info) ? getProp(info, "price") : undefined;
  const priceNum = typeof price === "number" ? price : typeof price === "string" ? Number(price) : undefined;

  const num =
    typeof saleNum === "number" && Number.isFinite(saleNum) && saleNum > 0
      ? saleNum
      : typeof priceNum === "number" && Number.isFinite(priceNum) && priceNum > 0
      ? priceNum
      : undefined;

  return typeof num === "number" ? `৳${Math.round(num)}` : undefined;
}

export default function PromoCategoryProducts({ selectedPromoCategoryId }: { selectedPromoCategoryId: string | null }) {
  const { data: allPromoData, isLoading: allLoading } = useGetAllPromoProductsQuery(undefined, {
    skip: !!selectedPromoCategoryId,
  });
  const { data: categoryPromoData, isLoading: categoryLoading } = useGetProductsByPromoCategoryQuery(selectedPromoCategoryId || "", {
    skip: !selectedPromoCategoryId,
  });

  const prodData = selectedPromoCategoryId ? categoryPromoData : allPromoData;
  const isLoading = selectedPromoCategoryId ? categoryLoading : allLoading;

  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [addingToCart, setAddingToCart] = useState<string | null>(null);

  const allProducts = useMemo<IProduct[]>(
    () => (Array.isArray(prodData) ? prodData : []),
    [prodData]
  );

  const items = useMemo(
    () =>
      allProducts.slice(0, 3).map((p) => ({
        id: productId(p),
        title: productTitle(p),
        image: productImage(p),
        priceText: productPriceText(p),
      })),
    [allProducts]
  );

  const goDetails = (pid: string) =>
    router.push(`/product-details?id=${encodeURIComponent(pid)}`);

  const isInCart = useMemo(() => {
    const cartProductIds = new Set(cartItems.map(item => item.productId));
    return (productId: string) => cartProductIds.has(productId);
  }, [cartItems]);

  const handleAddToCart = async (e: React.MouseEvent, item: { id: string; title: string; image?: string; priceText?: string }) => {
    e.stopPropagation();
    setAddingToCart(item.id);
    
    const cartItem = {
      productId: item.id,
      productName: item.title,
      productImage: item.image || "/placeholder.png",
      unitPrice: parseInt(item.priceText?.replace('৳', '').trim() || '0'),
      quantity: 1,
      color: "Default",
      size: "M",
    };
    
    dispatch(addToCart(cartItem));
    toast.success("Added to cart!");
    
    setTimeout(() => {
      setAddingToCart(null);
    }, 1000);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <div id="promo-category-products" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {items.map((it) => {
              const src = it.image && isValidImageUrl(it.image) ? it.image : "/placeholder.png";
              return (
                <div
                  key={it.id}
                  className="group bg-white border border-neutral rounded-lg p-4 hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer"
                  onClick={() => goDetails(it.id)}
                >
                  <div className="relative w-full aspect-square bg-section rounded-md overflow-hidden">
                    <Image
                      src={src}
                      alt={it.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-900 line-clamp-1 font-medium">
                      {it.title}
                    </p>
                    <p className="mt-2 text-base font-bold text-gray-900">
                      {it.priceText || '৳0'}
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(e, it)}
                    disabled={addingToCart === it.id || isInCart(it.id)}
                    className={`mt-3 w-full font-semibold py-2 px-4 rounded-md transition-all duration-200 relative overflow-hidden ${
                      addingToCart === it.id
                        ? 'bg-green-500 text-white scale-105'
                        : isInCart(it.id)
                        ? 'bg-green-600 text-white cursor-default'
                        : 'bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 text-secondary'
                    }`}
                    aria-label={`Add ${it.title} to cart`}
                  >
                    <span className={`transition-all duration-300 ${
                      addingToCart === it.id ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
                    }`}>
                      {isInCart(it.id) ? '✓ In Cart' : 'Add to Cart'}
                    </span>
                    {addingToCart === it.id && (
                      <span className="absolute inset-0 flex items-center justify-center text-white font-semibold animate-pulse">
                        ✓ Added!
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
      </div>
    </div>
  );
}
