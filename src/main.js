import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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