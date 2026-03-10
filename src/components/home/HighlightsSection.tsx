import { Link } from 'react-router-dom';
import { GraduationCap, Users, Trophy, BookOpen, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Rigorous curriculum designed to challenge and inspire students at every level.',
    link: '/academics',
  },
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'A nurturing environment where every student feels valued and supported.',
    link: '/about',
  },
  {
    icon: Trophy,
    title: 'Championship Athletics',
    description: 'State-of-the-art facilities and competitive sports programs for all skill levels.',
    link: '/academics#athletics',
  },
  {
    icon: BookOpen,
    title: 'Arts & Creativity',
    description: 'Comprehensive arts programs including visual arts, music, theater, and more.',
    link: '/academics#arts',
  },
];

export function HighlightsSection() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-school">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Foundation for Lifelong Success
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide a comprehensive education that develops the whole child—academically,
            socially, and emotionally.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Link
              key={item.title}
              to={item.link}
              className="group bg-card rounded-2xl p-8 shadow-school-sm hover:shadow-school-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-6 group-hover:bg-navy group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-navy group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-navy font-medium group-hover:text-gold transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
