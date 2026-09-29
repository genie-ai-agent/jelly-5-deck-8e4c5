import SlideFrame from '../SlideFrame';

const wants = [
  'Post it for me.',
  'Caption it for me.',
  'Find the people who care.',
  'Collect the money.',
];

export default function Problem() {
  return (
    <SlideFrame n="02" label="The Problem">
      <h1 className="headline max-w-[26ch]">
        Social media is not connected to agents the way humans want.
      </h1>

      <div className="grid gap-7 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <p className="body-lg max-w-[46ch]">
          You want everything done for you — whether you are sharing something publicly or
          privately. Today&rsquo;s feeds cannot do a single thing on your behalf. They take your
          attention and hand back nothing.
        </p>

        <ul className="border-t border-rule">
          {wants.map((w) => (
            <li
              key={w}
              className="flex items-baseline gap-4 border-b border-rule py-3 sm:py-3.5"
            >
              <span className="label shrink-0 text-jelly">You want</span>
              <span className="text-[1.0625rem] font-medium tracking-[-0.015em] text-ink sm:text-xl">
                {w}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="deck-serif max-w-[38ch] text-[1.25rem] leading-tight text-ink sm:text-[1.75rem]">
        Instead you get overproduced, over-filtered AI slop — and money that stops at the border.
      </p>
    </SlideFrame>
  );
}
