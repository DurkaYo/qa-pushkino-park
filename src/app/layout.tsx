import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import './_styles/global.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
