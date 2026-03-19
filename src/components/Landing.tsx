import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const introRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Reveal
      gsap.from(".landing-intro h2", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      });
      gsap.from(".landing-intro h1", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.7,
      });

      // Info Reveal (Engineer/Developer swap)
      gsap.from(".landing-info h3", {
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power4.out",
        delay: 1,
      });

      const tl = gsap.timeline({ repeat: -1, delay: 1.5 });
      tl.to(".landing-h2-1", { y: "-100%", duration: 0.8, ease: "power4.inOut" })
        .from(".landing-h2-2", { y: "100%", duration: 0.8, ease: "power4.inOut" }, "<")
        .to({}, { duration: 2 }) // Pause
        .to(".landing-h2-2", { y: "-100%", duration: 0.8, ease: "power4.inOut" })
        .to(".landing-h2-1", { y: "0%", duration: 0.8, ease: "power4.inOut" }, "<")
        .to({}, { duration: 2 }); // Pause
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro" ref={introRef}>
          <h2>Hello! I'm</h2>
          <h1>
            ASHUTOSH
            <br />
            <span>YADAV</span>
          </h1>
        </div>
        <div className="landing-info" ref={infoRef}>
          <h3>A Software</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">Engineer</div>
            <div className="landing-h2-2">Developer</div>
          </h2>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Landing;
