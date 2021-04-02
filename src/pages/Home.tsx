import { useEffect } from "react";
import { About } from "../comp/home/About";
import { AboutExt } from "../comp/home/AboutExt";
import { Footer } from "../comp/home/Footer";
import { Intro } from "../comp/home/Intro";
import { Merch } from "../comp/home/Merch";
import { Partners } from "../comp/home/Partners";
import { Showcase } from "../comp/home/Showcase";

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 1); // fixes scrolltrigger bug
    // if it were on 0, 0 (default) some of our triggers start
    // 30-50% lower than they should
  });

  return (
    <div className="home">
      <Intro />
      <Merch />
      <About />
      <AboutExt />
      <Showcase />
      <Partners />
      <Footer />
    </div>
  );
};
