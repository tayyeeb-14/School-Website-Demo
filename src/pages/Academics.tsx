import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Beaker, Palette, Trophy, Music, Code, ArrowRight, Award, Users, Star } from 'lucide-react';
import t1 from '@/assets/t1.png';
import t2 from '@/assets/t2.png';
import t3 from '@/assets/t3.png';
import t4 from '@/assets/t4.png';
import t5 from '@/assets/t5.png';
import t6 from '@/assets/t6.png';
import st1 from '@/assets/st1.png';
import st2 from '@/assets/st2.png';
import st3 from '@/assets/st3.png';
import st4 from '@/assets/st4.png';
import st5 from '@/assets/st5.png';

const programs = [
  {
    id: 'preschool',
    icon: BookOpen,
    title: 'Pre-Primary',
    grades: 'LKG - UKG',
    description: 'A warm and nurturing environment where little learners develop foundational skills through play-based learning, phonics, basic numeracy, and creative expression. Our specially trained educators use interactive, hands-on activities to ensure each child builds confidence and a love for learning.',
    highlights: ['Play-based learning', 'Language development', 'Basic numeracy', 'Art & craft activities', 'Social skills', 'Motor skill development'],
  },
  {
    id: 'primary',
    icon: BookOpen,
    title: 'Primary School',
    grades: 'Class 1 - Class 5',
    description: 'A dynamic and engaging learning environment where young students develop strong foundational skills in English, Hindi, Mathematics, Science, and Social Studies while fostering critical thinking and creativity. Our experienced teachers use interactive, hands-on methods to ensure each child progresses confidently through structured academics.',
    highlights: ['Comprehensive curriculum', 'Language development (English & Hindi)', 'Problem-solving activities', 'Science exploration', 'Co-curricular activities', 'Personality development'],
  },
  {
    id: 'secondary',
    icon: Beaker,
    title: 'Secondary School',
    grades: 'Class 6 - Class 8',
    description: 'A comprehensive program that challenges students academically while supporting their social and emotional growth during adolescence. Students engage with diverse subjects including Science, Mathematics, Languages, Social Studies, and electives, developing independence, analytical skills, and leadership qualities. This phase prepares them excellently for higher secondary challenges.',
    highlights: ['Advanced core subjects', 'Science & Maths labs', 'Language options', 'Computer education', 'Sports & games', 'Co-curricular excellence'],
  },
  // School operates LKG through Class 8
];

const specialPrograms = [
  {
    icon: Beaker,
    title: 'STEM Excellence',
    description: 'Advanced robotics, coding, engineering design, and cutting-edge science courses preparing students for tech-driven careers.',
  },
  {
    icon: Palette,
    title: 'Visual Arts',
    description: 'Drawing, painting, sculpture, digital art, animation, and portfolio development with professional-level instruction.',
  },
  {
    icon: Music,
    title: 'Performing Arts',
    description: 'Orchestra, band, choir, theater productions, and dance performances at professional venues.',
  },
  {
    icon: Trophy,
    title: 'Athletics',
    description: '15+ varsity sports with Olympic-level coaching and state-of-the-art training facilities.',
  },
];

const teachers = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    subject: 'Mathematics',
    expertise: 'Advanced Calculus & AP Prep',
    bio: 'PhD in Mathematics Education with 15+ years of teaching excellence',
    color: 'from-blue-500 to-blue-600',
    photo: t1,
  },
  {
    id: 2,
    name: 'Mr. James Chen',
    subject: 'Science',
    expertise: 'Biology & Environmental Science',
    bio: '12 years of hands-on laboratory teaching and field research',
    color: 'from-green-500 to-green-600',
    photo: t2,
  },
  {
    id: 3,
    name: 'Ms. Emily Rodriguez',
    subject: 'English Literature',
    expertise: 'Creative Writing & Analysis',
    bio: 'Award-winning author and passionate educator with 14 years experience',
    color: 'from-purple-500 to-purple-600',
    photo: t3,
  },
  {
    id: 4,
    name: 'Mr. David Park',
    subject: 'Computer Science',
    expertise: 'Programming & Web Development',
    bio: 'Former software engineer with 10 years in tech education',
    color: 'from-orange-500 to-orange-600',
    photo: t4,
  },
  {
    id: 5,
    name: 'Dr. Maria Gonzalez',
    subject: 'History & Social Studies',
    expertise: 'Global Perspectives & Research',
    bio: 'PhD in History, published researcher with international teaching experience',
    color: 'from-red-500 to-red-600',
    photo: t5,
  },
  {
    id: 6,
    name: 'Ms. Lisa Anderson',
    subject: 'Visual Arts',
    expertise: 'Fine Art & Digital Media',
    bio: 'Contemporary artist and exhibition curator with 11 years teaching',
    color: 'from-pink-500 to-pink-600',
    photo: t6,
  },
  {
    id: 7,
    name: 'Mr. Christopher James',
    subject: 'Physical Education',
    expertise: 'Athletics & Wellness Leadership',
    bio: 'Olympic level coaching credentials and sports science expertise',
    color: 'from-yellow-500 to-yellow-600',
    photo: t1,
  },
  {
    id: 8,
    name: 'Ms. Priya Sharma',
    subject: 'Foreign Languages',
    expertise: 'Spanish & Mandarin Chinese',
    bio: 'Native speaker with 13 years of immersive language instruction',
    color: 'from-cyan-500 to-cyan-600',
    photo: t2,
  },
  {
    id: 9,
    name: 'Dr. Robert Mitchell',
    subject: 'Physics & Engineering',
    expertise: 'STEM Innovation & Robotics',
    bio: 'PhD in Engineering with industry patents and startup mentorship',
    color: 'from-violet-500 to-violet-600',
    photo: t3,
  },
];

