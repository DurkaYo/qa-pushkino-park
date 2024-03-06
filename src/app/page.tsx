import type { JSX } from "react";
import type { Metadata } from "next";

import HomePage from "/app/(pages)/home/page";

export const metadata: Metadata = {
  title: "Home Page Title",
  description: "Home Page Description",
  keywords: "Home Page Keywords"
};

export default function IndexPage(): JSX.Element {
  return (
    <HomePage />
  );
}
