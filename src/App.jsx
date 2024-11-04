/* eslint-disable */
import Header from "../src/StyledComponents/Header"
import Container from "./StyledComponents/Container"
import Gallery from "./StyledComponents/Gallery"
import HeroSection from "./StyledComponents/HeroSection"
import LocomotiveScroll from 'locomotive-scroll';
import MainText from "./StyledComponents/MainText";
import GalleryTwo from "./StyledComponents/GalleryTwo";
import About from "./StyledComponents/About";
import GalleryThree from "./StyledComponents/GalleryThree";
import Footer from "./StyledComponents/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";











function App() {

  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0,
        duration: 4,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    },
});
  
  const parentRef = useRef(null);
  
     useGSAP(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.child-1 h1', {opacity:0, y:"random(100%,-100%,10)", duration:1, stagger: 0.1})        
        .from(".child-2 hr",{width:0, autoAlpha:0, duration:1, ease:"power4.In",},"-=.50")
        .from(".child-2 h2",{autoAlpha:0, y:"100%", duration:1, ease:"power4.inOut", stagger:.4},"-=.50")
    }, parentRef);
    return () => ctx.revert();
  });



  return (
    <main data-scroll ref={parentRef} >
      <Container>
      <Header/>
      <HeroSection/>
      <Gallery/>
      <MainText/>
      <GalleryTwo/>
      <About/>
      <GalleryThree/>
      <Footer/>
      </Container>
    </main>
  )
}

export default App