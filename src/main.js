import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Check if we're on mobile (vanilla JS equivalent of useMediaQuery)
const isMobile = window.innerWidth <= 768;

// Wait for DOM to be loaded (vanilla JS equivalent of useGSAP)
document.addEventListener('DOMContentLoaded', () => {
  const start = isMobile ? 'top 20%' : 'top top';
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".outer-layer",
      start: start,
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
    maskSize: '500%',
    duration: 1,
    ease: "power1.inOut",
  })
  .to(".masked-container", {
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
  })
});