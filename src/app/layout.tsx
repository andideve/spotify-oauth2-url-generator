import type { Metadata } from 'next';
import './globals.css';

import { SITE_NAME } from '@/config/constants';

export const metadata: Metadata = {
  title: SITE_NAME,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sr-only">
          <h1>{SITE_NAME}</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
