'use client';

import Link from 'next/link';

export default function CTASectionEnhanced() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-purple-900 via-purple-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>

          {/* Description */}
          <p className="text-purple-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Partner with Combine Zenith to unlock your brand&apos;s full potential. Let&apo;s
            discuss how our tailored strategies can drive your success.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}