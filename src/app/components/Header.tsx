'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purple-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-white font-bold text-2xl">
              <span className="text-sm block">Combine</span>
              <span className="text-3xl">zenith</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-300 transition">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-purple-300 transition">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-purple-300 transition">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-purple-300 transition">
              Portfolio
            </Link>
            <Link href="/blog" className="text-white hover:text-purple-300 transition">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-purple-300 transition">
              Contact
            </Link>
            <button className="px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-purple-900 transition">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link href="/" className="block text-white hover:text-purple-300">
              Home
            </Link>
            <Link href="/about" className="block text-white hover:text-purple-300">
              About
            </Link>
            <Link href="/services" className="block text-white hover:text-purple-300">
              Services
            </Link>
            <Link href="/portfolio" className="block text-white hover:text-purple-300">
              Portfolio
            </Link>
            <Link href="/blog" className="block text-white hover:text-purple-300">
              Blog
            </Link>
            <Link href="/contact" className="block text-white hover:text-purple-300">
              Contact
            </Link>
            <button className="w-full px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-purple-900 transition">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
