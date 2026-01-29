"use client";

import { Package, Truck, Palette, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function WhyChooseNS eMart() {
  const features = [
    {
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      title: "Premium quality!",
      showStars: true
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      title: "Fast delivery!",
      showStars: true
    },
    {
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      title: "Local Artist",
      subtitle: "Artist Designs",
      showStars: false
    },
    {
      icon: <RotateCcw className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
      title: "Fast",
      subtitle: "Easy Return",
      showStars: false
    }
  ];

  return (
    <section className="w-full mt-12">
      {/* Main Dark Section */}
      <div className="bg-primary py-8 md:py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
            Why Choose NS eMart?
          </h2>
          
          <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-2 sm:px-4 md:px-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-2 sm:p-3 md:p-4 lg:p-6 mb-2">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                {feature.showStars && (
                  <div className="text-yellow-400 text-base sm:text-xs md:text-sm mb-1 flex gap-0.5">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                )}
                <h3 className="text-white font-normal text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-white text-[8px] sm:text-[10px] md:text-xs lg:text-sm">
                    {feature.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Middle Delivery Text */}
      <div className="bg-neutral py-4">
        <div className="container mx-auto px-4">
          <p className="text-primary text-center text-sm md:text-base">
            Estimated delivery: 2–3 days inside Dhaka
          </p>
        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-2 text-white">
            <Link href="/size-chart" className="px-6 py-2 bg-white text-primary text-sm md:text-base font-semibold hover:bg-neutral hover:text-primary transition rounded-md inline-block">
              Size Chart
            </Link>
            <p className="text-sm md:text-base">
              Secure Payment | Easy Return
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
