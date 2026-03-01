import { Phone, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block bg-orange-100 text-brand px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            Sankalp Marg Foundation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
            A New Pledge for{' '}
            <span className="text-brand">the Poor</span>
          </h1>
          <p className="text-xl font-bold text-slate-700 mt-3 mb-2">
            Sankalp Garib Kalyan Yojana
          </p>
          <p className="text-base text-slate-500 mt-4 mb-10 leading-relaxed max-w-lg">
            Sankalp Marg Foundation provides free education, healthcare, and employment training to underprivileged families — empowering communities to build a brighter future.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="bg-brand text-white px-8 py-4 rounded-2xl font-black text-base hover:bg-brand-dark transition-all duration-200 shadow-lg shadow-orange-200 flex items-center gap-2 group"
            >
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a
              href="tel:7562038551"
              className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-base hover:bg-emerald-700 transition-all duration-200 shadow-lg shadow-emerald-200 flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-orange-100">
            <div>
              <p className="text-3xl font-black text-brand">10K+</p>
              <p className="text-sm text-slate-500 font-semibold mt-1">Families Helped</p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand">50+</p>
              <p className="text-sm text-slate-500 font-semibold mt-1">Districts Covered</p>
            </div>
            <div>
              <p className="text-3xl font-black text-brand">4</p>
              <p className="text-sm text-slate-500 font-semibold mt-1">Core Programs</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-100 rounded-[2.5rem] rotate-3 opacity-40"></div>
          <img
            src="/assets/generated/hero-community.dim_800x600.png"
            alt="Community members supported by Sankalp Marg Foundation"
            className="relative rounded-[2.5rem] shadow-2xl border-4 border-white w-full max-w-lg object-cover"
          />
          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-3 border border-orange-100">
            <p className="text-xs text-slate-500 font-semibold">Trusted by</p>
            <p className="text-lg font-black text-slate-900">10,000+ Families</p>
          </div>
        </div>
      </div>
    </section>
  );
}
