import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/academics', label: 'Academics' },
  { href: '/news', label: 'News' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-school-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-school">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Riverside Academy Home"
          >
            <div className={cn(
              'flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300',
              isScrolled ? 'bg-primary' : 'bg-primary-foreground/20 backdrop-blur-sm'
            )}>
              <GraduationCap className={cn(
                'w-7 h-7 transition-colors',
                isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'
              )} />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                'font-display text-xl font-bold transition-colors',
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              )}>
                INSIGHT VISIONARY SCHOOL

              </span>
              <span className={cn(
                'text-xs tracking-wider uppercase transition-colors',
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/70'
              )}>
              Unlocking potential, Enriching lives
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-200',
                  location.pathname === link.href
                    ? isScrolled
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-primary-foreground/20 text-primary-foreground'
                    : isScrolled
                      ? 'text-foreground hover:bg-muted'
                      : 'text-primary-foreground/90 hover:bg-primary-foreground/10'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button
              variant={isScrolled ? 'gold' : 'hero'}
              size="sm"
              className="ml-4"
              asChild
            >
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-foreground hover:bg-muted'
                : 'text-primary-foreground hover:bg-primary-foreground/10'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          )}
        >
          <div className="bg-card rounded-xl shadow-school-lg p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'block px-4 py-3 rounded-lg font-medium transition-colors',
                  location.pathname === link.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
            {/* <Button variant="gold" className="w-full mt-4" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
