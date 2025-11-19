'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="w-full border-t border-zinc-800 
    text-zinc-400 mt-6 text-xl"
    >
      <div className="w-full flex items-center justify-between px-4 py-3">
        <div className="text-center flex-1">Copyleft © 2025</div>

        <button
          onClick={scrollToTop}
          className="px-4 py-2 border-l border-zinc-800 hover:text-zinc-200 transition"
        >
          <ArrowUp size={26} />
        </button>
      </div>
    </footer>
  );
}
