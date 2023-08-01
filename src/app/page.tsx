"use client";

import Head from "next/head";

import Banner from "@/components/Banner";
import Companies from "@/components/Companies";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Simple from "@/components/Simple";
import Table from "@/components/Table";
import Trade from "@/components/Trade";
import Work from "@/components/Work";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hello Apollo theme</title>
      </Head>
      <Banner />
      <Companies />
      <Work />
      <Table />
      <Features />
      <Simple />
      <Trade />
      <Faq />
    </main>
  );
}
