"use client";

import Head from "next/head";

import Achievement from "@/components/Achievement";
import Categories from "@/components/Categories";
import Companies from "@/components/Companies";
import Courses from "@/components/Courses";
import CTA from "@/components/CTA";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

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
      {/* <Navbar/>
      <Hero />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer /> */}

      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <Feedback />
      <CTA />
      <Footer />
    </main>
  );
}
