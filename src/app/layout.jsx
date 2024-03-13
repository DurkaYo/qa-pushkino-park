import {Raleway, Russo_One} from "next/font/google";

import './_styles/global.scss';

import {Header} from "../widgets/header";
import {Footer} from "../widgets/footer/";

const raleway = Raleway({
  subsets: ['cyrillic'],
  display: "swap",
  weight: ['400', '600'],
  variable: '--family-raleway',
});

const russoOne = Russo_One({
  subsets: ['cyrillic'],
  display: "swap",
  weight: ['400'],
  variable: '--family-russo-one',
});

export default function RootLayout({children}) {
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
