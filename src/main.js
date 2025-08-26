import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

// Wait for DOM to be loaded (vanilla JS equivalent of useGSAP)
document.addEventListener('DOMContentLoaded', () => {  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".outer-layer",
      start: "top top",
      end: "bottom center",
      scrub: 1.5,
      pin: true,
      markers: false,
    },
  })

  tl.to(".will-fade", {
    opacity: 0,
    stagger: 0.2,
    ease: "power1.inOut",
  })
  .to(".mask-img", {
    scale: 1.2,
    maskPosition: "center",
    maskSize: '750%',
    duration: 1,
    ease: "power1.inOut",
  })
});