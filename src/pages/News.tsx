import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, Search, ImageIcon } from 'lucide-react';
import a1 from '@/assets/a1.png';
import a2 from '@/assets/a2.png';
import a3 from '@/assets/a3.png';
import a4 from '@/assets/a4.png';
import a5 from '@/assets/a5.png';
import a6 from '@/assets/a6.png';
import { useState } from 'react';

const categories = ['All', 'Announcements', 'Events', 'Athletics', 'Arts', 'Academic'];

const newsItems = [
  {
    id: 1,
    title: 'Science Fair Winners Announced',
    date: 'December 20, 2025',
    category: 'Academic',
    excerpt: 'Congratulations to all participants in this year\'s Science Fair! See the full list of award winners and their innovative projects.',
    featured: true,
    image: a1,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Winter Concert Series Begins',
    date: 'December 18, 2025',
    category: 'Arts',
    excerpt: 'Join us for our annual winter concert featuring performances from our orchestra, band, and choir students.',
    featured: true,
    image: a2,
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 3,
    title: 'Basketball Team Advances to Regionals',
    date: 'December 15, 2025',
    category: 'Athletics',
    excerpt: 'Our varsity basketball team has secured their spot in the regional championships after a thrilling victory.',
    featured: false,
    image: a3,
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 4,
    title: 'New STEM Lab Opening in January',
    date: 'December 12, 2025',
    category: 'Announcements',
    excerpt: 'We are excited to announce the opening of our new state-of-the-art STEM laboratory, featuring cutting-edge equipment.',
    featured: false,
    image: a4,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 5,
    title: 'Parent-Teacher Conference Schedule',
    date: 'December 10, 2025',
    category: 'Announcements',
    excerpt: 'Schedule your winter term parent-teacher conference. Online booking is now available.',
    featured: false,
    image: a5,
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 6,
    title: 'Drama Club Presents: A Winter\'s Tale',
    date: 'December 8, 2025',
    category: 'Events',
    excerpt: 'Don\'t miss our drama club\'s production of Shakespeare\'s A Winter\'s Tale. Tickets available now.',
    featured: false,
    image: a6,
    color: 'from-red-500 to-red-600',
  },
  {
    id: 7,
    title: 'College Application Workshop',
    date: 'December 5, 2025',
    category: 'Academic',
    excerpt: 'Senior students are invited to attend our college application workshop with admissions experts.',
    featured: false,
    image: a1,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 8,
    title: 'Holiday Break Reminders',
    date: 'December 1, 2025',
    category: 'Announcements',
    excerpt: 'Important information about the upcoming holiday break, including office hours and emergency contacts.',
    featured: false,
    image: a2,
    color: 'from-yellow-500 to-yellow-600',
  },
];

const categoryColors: Record<string, string> = {
  Announcements: 'bg-navy/10 text-navy',
  Events: 'bg-gold/20 text-gold-dark',
  Athletics: 'bg-green-100 text-green-700',
  Arts: 'bg-pink-100 text-pink-700',
  Academic: 'bg-blue-100 text-blue-700',
};

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = newsItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews.filter((item) => item.featured);
  const regularNews = filteredNews.filter((item) => !item.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-school">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              News & Events
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Stay Connected<br />
              <span className="text-gold">With Riverside</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              The latest news, announcements, and events from our school community.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-cream-dark border-b border-border sticky top-20 z-40">
        <div className="container-school">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-navy text-primary-foreground'
                      : 'bg-card text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="section-padding bg-background">
        <div className="container-school">
          {/* Featured News */}
          {featuredNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {featuredNews.map((item) => (
                <article
                  key={item.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-school-md hover:shadow-school-lg transition-all duration-300"
                >
                    <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    </div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-navy transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Regular News */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <article
                key={item.id}
                className="group bg-card rounded-xl overflow-hidden shadow-school-sm hover:shadow-school-md transition-all duration-300 border border-border/50"
              >
                <div className="h-40 relative overflow-hidden rounded-t-xl">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <ArrowRight className="w-4 h-4 text-navy group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No news found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-school text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Never Miss an Update
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest news directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
