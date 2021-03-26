/*
 * This file is a media query hook I've made
 * only using window.innerWidth doesn't allow
 * style changes in real time (this fixes that)
 *
 * will save a ton of time+code on styling
 *
 */
import { useEffect, useState } from "react";

export const useMedia = () => {
  const [large, setLarge] = useState<boolean | undefined>(undefined);

  const media = () => {
    if (window.innerWidth > 993) {
      // could add another width if needed
      setLarge(true);
    } else {
      setLarge(false);
    }
  };

  useEffect(() => {
    media(); // call function first so correct styles show on initial render
    window.addEventListener("resize", media); // allows real time changes
  }, []);

  return { large };
};
