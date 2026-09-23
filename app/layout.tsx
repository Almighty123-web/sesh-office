import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SESH Office',
  description: 'Modern productivity workspace for teams and businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
