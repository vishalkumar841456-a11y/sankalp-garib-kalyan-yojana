import { Heart, BookOpen, Wheat, Users } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Free Healthcare',
    description: 'Better treatment and free medicines for every underprivileged family across India.',
    color: 'text-brand',
    bg: 'bg-orange-50',
  },
  {
    icon: BookOpen,
    title: 'Quality Education',
    description: 'Free books, scholarships, and learning resources for children from poor families.',
    color: 'text-brand',
    bg: 'bg-amber-50',
  },
  {
    icon: Wheat,
    title: 'Farmer Welfare',
    description: 'Financial aid and technical support to help farmers grow and sustain their livelihoods.',
    color: 'text-brand',
    bg: 'bg-orange-50',
  },
  {
    icon: Users,
    title: 'Employment Mission',
    description: 'Skill training and livelihood support programs empowering women and youth.',
    color: 'text-brand',
    bg: 'bg-amber-50',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-brand px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Our Key Services
          </h2>
          <div className="w-20 h-1.5 bg-brand mx-auto mt-5 rounded-full"></div>
          <p className="text-slate-500 mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Sankalp Marg Foundation is committed to uplifting underprivileged communities through four core welfare programs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-8 bg-slate-50 rounded-3xl border-2 border-transparent hover:border-brand hover:bg-white transition-all duration-300 text-center cursor-default shadow-sm hover:shadow-xl hover:shadow-orange-100"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} className={service.color} strokeWidth={2} />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
