import SlideFrame from '../SlideFrame';

const dots = [
  { w: 'Live', note: 'where and how' },
  { w: 'Share', note: 'with whom, on whose terms' },
  { w: 'Work', note: 'if work even exists' },
];

export default function Thesis() {
  return (
    <SlideFrame n="01" label="Thesis">
      <div className="flex items-center gap-4">
        <span className="wobble inline-block h-7 w-7 bg-jelly sm:h-9 sm:w-9" aria-hidden="true" />
        <span className="label text-ink">Connecting the dots</span>
      </div>

      <h1 className="headline max-w-[22ch]">
        We are not building the core
        <br className="hidden sm:block" /> infrastructure in AI.
      </h1>

      <p className="body-lg max-w-[54ch]">
        We are connecting the dots on all this new technology — on how people in the future will{' '}
        <span className="text-ink">live</span>, <span className="text-ink">share</span> and{' '}
        <span className="text-ink">work</span>.{' '}
        <span className="deck-serif text-ink">If work even exists.</span>
      </p>

      <ul className="grid gap-0 border-t border-rule sm:grid-cols-3 sm:gap-8 sm:border-t-0">
        {dots.map((d, i) => (
          <li
            key={d.w}
            className="flex items-baseline gap-4 border-b border-rule py-4 sm:block sm:border-b-0 sm:border-t-2 sm:border-t-ink sm:py-0 sm:pt-4"
          >
            <span className="headline-sm block leading-none">
              {d.w}
              {i === 2 && <span className="text-jelly">?</span>}
            </span>
            <span className="body-sm block sm:mt-2">{d.note}</span>
          </li>
        ))}
      </ul>
    </SlideFrame>
  );
}
