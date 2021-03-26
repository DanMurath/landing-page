import { About } from "../comp/home/About";
import { AboutExt } from "../comp/home/AboutExt";
import { Footer } from "../comp/home/Footer";
import { Intro } from "../comp/home/Intro";
import { Merch } from "../comp/home/Merch";
import { Partners } from "../comp/home/Partners";
import { Showcase } from "../comp/home/Showcase";

export const Home: React.FC = () => {
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
