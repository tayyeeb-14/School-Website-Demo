import a1 from '@/assets/a1.png';
import a2 from '@/assets/a2.png';
import a3 from '@/assets/a3.png';
import a4 from '@/assets/a4.png';
import a5 from '@/assets/a5.png';
import a6 from '@/assets/a6.png';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

const images = [a1, a2, a3, a4, a5, a6];

export function AssetsSlider() {
  const scroller = useRef<HTMLDivElement | null>(null);

  function scrollBy(offset: number) {
    if (!scroller.current) return;
    scroller.current.scrollBy({ left: offset, behavior: 'smooth' });
  }

  // Auto-scroll every 2 seconds
  useEffect(() => {
    if (!scroller.current) return;
    const node = scroller.current;
    const timer = window.setInterval(() => {
      const { scrollLeft, clientWidth, scrollWidth } = node;
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        node.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        node.scrollBy({ left: clientWidth, behavior: 'smooth' });
      }
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="my-8">
      <div className="relative">
        <div className="hidden md:flex gap-4 absolute -left-2 top-1/2 -translate-y-1/2 z-20">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-400)}
            className="w-10 h-10 rounded-full bg-card shadow flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={scroller}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 py-2 md:px-0 md:py-0"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="snap-center flex-shrink-0 w-11/12 sm:w-8/12 md:w-80 lg:w-96 rounded-2xl overflow-hidden bg-card"
            >
              <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>

        <div className="hidden md:flex gap-4 absolute -right-2 top-1/2 -translate-y-1/2 z-20">
          <button
            aria-label="Next"
            onClick={() => scrollBy(400)}
            className="w-10 h-10 rounded-full bg-card shadow flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
