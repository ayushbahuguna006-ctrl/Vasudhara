import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactLeft = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
    
      gsap.from(".contact-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 70%",
        },
      });


      gsap.from(".contact-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-item",
          start: "top 85%",
        },
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center min-h-screen px-8 md:px-16 bg-[#f5f1ea]"
    >
      <div className="contact-heading text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-16"><h1>
        <p className="text-center md:text-start  ">Get in Touch</p> 
         <p className="text-center md:text-start ">With Us</p>
      </h1></div>

      <div className="space-y-10 text-gray-700">
        <div className="contact-item">
          <p className="uppercase text-sm tracking-widest font-semibold text-gray-500 mb-2">
            For General Queries
          </p>
          <p className="text-2xl font-serif">Contact@Vantara.in</p>
          <p className="text-2xl font-serif">+91 90160 12345</p>
        </div>

        <div className="contact-item">
          <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">
            For Media
          </p>
          <p className="text-2xl font-serif">Media@Vantara.in</p>
          <p className="text-2xl font-serif">+91 70160 12345</p>
        </div>

        <div className="contact-item">
          <p className="uppercase text-sm font-semibold tracking-widest text-gray-500 mb-2">
            For Career Opportunities
          </p>
          <p className="text-2xl font-serif">Careers@Vantara.in</p>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;