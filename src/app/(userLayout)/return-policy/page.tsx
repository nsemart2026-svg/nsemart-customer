"use client";

import { Shield, Package, RefreshCw, Phone, AlertCircle, CheckCircle2 } from "lucide-react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useGetSettingsQuery } from "@/redux/featured/settings/settingsApi";

export default function ReturnPolicyPage() {
  useScrollToTop();
  const { data: settings } = useGetSettingsQuery();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-3 md:mb-4" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 md:mb-3">
              Return & Exchange Policy
            </h1>
            <p className="text-primary text-base md:text-base">We want you to have the best experience with NS eMart.</p>
            <p className="text-primary text-base md:text-base">If something is not right, we are here to help.</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">

        {/* Policy Sections */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {/* 1. Eligibility */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">1. Eligibility for Return</h2>
            </div>
            <p className="text-primary mb-3 text-sm md:text-sm">You can request a return or exchange if:</p>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• The product is unused, unwashed, and in original condition.</li>
              <li>• Tags and packaging are intact.</li>
              <li>• The request is made within 3 days of receiving the product.</li>
            </ul>
          </div>

          {/* 2. Non-Returnable */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <AlertCircle className="w-6 h-6 md:w-7 md:h-7 text-destructive flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">2. Non-Returnable Items</h2>
            </div>
            <p className="text-primary mb-3 text-sm md:text-sm">We do not accept returns for:</p>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• Used or damaged products</li>
              <li>• Items with perfume, stains, or signs of wear</li>
              <li>• Clearance/discounted items (unless defective)</li>
              <li>• Customized or limited-edition drops (depends on availability)</li>
            </ul>
          </div>

          {/* 3. Wrong/Defective */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <Package className="w-6 h-6 md:w-7 md:h-7 text-success flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">3. Wrong or Defective Products</h2>
            </div>
            <p className="text-primary mb-3 text-sm md:text-sm">If you receive a wrong item or a defective product:</p>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• We will replace it free of cost</li>
              <li>• You must provide an unboxing video or photo as proof</li>
            </ul>
          </div>

          {/* 4. Exchange */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <RefreshCw className="w-6 h-6 md:w-7 md:h-7 text-highlight flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">4. Exchange Policy</h2>
            </div>
            <p className="text-primary mb-3 text-sm md:text-sm">You may exchange for:</p>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• A different size</li>
              <li>• A different color (if available)</li>
              <li>• A different item (price difference applicable)</li>
            </ul>
          </div>

          {/* 5. Return Process */}
          <div className="bg-white border border-neutral rounded-lg p-5 md:p-6 hover:shadow-md transition-shadow md:col-span-2">
            <div className="flex items-start gap-3 mb-3 md:mb-4">
              <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary flex-shrink-0 mt-0.5" />
              <h2 className="text-lg md:text-xl font-bold text-primary leading-tight">5. Return Process</h2>
            </div>
            <p className="text-primary mb-3 text-sm md:text-sm">To start a return, please contact us:</p>
            <ul className="space-y-2 text-primary text-sm md:text-sm">
              <li>• Facebook Page: <a href={settings?.contactAndSocial?.facebookUrl?.[0] || "https://facebook.com/NS eMart"} target="_blank" rel="noopener noreferrer" className="text-highlight hover:text-primary hover:underline font-semibold">NS eMart</a></li>
              <li>• Customer Support: <a href={`https://wa.me/88${settings?.contactAndSocial?.phone || '01909008004'}`} target="_blank" rel="noopener noreferrer" className="text-highlight hover:text-primary hover:underline font-semibold">{settings?.contactAndSocial?.phone || '01909008004'} (WhatsApp)</a></li>
            </ul>
            <p className="text-primary mt-3 text-sm md:text-sm">Provide your order number, full name, and reason for return.</p>
          </div>

          {/* 6. Refund */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-5 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-primary mb-3">6. Refund</h2>
            <p className="text-primary text-sm md:text-sm">We currently offer <span className="font-semibold">exchange or store credit only</span>.<br />(No cash refunds at this moment.)</p>
          </div>

          {/* 7. Delivery Charges */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-5 md:p-6">
            <h2 className="text-lg md:text-xl font-bold text-primary mb-3">7. Delivery Charges</h2>
            <p className="text-primary text-sm md:text-sm">Return delivery charges may apply unless the product is defective or incorrectly delivered.</p>
          </div>
        </div>
      </div>
    </div>
  );
}