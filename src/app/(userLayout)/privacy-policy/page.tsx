"use client";

import { FileText, DollarSign, Package, XCircle, Copyright, UserX, ShieldAlert, Lock } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <FileText className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-3">
              Terms & Conditions
            </h1>
            <p className="text-primary text-base md:text-base">Please read these terms carefully before using our services.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {/* 1. General */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <FileText className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">1. General</h2>
            </div>
            <p className="text-primary mb-2 text-sm md:text-sm">Dressen reserves the right to update, modify, or change any part of these terms at any time.</p>
            <p className="text-primary text-sm md:text-sm">Continued use of the website after any change constitutes acceptance of the updated terms.</p>
          </div>

          {/* 2. Product Information */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <Package className="w-6 h-6 md:w-7 md:h-7 text-success flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">2. Product Information</h2>
            </div>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• We aim to provide accurate descriptions and photos of our products.</li>
              <li>• Colors may vary slightly due to lighting or screen settings.</li>
              <li>• Availability of products is not guaranteed; items may sell out or be discontinued without notice.</li>
            </ul>
          </div>

          {/* 3. Pricing & Payment */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <DollarSign className="w-6 h-6 md:w-7 md:h-7 text-highlight flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">3. Pricing & Payment</h2>
            </div>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• All prices shown on the website are final and include applicable taxes (unless stated otherwise).</li>
              <li>• Payment must be completed before order processing.</li>
              <li>• We reserve the right to change prices at any time.</li>
            </ul>
          </div>

          {/* 4. Orders & Shipping */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <Package className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">4. Orders & Shipping</h2>
            </div>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• Orders are processed only after full payment is received.</li>
              <li>• Delivery time may vary based on location and logistics conditions.</li>
              <li>• Incorrect shipping information provided by the customer may cause delivery delays or failed delivery.</li>
            </ul>
          </div>

          {/* 5. Return & Exchange Policy */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <FileText className="w-6 h-6 md:w-7 md:h-7 text-success flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">5. Return & Exchange Policy</h2>
            </div>
            <p className="text-primary text-sm md:text-sm">By placing an order, you agree to our <Link href="/return-policy" className="text-highlight hover:text-primary hover:underline font-semibold">Return & Exchange Policy</Link>.</p>
          </div>

          {/* 6. Cancellation */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <XCircle className="w-6 h-6 md:w-7 md:h-7 text-destructive flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">6. Cancellation</h2>
            </div>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• Orders may be cancelled before packaging or dispatch.</li>
              <li>• Once the order is shipped, cancellation is not possible.</li>
              <li>• Dressen reserves the right to cancel any order due to stock issues, payment problems, or suspected fraud.</li>
            </ul>
          </div>

          {/* 7. Intellectual Property */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <Copyright className="w-6 h-6 md:w-7 md:h-7 text-highlight flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">7. Intellectual Property</h2>
            </div>
            <p className="text-primary mb-2 text-sm md:text-sm">All text, images, graphics, logos, and content on this website are the property of Dressen.</p>
            <p className="text-primary text-sm md:text-sm">Unauthorized use, reproduction, or distribution is prohibited.</p>
          </div>

          {/* 8. User Responsibilities */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <UserX className="w-6 h-6 md:w-7 md:h-7 text-destructive flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">8. User Responsibilities</h2>
            </div>
            <p className="text-primary mb-2 text-sm md:text-sm">You agree not to:</p>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• Misuse our website</li>
              <li>• Try to hack, disrupt, or interfere with the website`&apos;s operation</li>
              <li>• Use fake information or fraudulent payment methods</li>
            </ul>
          </div>

          {/* 9. Privacy */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <Lock className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">9. Privacy</h2>
            </div>
            <p className="text-primary mb-2 text-sm md:text-sm">Your personal data is handled according to our Privacy Policy.</p>
            <p className="text-primary text-sm md:text-sm">We do not sell or misuse your information.</p>
          </div>

          {/* 10. Limitation of Liability */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <ShieldAlert className="w-6 h-6 md:w-7 md:h-7 text-destructive flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">10. Limitation of Liability</h2>
            </div>
            <p className="text-primary mb-2 text-sm md:text-sm">Dressen is not responsible for any direct or indirect losses caused by misuse of our website or products.</p>
            <p className="text-primary text-sm md:text-sm">We are not liable for delays caused by courier services, strikes, weather issues, or unforeseen events.</p>
          </div>
        </div>
      </div>
    </div>
  );
}