import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/assets/generated/sankalp-logo.dim_256x256.png"
            alt="Sankalp Marg Foundation Logo"
            className="h-12 w-12 object-contain"
          />
          <div className="hidden sm:block">
            <p className="font-black text-slate-900 text-sm leading-tight">Sankalp Marg</p>
            <p className="text-brand text-xs font-bold leading-tight">Foundation</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-bold text-slate-700">
          <button onClick={() => scrollTo('home')} className="hover:text-brand transition-colors duration-200">
            Home
          </button>
          <button onClick={() => scrollTo('services')} className="hover:text-brand transition-colors duration-200">
            Yojana
          </button>
          <button onClick={() => scrollTo('contact')} className="hover:text-brand transition-colors duration-200">
            Sampark
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:7562038551"
            className="hidden sm:flex items-center gap-2 font-bold text-brand hover:text-brand-dark transition-colors duration-200"
          >
            <Phone size={16} />
            <span>7562038551</span>
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-brand text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-brand-dark transition-colors duration-200 text-sm"
          >
            Register
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-slate-700 hover:text-brand transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-4 shadow-lg">
          <button
            onClick={() => scrollTo('home')}
            className="text-left font-bold text-slate-700 hover:text-brand transition-colors py-2"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="text-left font-bold text-slate-700 hover:text-brand transition-colors py-2"
          >
            Yojana
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-left font-bold text-slate-700 hover:text-brand transition-colors py-2"
          >
            Sampark
          </button>
          <a
            href="tel:7562038551"
            className="flex items-center gap-2 font-bold text-brand py-2"
          >
            <Phone size={16} />
            7562038551
          </a>
        </div>
      )}
    </header>
  );
}
