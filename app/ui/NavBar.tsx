'use client';

import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(pathname.includes('work'));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(pathname.includes('work'));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-sm py-2' : 'bg-transparent py-8'
      }`}
    >
      <div
        className={`${
          scrolled
            ? 'flex max-w-screen-xl mx-auto items-center justify-between px-8'
            : 'flex max-w-screen-xl mx-auto flex-col items-end px-8'
        }`}
      >
        <div
          className={`text-white font-bold text-xl tracking-widest select-none ${
            scrolled ? '' : 'self-start ml-2 mb-4'
          }`}
        >
          A<span className="text-gray-400">V</span>
        </div>

        {!scrolled && (
          <nav className="flex flex-col space-y-2 text-sm text-right">
            <a
              href={baseUrl + '#home'}
              className="hover:text-green-500 transition"
            >
              Home
            </a>
            <a
              href={baseUrl + '#sobre'}
              className="hover:text-red-500 transition"
            >
              Sobre
            </a>
            <a
              href={baseUrl + '#formacao'}
              className="hover:text-blue-500 transition"
            >
              Formação
            </a>
            <a
              href={baseUrl + '#trabalhos'}
              className="hover:text-yellow-500 transition"
            >
              Trabalhos
            </a>
            <a
              href={baseUrl + '#contato'}
              className="hover:text-purple-500 transition"
            >
              Contato
            </a>
          </nav>
        )}

        {scrolled && (
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FiMenu />
          </button>
        )}
      </div>

      {menuOpen && scrolled && (
        <nav className="flex flex-col bg-black/90 backdrop-blur-sm p-6 space-y-3 text-right text-sm absolute right-0 top-full shadow-lg">
          <a
            href={baseUrl + '#home'}
            className="hover:text-green-500 transition"
          >
            Home
          </a>
          <a
            href={baseUrl + '#sobre'}
            className="hover:text-red-500 transition"
          >
            Sobre
          </a>
          <a
            href={baseUrl + '#formacao'}
            className="hover:text-blue-500 transition"
          >
            Formação
          </a>
          <a
            href={baseUrl + '#trabalhos'}
            className="hover:text-yellow-500 transition"
          >
            Trabalhos
          </a>
          <a
            href={baseUrl + '#contato'}
            className="hover:text-purple-500 transition"
          >
            Contato
          </a>
        </nav>
      )}
    </header>
  );
}
