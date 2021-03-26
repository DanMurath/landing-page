import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./comp/Navbar";
import { useEffect } from "react";
import { useMedia } from "./hooks/useMedia";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const App = () => {
  const { large } = useMedia();
  useEffect(() => {
    if (large === true) {
      gsap.from(".App", {
        y: 0,
        scrollTrigger: {
          trigger: ".App",
          start: "top bottom",
          end: "+=1500",
          scrub: 2,
        },
      });
    }
  });

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
};
