import SlideFrame from '../SlideFrame';
import { useOfFunds, traction } from '../../data/deck';

export default function Raise() {
  return (
    <SlideFrame n="05" label="The Raise">
      <div>
        <span className="label text-ink">We are raising</span>
        <h1 className="num mt-1 font-display text-[clamp(4rem,18vw,11rem)] font-semibold leading-[0.82] tracking-[-0.05em]">
          $5<span className="text-jelly">M</span>
        </h1>
      </div>

      <p className="body-lg max-w-[50ch]">
        To build the agentic layer on top of social and payments, and to take Jelly from{' '}
        <span className="text-ink">2K monthly actives to 1M</span> over the next two years.
      </p>

      <div className="grid gap-0 sm:grid-cols-3 sm:gap-8">
        {useOfFunds.map((f) => (
          <div
            key={f.h}
            className="border-t border-rule py-4 sm:border-t-2 sm:border-t-ink sm:py-0 sm:pt-4"
          >
            <h3 className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.25rem]">
              {f.h}
            </h3>
            <p className="body-sm mt-1.5 max-w-[34ch]">{f.b}</p>
          </div>
        ))}
      </div>

      <dl className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-rule pt-4">
        {traction.map((t) => (
          <div key={t.k} className="flex items-baseline gap-2">
            <dt className="num text-[1.125rem] font-semibold tracking-[-0.03em] text-ink sm:text-[1.5rem]">
              {t.v}
            </dt>
            <dd className="label">{t.k}</dd>
          </div>
        ))}
      </dl>
    </SlideFrame>
  );
}
