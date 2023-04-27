import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const TypingText = ({ staticText, texts }) => {
  const containerRef = useRef(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const animateText = (element, onComplete) => {
    gsap.set(element.children, { autoAlpha: 0 });

    const tl = gsap.timeline({ onComplete });
    tl.to(element.children, {
      duration: 0.3,
      autoAlpha: 1,
      stagger: 0.15,
      ease: "power3.out",
    }).to(element.children, {
      duration: 0.5,
      autoAlpha: 0,
      stagger: { each: 0.15, from: "end" },
      ease: "power3.out",
      delay: 1,
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current.children[currentTextIndex];
      animateText(element, () => {
        setCurrentTextIndex(
          (currentIndex) => (currentIndex + 1) % texts.length
        );
      });
    }
  }, [currentTextIndex]);

  return (
    <div className="flex items-center">
      <span
        style={{ marginRight: "4px" }}
        className="text-xl font-semibold pt-3"
      >
        {staticText}
      </span>
      <div ref={containerRef}>
        {texts.map((text, index) => (
          <div
            key={index}
            className={` ${index !== currentTextIndex ? "hidden" : ""}`}
          >
            {text.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                style={{ marginRight: char === " " ? "2px" : "0" }}
                className="text-5xl font-extrabold"
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypingText;
