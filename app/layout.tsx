import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

const inter = Noto_Sans({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Мир Врача',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
