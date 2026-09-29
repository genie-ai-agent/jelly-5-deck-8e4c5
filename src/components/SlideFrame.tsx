import type { ReactNode } from 'react';

type Props = {
  n: string;
  label: string;
  children: ReactNode;
};

export default function SlideFrame({ n, label, children }: Props) {
  return (
    <section className="flex h-full w-full flex-col px-6 pt-7 pb-24 sm:px-10 sm:pt-9 md:px-16 lg:px-24">
      <header className="flex shrink-0 items-baseline justify-between border-b border-rule pb-3">
        <span className="label">
          <span className="text-ink">{n}</span>
          <span className="mx-2 text-rule">/</span>
          {label}
        </span>
        <span className="label">Jelly Jelly</span>
      </header>

      <div className="slide-enter flex min-h-0 flex-1 flex-col justify-center gap-6 py-6 sm:gap-7 md:gap-8">
        {children}
      </div>
    </section>
  );
}
