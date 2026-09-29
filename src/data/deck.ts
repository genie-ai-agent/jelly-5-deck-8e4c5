export const DECK_TITLE = 'Jelly Jelly';

export const slideMeta = [
  { n: '01', label: 'Thesis' },
  { n: '02', label: 'The Problem' },
  { n: '03', label: 'The Solution' },
  { n: '04', label: 'The Team' },
  { n: '05', label: 'The Raise' },
] as const;

export const team = [
  {
    name: 'Iqram Magdon-Ismail',
    role: 'Co-founder & CEO',
    note: 'Co-founder of Venmo',
  },
  { name: 'Joe', role: 'CTO', note: 'NYU — cybersecurity & computer science' },
  { name: 'KS', role: 'iOS Lead', note: 'Arizona' },
  { name: 'Ari', role: 'Growth & Android', note: '' },
  { name: 'Zach Benitez', role: 'Marketing', note: 'NYU journalism — thecontrail.org' },
] as const;

export const investors =
  'Current investors: Sam Lessin (Slow Ventures), Dave Morin (Offline VC), Andrew Kortina (co-founder, Venmo), Punch Capital and many amazing angels.';

export const traction = [
  { k: 'Accounts', v: '35K' },
  { k: 'Wallets', v: '3K' },
  { k: 'Monthly actives', v: '2K' },
  { k: 'Shadow accounts', v: '1.5M' },
] as const;

export const useOfFunds = [
  {
    h: 'Agentic product',
    b: 'Agents that post, caption, distribute and transact on your behalf — publicly or privately.',
  },
  {
    h: 'Engineering & Android',
    b: 'Ship Android, expose the API to developers, double down on product engineering.',
  },
  {
    h: 'Global growth',
    b: 'From 2K monthly actives to 1M, grown from inside the network itself.',
  },
] as const;
