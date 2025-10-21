'use client';

import { Rocket, Pencil, Search, MessageCircle, Palette, Globe } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Comprehensive planning to align your marketing with business goals for maximum impact.',
  },
  {
    icon: Pencil,
    title: 'Content Creation',
    description: 'Engaging content across all platforms, from captivating blogs to high-quality videos and visuals.',
  },
  {
    icon: Search,
    title: 'SEO & SEM',
    description: 'Boost online visibility and drive organic and paid traffic effectively to your website.',
  },
  {
    icon: MessageCircle,
    title: 'Social Media Marketing',
    description: "Build a vibrant community and amplify your brand's message on key social platforms.",
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Crafting a unique and memorable brand identity that resonates deeply with your target audience.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building high-performance, user-friendly digital experiences that convert visitors into customers.',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-900 via-purple-950 to-purple-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Expertise, Your Growth.
          </h2>
          <p className="text-purple-200 text-lg md:text-xl max-w-3xl mx-auto">
            We offer a full spectrum of digital marketing services designed to elevate your
            brand, engage your audience, and drive measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-purple-800/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/50 hover:bg-purple-700/50 hover:border-purple-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-purple-600/50 rounded-lg flex items-center justify-center group-hover:bg-purple-500/60 transition-colors">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-purple-200 text-center text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
