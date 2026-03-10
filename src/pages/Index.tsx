import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { HighlightsSection } from '@/components/home/HighlightsSection';
import { NoticeBoard } from '@/components/home/NoticeBoard';
import { CTASection } from '@/components/home/CTASection';
import { AssetsSlider } from '@/components/home/AssetsSlider';
import { Award, Users } from 'lucide-react';
import t1 from '@/assets/t1.png';
import t2 from '@/assets/t2.png';
import t3 from '@/assets/t3.png';
import t4 from '@/assets/t4.png';
import t5 from '@/assets/t5.png';
import t6 from '@/assets/t6.png';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredTeachers = [
  { id: 1, name: 'Mr. Rajiv Kumar', title: 'Chairman', role: 'Chairman', photo: t1 },
  { id: 2, name: 'Mrs. Sunita Rao', title: 'Vice Chairman', role: 'Vice Chairman', photo: t2 },
  { id: 3, name: 'Mr. Arun Mehta', title: 'Managing Director (MD)', role: 'Managing Director', photo: t3 },
  { id: 4, name: 'Dr. Neha Iyer', title: 'Principal', role: 'Principal', photo: t4 },
  { id: 5, name: 'Mr. Suresh Nair', title: 'Administrator', role: 'Administrator', photo: t5 },
  { id: 6, name: 'Ms. Rekha Singh', title: 'Head of Academics', role: 'Head of Academics', photo: t6 },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <NoticeBoard />
      <div className="container-school">
        <AssetsSlider />
      </div>
      
      {/* Featured Teachers Section */}
      <section className="section-padding bg-cream-dark">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
              Our Excellence
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-gold" />
              Featured Faculty
            </h2>
            <p className="text-muted-foreground text-lg">
              Meet some of our award-winning teachers who make a difference every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-school-md hover:shadow-school-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute left-4 -bottom-16 z-10">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                      <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-10">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-gold font-semibold text-xs mb-2">
                    {teacher.title}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {teacher.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="navy" size="lg" asChild>
              <Link to="/academics" className="flex items-center gap-2">
                Meet Our Complete Faculty
                <Award className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <HighlightsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
