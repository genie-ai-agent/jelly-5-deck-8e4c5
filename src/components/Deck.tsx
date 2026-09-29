import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { slideMeta } from '@/data/deck';
import Thesis from './slides/Thesis';
import Problem from './slides/Problem';
import Solution from './slides/Solution';
import Team from './slides/Team';
import Raise from './slides/Raise';

const slides = [Thesis, Problem, Solution, Team, Raise];

export default function Deck() {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setI((cur) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, next));
      return clamped === cur ? cur : clamped;
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setI((c) => Math.min(slides.length - 1, c + 1));
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setI((c) => Math.max(0, c - 1));
      }
      if (e.key === 'Home') setI(0);
      if (e.key === 'End') setI(slides.length - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const Current = slides[i];
  const meta = slideMeta[i];

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden bg-paper"
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX;
        touchX.current = null;
        if (start == null || end == null) return;
        const dx = end - start;
        if (Math.abs(dx) < 44) return;
        go(dx < 0 ? i + 1 : i - 1);
      }}
    >
      <div key={i} className="h-full w-full">
        <Current />
      </div>

      {/* progress hairline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-rule/60">
        <div
          className="h-full bg-jelly transition-[width] duration-500 ease-out"
          style={{ width: `${((i + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* nav */}
      <nav className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-6 pb-5 sm:px-10 md:px-16 lg:px-24">
        <span className="label num hidden sm:inline">{meta.label}</span>

        <div className="flex w-full items-center justify-between sm:w-auto sm:gap-5">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous slide"
            disabled={i === 0}
            onClick={() => go(i - 1)}
            className="nav-btn h-11 w-11 rounded-none border-ink/25 bg-transparent text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          </Button>

          <div className="flex items-center gap-4">
            <span className="label num text-ink">
              {meta.n} <span className="text-rule">—</span> 0{slides.length}
            </span>
            <div className="flex items-center gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to slide ${idx + 1}`}
                  onClick={() => go(idx)}
                  className={cn(
                    'dot h-[3px] rounded-none',
                    idx === i ? 'w-7 bg-ink' : 'w-3.5 bg-rule hover:bg-ink-faint',
                  )}
                />
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            aria-label="Next slide"
            disabled={i === slides.length - 1}
            onClick={() => go(i + 1)}
            className="nav-btn h-11 w-11 rounded-none border-ink/25 bg-transparent text-ink"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </Button>
        </div>

        <span className="label hidden sm:inline">jellyjelly.com</span>
      </nav>
    </main>
  );
}
