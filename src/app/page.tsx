import type {Metadata} from "next";

import Home from "/app/(pages)/home/page";

export const metadata: Metadata = {
  title: "Home Page Title",
  description: "Home Page Description",
  keywords: "Home Page Keywords"
};

export default function IndexPage() {
  return (
    <Home />
  );
}
