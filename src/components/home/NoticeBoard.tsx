import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Bell, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const getTodayDate = () => {
  const today = new Date();
  return today.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
};

const dailyNotice = {
  id: 'today',
  title: '📢 Daily School Notice',
  date: getTodayDate(),
  category: 'Daily Update',
  details: [
    'Classes will resume at 8:00 AM sharp',
    'Assembly at 8:15 AM - All students must attend',
    'Sports practice after school hours (4:00 PM - 6:00 PM)',
    'Library remains open till 5:00 PM',
    'School transport will depart at 4:30 PM and 5:30 PM',
  ],
};

const notices = [
  {
    id: 1,
    title: 'Winter Break Schedule 2025',
    date: 'December 20, 2025',
    category: 'Important',
    excerpt: 'School will be closed from December 23rd to January 3rd. Classes resume on January 6th.',
    isNew: true,
  },
  {
    id: 2,
    title: 'Science Fair Registration Open',
    date: 'December 15, 2025',
    category: 'Events',
    excerpt: 'Register now for the annual Science Fair. Deadline for submissions is January 15th.',
    isNew: true,
  },
  {
    id: 3,
    title: 'Parent-Teacher Conference',
    date: 'December 10, 2025',
    category: 'Meetings',
    excerpt: 'Schedule your appointment for the winter term parent-teacher conferences.',
    isNew: false,
  },
  {
    id: 4,
    title: 'Basketball Team Tryouts',
    date: 'December 5, 2025',
    category: 'Athletics',
    excerpt: 'Open tryouts for the varsity basketball team. All interested students welcome.',
    isNew: false,
  },
];

const categoryColors: Record<string, string> = {
  'Daily Update': 'bg-gold/20 text-gold-dark',
  Important: 'bg-destructive/10 text-destructive',
  Events: 'bg-gold/20 text-gold-dark',
  Meetings: 'bg-navy/10 text-navy',
  Athletics: 'bg-green-100 text-green-700',
};

export function NoticeBoard() {
  return (
    <section className="section-padding bg-background">
      <div className="container-school">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Daily Notice */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold flex items-center justify-center animate-pulse">
                  <Bell className="w-6 h-6 text-navy-dark" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Notice Board
                  </h2>
                  <p className="text-gold font-semibold text-sm">A Foundation for Lifelong Success</p>
                  <p className="text-muted-foreground text-xs">Today's Updates</p>
                </div>
              </div>

              {/* Today's Daily Notice */}
              <div className="bg-gradient-to-br from-gold/20 to-gold/10 rounded-xl p-6 mb-6 border border-gold/30">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-foreground text-sm uppercase tracking-wide">Today's Notice</p>
                    <p className="text-muted-foreground text-xs">{dailyNotice.date}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {dailyNotice.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                      <span className="text-gold-dark font-bold">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-muted-foreground mb-6 text-sm">
                Important announcements, events, and updates from Riverside Academy.
                Check back regularly for the latest information.
              </p>

              <Button variant="navy" asChild>
                <Link to="/news" className="flex items-center gap-2">
                  View All Notices
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Notice Cards */}
          <div className="lg:col-span-2 space-y-4">
            {notices.map((notice, index) => (
              <article
                key={notice.id}
                className="group bg-card rounded-xl p-6 shadow-school-sm hover:shadow-school-md transition-all duration-300 border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[notice.category]}`}>
                        {notice.category}
                      </span>
                      {notice.isNew && (
                        <span className="px-2 py-0.5 bg-gold text-navy-dark text-xs font-bold rounded">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-navy transition-colors mb-2">
                      {notice.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {notice.excerpt}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    {notice.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
