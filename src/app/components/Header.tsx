'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { BiUser } from 'react-icons/bi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* ✅ Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-28 h-10 sm:w-36 sm:h-12">
              <Image
                src="/logo-white.png"
                fill
                className="object-contain"
                alt="Combine Zenith Logo"
                priority
              />
            </div>
          </Link>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-6">
            <div className="flex items-center space-x-6 lg:space-x-10">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  className="text-white hover:text-purple-300 transition-colors duration-200 font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* ✅ Desktop Get Started Button */}
          <div className="hidden md:flex items-center">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white text-purple-900 rounded-lg hover:bg-purple-100 transition-all duration-300 font-semibold">
              <BiUser className="text-lg" />
              <span>Get Started</span>
            </button>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-black/60 rounded-lg p-4 border border-white/10">
            <div className="flex flex-col space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-purple-300 transition-colors duration-200 py-2 text-lg font-medium"
                >
                  {item}
                </Link>
              ))}

              <button className="flex items-center justify-center space-x-2 w-full px-5 py-3 bg-white text-purple-900 rounded-lg hover:bg-purple-100 transition-all duration-300 font-semibold mt-3">
                <BiUser className="text-lg" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