const topStudents = [
  { id: 1, name: 'Arjun Sharma', class: 'LKG', achievement: 'Play-Based Learning Star', percentage: '98%', color: 'from-blue-500 to-blue-600', photo: st1 },
  { id: 2, name: 'Priya Patel', class: 'Class 1', achievement: 'Reading Champion', percentage: '97%', color: 'from-purple-500 to-purple-600', photo: st2 },
  { id: 3, name: 'Rahul Verma', class: 'Class 3', achievement: 'Math Whiz', percentage: '96%', color: 'from-green-500 to-green-600', photo: st3 },
  { id: 4, name: 'Isha Gupta', class: 'Class 5', achievement: 'Debate Star', percentage: '95%', color: 'from-pink-500 to-pink-600', photo: st4 },
  { id: 5, name: 'Aditya Singh', class: 'Class 6', achievement: 'Young Coder', percentage: '94%', color: 'from-orange-500 to-orange-600', photo: st5 },
  { id: 6, name: 'Shreya Desai', class: 'Class 8', achievement: 'Artist in Residence', percentage: '94%', color: 'from-red-500 to-red-600', photo: st1 },
];

export default function Academics() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-school">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Academics
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Challenging Minds,<br />
              <span className="text-gold">Inspiring Growth</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Our comprehensive curriculum prepares students for success at every stage
              of their educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
              Our Programs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Academic Divisions
            </h2>
            <p className="text-muted-foreground text-lg">
              Three distinct divisions tailored to each developmental stage.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="bg-card rounded-2xl p-8 md:p-10 shadow-school-md border border-border/50 scroll-mt-32"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                        <program.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground">
                          {program.title}
                        </h3>
                        <span className="text-gold font-medium">{program.grades}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/admissions" className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-cream-dark rounded-xl p-6">
                    <h4 className="font-display font-semibold text-foreground mb-4">
                      Program Highlights
                    </h4>
                    <ul className="space-y-3">
                      {program.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-gold" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section id="programs" className="section-padding bg-cream-dark scroll-mt-32">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
              Beyond the Classroom
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Special Programs
            </h2>
            <p className="text-muted-foreground text-lg">
              Enrichment opportunities that develop well-rounded individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((program) => (
              <div
                key={program.title}
                className="bg-card rounded-2xl p-8 text-center shadow-school-sm hover:shadow-school-md transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                  <program.icon className="w-8 h-8 text-gold-dark" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty & Teachers Section */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
              Our Excellence
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-gold" />
              Award-Winning Faculty
            </h2>
            <p className="text-muted-foreground text-lg">
              Our distinguished educators are leaders in their fields with deep expertise and a passion for inspiring the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-school-md hover:shadow-school-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Profile Photo Placeholder */}
                <div className={`h-64 bg-gradient-to-br ${teacher.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="text-center relative z-10">
                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white/70">
                        {teacher.name.charAt(0)}
                      </span>
                    </div>
                    <Award className="w-8 h-8 text-white/40 mx-auto" />
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-gold font-semibold text-sm mb-3">
                    {teacher.subject}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    <span className="inline-block bg-gold/10 px-3 py-1 rounded-full text-gold">
                      {teacher.expertise}
                    </span>
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-gold/5 to-blue-500/5 rounded-2xl p-8 md:p-12 border border-gold/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">500+</div>
                <p className="text-muted-foreground">Student Success Stories</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">95%</div>
                <p className="text-muted-foreground">College Acceptance Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gold mb-2">40+</div>
                <p className="text-muted-foreground">Award-Winning Teachers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Students Section */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
              Student Excellence
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-gold" />
              Top Achievers
            </h2>
            <p className="text-muted-foreground text-lg">
              Celebrating our outstanding students who excel academically and in competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topStudents.map((student) => (
              <div
                key={student.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-school-md hover:shadow-school-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Student Header with photo */}
                <div className="h-40 relative overflow-hidden">
                  <img src={student.photo} alt={student.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute left-4 -bottom-10 z-10">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                      <img src={student.photo} alt={student.name} className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                </div>

                {/* Student Info */}
                <div className="p-6 pt-10">
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {student.name}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-4 font-medium">
                    {student.class}
                  </p>
                  <p className="text-sm text-gold font-semibold mb-4 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {student.achievement}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gold">
                        {student.percentage}
                      </div>
                      <p className="text-muted-foreground text-xs">Achievement Score</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-school text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Educational Journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience our world-class academics firsthand. Schedule a personalized campus tour to meet our faculty, explore our facilities, and discover why students thrive at our institution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Schedule a Tour
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-navy">
              View Our Programs
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
