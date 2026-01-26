"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import SmartImage from "@/components/shared/SmartImage";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, selectCartItems } from "@/redux/featured/cart/cartSlice";
import toast from "react-hot-toast";
import { useState, useMemo } from "react";

/** আমরা যেটুকু ফিল্ড ইউজ করছি, শুধু সেটারই টাইপ দিচ্ছি  */
type RemoteProduct = {
  _id?: string;
  id?: string;
  slug?: string;

  name?: string;
  title?: string;
  label?: string;

  /** backend থেকে string বা string[]—দুটোই আসতে পারে */
  featuredImg?: string | string[];

  /** fallback ইমেজ (থাকলে) */
  image?: string;

  /** দামের ফিল্ড—number বা string */
  price?: number | string;
  mrp?: number | string;
  sale?: number | string;
};

type ProductCardProps = { product: RemoteProduct };

const ProductCard = ({ product }: ProductCardProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const [addingToCart, setAddingToCart] = useState(false);
  
  const productId = String(product?._id || product?.id || "");
  const isInCart = useMemo(() => {
    return cartItems.some(item => item.productId === productId);
  }, [cartItems, productId]);
  
  // featuredImg: string | string[] | undefined
  const featured = product?.featuredImg;
  const imgSrc =
    (Array.isArray(featured) ? featured[0] : featured) ||
    product?.image ||
    "/placeholder.png";

  // price: number | string | undefined -> number
  const numericPrice =
    typeof product?.price === "number"
      ? product.price
      : typeof product?.price === "string"
      ? Number(product.price)
      : undefined;

  const handleCardClick = () => {
    const productId = product?._id || product?.id || product?.slug || "";
    router.push(`/product-details?id=${encodeURIComponent(productId)}`);
  };

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setAddingToCart(true);
    
    const cartItem = {
      productId: String(product?._id || product?.id || ""),
      productName: product?.name || product?.title || product?.label || "Product",
      productImage: imgSrc,
      unitPrice: typeof numericPrice === "number" && Number.isFinite(numericPrice) ? numericPrice : 0,
      quantity: 1,
      color: "Default",
      size: "M",
    };
    
    dispatch(addToCart(cartItem));
    toast.success("Added to cart!");
    
    setTimeout(() => {
      setAddingToCart(false);
    }, 1000);
  };

  return (
    <Card 
      className="p-4 group h-full flex flex-col bg-white hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative aspect-square bg-section rounded-md overflow-hidden">
        <SmartImage
          src={imgSrc}
          alt={product?.name || product?.title || product?.label || "Product image"}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 20vw"
          quality={80}
          placeholder="empty"
        />
      </div>

      <div className="mt-3 flex-1 flex flex-col">
        <div className="text-sm text-secondary line-clamp-1">
          {product?.name || product?.title || product?.label || "Product"}
        </div>
        <div className="mt-2 font-bold text-base text-secondary">
          ৳ {typeof numericPrice === "number" && Number.isFinite(numericPrice) ? Math.round(numericPrice) : 0}
        </div>
      </div>

      <Button 
        className={`mt-3 w-full font-semibold transition-all duration-200 relative overflow-hidden ${
          addingToCart
            ? 'bg-green-500 text-white scale-105'
            : isInCart
            ? 'bg-green-600 text-white cursor-default'
            : 'bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95 text-secondary'
        }`}
        onClick={handleAddToCart}
        disabled={addingToCart || isInCart}
      >
        <span className={`transition-all duration-300 ${
          addingToCart ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
        }`}>
          {isInCart ? '✓ In Cart' : 'Add to Cart'}
        </span>
        {addingToCart && (
          <span className="absolute inset-0 flex items-center justify-center text-white font-semibold animate-pulse">
            ✓ Added!
          </span>
        )}
      </Button>
    </Card>
  );
};

export default ProductCard;
