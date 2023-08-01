"use client";
import React, { useEffect } from "react";

import Navbar from "./Navbar";

type DebounceFunction<T extends (...args: string[]) => void> = (
  fn: T,
) => (...args: Parameters<T>) => void;

const Navbarin: React.FC = () => {
  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce: DebounceFunction<() => void> = (fn) => {
      let frame: number | undefined;

      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params: Parameters<() => void>) => {
        // If the frame variable has been defined, clear it now, and queue for the next frame
        if (frame) {
          cancelAnimationFrame(frame);
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params);
        });
      };
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    // Update scroll position for the first time
    storeScroll();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Navbarin;
