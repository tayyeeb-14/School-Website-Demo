import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroCampus from '@/assets/hero-campus.jpeg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Riverside Academy campus with students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container-school relative z-10 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Admissions Open for 2025-26
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Nurturing Young Minds for a<br />
            <span className="text-gold">Brighter Tomorrow</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl animate-fade-up animation-delay-200">
            INSIGHT VISIONARY SCHOOL is committed to providing quality education in a
            safe, inclusive, and nurturing environment.

          </p>

          {/* Compact Daily Notice Banner */}
          <div className="bg-gold/10 border border-gold/20 rounded-xl p-4 max-w-xl animate-fade-up animation-delay-250 mb-8">
            <div className="flex items-start gap-3">
              <div className="text-gold font-bold">Daily Notice</div>
              <div className="text-sm text-primary-foreground/90">
                Classes resume at 8:00 AM. Assembly at 8:15 AM. <span className="font-medium">View full notices</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/admissions" className="flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/about" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Our Story
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-primary-foreground/20 animate-fade-up animation-delay-400">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">2024</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Year of Establishment</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">LKG – Class VIII</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Classes Offered</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-gold">Holistic Education</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Academics + Values</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 animate-bounce">
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
