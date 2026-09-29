import SlideFrame from '../SlideFrame';
import { team, investors } from '../../data/deck';

export default function Team() {
  return (
    <SlideFrame n="04" label="The Team">
      <h1 className="headline max-w-[16ch]">
        The team behind <span className="deck-serif">Venmo</span>.
      </h1>

      <ul className="border-t border-ink">
        {team.map((m) => (
          <li
            key={m.name}
            className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule py-3 sm:py-3.5"
          >
            <span className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-ink sm:text-[1.375rem]">
              {m.name}
            </span>
            <span className="label text-jelly">{m.role}</span>
            {m.note && <span className="body-sm ml-auto text-right">{m.note}</span>}
          </li>
        ))}
      </ul>

      <p className="body-sm max-w-[62ch]">{investors}</p>
    </SlideFrame>
  );
}
