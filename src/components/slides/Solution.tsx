import SlideFrame from '../SlideFrame';

const steps = [
  {
    n: '1',
    h: 'You say it',
    b: 'A 15-second jelly, off the cuff. Public, or just to one person.',
  },
  {
    n: '2',
    h: 'The agent does it',
    b: 'Books the reservation, captions the moment, finds the right people, moves the money.',
  },
  {
    n: '3',
    h: 'Anyone can pay',
    b: 'Payment rails on Solana, so digital money reaches every human.',
  },
];

export default function Solution() {
  return (
    <SlideFrame n="03" label="The Solution">
      <div className="flex items-center gap-4">
        <span className="wobble inline-block h-7 w-7 bg-jelly sm:h-9 sm:w-9" aria-hidden="true" />
        <span className="label text-ink">Introducing Jelly</span>
      </div>

      <h1 className="headline max-w-[20ch]">
        Agentic social media,
        <br />
        <span className="text-jelly">payments built in.</span>
      </h1>

      <p className="body-lg max-w-[52ch]">
        Say you want to pay for a restaurant reservation — we&rsquo;re there. Jelly has its own
        currency, <span className="text-ink">Wobbles</span>, built on Solana.
      </p>

      <ol className="grid gap-0 sm:grid-cols-3 sm:gap-8">
        {steps.map((s) => (
          <li
            key={s.n}
            className="border-t border-rule py-4 sm:border-t-2 sm:border-t-ink sm:py-0 sm:pt-4"
          >
            <span className="label num text-jelly">Step {s.n}</span>
            <h3 className="mt-1.5 text-[1.125rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.375rem]">
              {s.h}
            </h3>
            <p className="body-sm mt-1.5 max-w-[34ch]">{s.b}</p>
          </li>
        ))}
      </ol>
    </SlideFrame>
  );
}
