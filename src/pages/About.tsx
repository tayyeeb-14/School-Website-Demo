import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honesty and ethical behavior form the foundation of our community.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We foster a supportive environment where everyone belongs.',
  },
  {
    icon: BookOpen,
    title: 'Curiosity',
    description: 'We encourage questioning, exploration, and lifelong learning.',
  },
];

const milestones = [
  { year: '2024', event: 'Insight Visionary School founded and first campus opened (LKG–Class 5)' },
  { year: '2024', event: 'Early years program (LKG/UKG) launched with play-based curriculum' },
  { year: '2025', event: 'Primary and middle school programs expanded to Class 6–8' },
  { year: '2025', event: 'State-of-the-art STEM lab and maker space inaugurated' },
  { year: '2025', event: 'Arts studio and performance space opened; annual cultural festival introduced' },
  { year: '2025', event: 'Recognized for excellence in holistic education by regional education board' },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-school">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              A Foundation for Lifelong Success<br />
              <span className="text-gold">INSIGHT VISIONARY SCHOOL</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              INSIGHT VISIONARY SCHOOL (formerly Riverside Academy) provides a caring,
              student-centered learning environment from LKG through Class 8. We combine
              strong academic foundations with character education, creative arts,
              and athletics to prepare children for future study and life.
            </p>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mt-4">
              Our experienced faculty, modern campus facilities, and focus on individual
              growth ensure every child builds confidence, curiosity, and the skills
              needed to succeed in an ever-changing world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-school-md border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To nurture every child’s intellectual, emotional, and social development
                through a balanced curriculum that blends academic rigor with creativity,
                inquiry-based learning, and values education. We aim to develop confident,
                compassionate learners who think critically and act responsibly.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-school-md border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-navy-dark" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a caring school that inspires lifelong learning
                and empowers students from early years through middle school to
                become thoughtful global citizens. We envision graduates who are
                academically capable, emotionally resilient, and ready to lead with
                integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-cream-dark">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide every decision we make and every
              interaction within our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 text-center shadow-school-sm hover:shadow-school-md transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-navy" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center text-primary-foreground font-display font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-4" />
                  )}
                </div>
                <div className="pt-4">
                  <p className="text-foreground font-medium text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-cream-dark">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Campus & Facilities</h2>
            <p className="text-muted-foreground">Modern, safe, and inspiring spaces that support learning and exploration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-2xl p-6 text-center">
              <h3 className="font-display font-semibold text-foreground mb-2">Smart Classrooms</h3>
              <p className="text-sm text-muted-foreground">Interactive learning with digital resources and flexible seating.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center">
              <h3 className="font-display font-semibold text-foreground mb-2">STEM Lab</h3>
              <p className="text-sm text-muted-foreground">Hands-on science, robotics and coding for early innovators.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center">
              <h3 className="font-display font-semibold text-foreground mb-2">Arts & Music Studio</h3>
              <p className="text-sm text-muted-foreground">Dedicated studios for visual arts, music, and performance.</p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center">
              <h3 className="font-display font-semibold text-foreground mb-2">Sports Facilities</h3>
              <p className="text-sm text-muted-foreground">Playgrounds, courts, and expert coaching for fitness and teamwork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Approach */}
      <section className="section-padding bg-background">
        <div className="container-school max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Approach to Learning</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We deliver a balanced curriculum focused on conceptual understanding,
            foundational skills, and project-based learning. Teachers differentiate
            instruction to meet individual needs and use formative assessment to guide progress.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From LKG to Class 8, students experience a rich mix of literacy, numeracy,
            science, social studies, creative arts, physical education, and technology.
            Co-curricular activities and clubs extend classroom learning and build leadership.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-cream-dark">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership & Faculty</h2>
            <p className="text-muted-foreground">A dedicated leadership team and experienced teachers guide academic and pastoral care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 text-center">
              <h3 className="font-display font-semibold text-foreground">Chairman</h3>
              <p className="text-sm text-muted-foreground">Mr. Rajiv Kumar</p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center">
              <h3 className="font-display font-semibold text-foreground">Principal</h3>
              <p className="text-sm text-muted-foreground">Dr. Neha Iyer</p>
            </div>
            <div className="bg-card rounded-2xl p-6 text-center">
              <h3 className="font-display font-semibold text-foreground">Managing Director</h3>
              <p className="text-sm text-muted-foreground">Mr. Arun Mehta</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-school text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Discover how Riverside Academy can help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
