import type { Metadata } from 'next';
import Archive from './Archive';
export const metadata: Metadata = { title: 'Memos', robots: { index: false, follow: false, nocache: true }, referrer: 'no-referrer' };
export default function Page() { return <Archive/>; }
