import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'sankalp-garib-kalyan');

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
        {/* Column 1: Logo & Tagline */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/assets/generated/sankalp-logo.dim_256x256.png"
              alt="Sankalp Marg Foundation"
              className="h-14 w-14 object-contain brightness-0 invert"
            />
            <div>
              <p className="font-black text-white text-base leading-tight">Sankalp Marg</p>
              <p className="text-brand text-sm font-bold leading-tight">Foundation</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Sankalp Marg Foundation is always ready to serve the underprivileged — bringing hope, health, and opportunity to every corner of India.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-brand font-black text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-slate-400">
            <li>
              <button
                onClick={() => scrollTo('home')}
                className="hover:text-white transition-colors duration-200 text-sm font-semibold"
              >
                Main Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo('services')}
                className="hover:text-white transition-colors duration-200 text-sm font-semibold"
              >
                Yojana Jankari
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo('contact')}
                className="hover:text-white transition-colors duration-200 text-sm font-semibold"
              >
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Details */}
        <div>
          <h4 className="text-brand font-black text-lg mb-6">Official Address</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-slate-400">
              <Mail size={18} className="text-brand mt-0.5 shrink-0" />
              <a
                href="mailto:vishalkumar841456@gmail.com"
                className="hover:text-white transition-colors duration-200 text-sm font-semibold break-all"
              >
                vishalkumar841456@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4 text-slate-400">
              <Phone size={18} className="text-brand shrink-0" />
              <a
                href="tel:7562038551"
                className="hover:text-white transition-colors duration-200 text-sm font-semibold"
              >
                7562038551
              </a>
            </li>
            <li className="flex items-center gap-4 text-slate-400">
              <MapPin size={18} className="text-brand shrink-0" />
              <span className="text-sm font-semibold">New Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>© {year} Sankalp Marg Foundation. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with{' '}
          <Heart size={14} className="text-brand fill-brand" />{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand hover:text-brand-dark transition-colors duration-200 font-semibold"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
