import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Omwanzu | The Chauffeur', description: 'Private chauffeur journeys from Nakuru, Kenya. Thoughtful travel, clear quotes and comfortable rides.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
