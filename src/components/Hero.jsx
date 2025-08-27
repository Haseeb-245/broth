import React, { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [offset, setOffset] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const animationRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current + 5) {
        setScrollDirection("down");
        setIsScrolling(true);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setScrollDirection("up");
        setIsScrolling(true);
      }

      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (isScrolling) {
        if (scrollDirection === "up") {
          setOffset((prev) => (prev + 0.8) % 100);
        } else if (scrollDirection === "down") {
          setOffset((prev) => (prev - 0.8) % 100);
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isScrolling, scrollDirection]);

  return (
    <div className="h-[43rem] sm:h-[50rem] md:h-[55rem] bg-[url('/images/broth.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        
        {/* Left column */}
        <div className="flex items-center justify-center mt-20 md:mt-32 px-6 md:px-12">
          <div className="max-w-xl text-left text-[#c01b2e]">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              The Best Broth
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              You'll Ever Sip
            </h1>
            <p className="text-base sm:text-lg md:text-[20px] max-w-[38rem] mt-6">
              Our slow and low simmer and steam method produces nutrient-dense
              broth concentrates that meet on the corner of boundless beauty &
              wellness benefits.
            </p>
            <button className="bg-[#c01b2e] mt-8 px-6 py-2 w-[11rem] text-white text-[15px] font-medium">
              SHOP NOW
            </button>
          </div>
        </div>

        <div />

        {/* SVG with animated text */}
        <div className="-mt-[2rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1080 280"
            className="w-screen h-auto"
          >
            <g>
              <path
                style={{ fill: "#f39100" }}
                d="M845.2,114.9c-33.3,23.8-68.8,48.6-105.4,67.2c-38.9,19.8-74.2,30.2-108.2,31.7c-44.2,2.1-92.5-10.3-152-39 
                c-21.3-10.3-42.7-21.9-63.5-33.1c-30-16.2-61-33-93.6-47C221.8,51.5,108.3,37.3,0,53.9v66.9c99.2-17.2,204-5.1,296.5,34.6 
                c29.8,12.8,58.1,28.1,88.1,44.4c21.4,11.6,43.6,23.6,66.3,34.5C515.4,265.3,570.1,280,622,280c4.2,0,8.4-0.1,12.6-0.3 
                c92.3-4.3,170.4-55,249-111.2c61.9-44.3,125.8-90,196.4-101.8V0C989.6,11.6,913,66.4,845.2,114.9z"
              />
            </g>
            <path
              style={{ fill: "none" }}
              id="wavePath"
              d="M-20.3,96.8c110-22.2,226.7-10.2,329.8,34.1c53.6,23,103.2,54.2,155.7,79.5 
              s109.6,44.9,167.9,42.2c85.8-4,161.4-55.1,231.3-105.1s143.9-102.5,229.5-110"
            />
            <text width="100%" className="font-bold" fill="white">
              <textPath
                href="#wavePath"
                startOffset={offset}
                className="text-white text-[14px] sm:text-[18px] md:text-[20px]"
              >
                A happy and healthy gut means a happy and healthy you • A happy
                and healthy gut means a happy and healthy you • A happy and
                healthy gut means a happy and healthy you • A happy and healthy
                gut means a happy and healthy you • A happy and healthy gut
                means a happy and healthy you • A happy and healthy gut means a
                happy and healthy you •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
