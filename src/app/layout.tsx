import {Raleway, Russo_One} from "next/font/google";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";

import './_styles/global.scss';

import {Header} from "/widgets/header/";
import {Footer} from "/widgets/footer/";

const raleway: NextFontWithVariable = Raleway({
  subsets: ['cyrillic'],
  display: "swap",
  weight: ['400', '600'],
  variable: '--family-raleway',
});

const russoOne: NextFontWithVariable = Russo_One({
  subsets: ['cyrillic'],
  display: "swap",
  weight: ['400'],
  variable: '--family-russo-one',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${raleway.variable} ${russoOne.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
