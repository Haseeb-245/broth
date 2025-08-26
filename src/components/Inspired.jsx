// src/components/Inspired.jsx
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Inspired() {
  const cards = [
    {
      id: 1,
      title: "4 Ways to Incorporate Bone Broth Into Your Diet",
      desc: "With Beauty & the Broth bone broth, incorporating bone broth into your diet has never been easier or more delicious....",
      img: "/images/card1.png",
    },
    {
      id: 2,
      title: "Ginger Snap Cookies Recipe",
      desc: "You will love these perfectly crisp and chewy gingersnap cookies because they taste just like heaven! These easy-to-make and delicious...",
      img: "/images/card2.png",
    },
    {
      id: 3,
      title: "Cinnamon and Coconut Fat Bombs",
      desc: "Whether you are taking them to a party or snacking late at night, Cinnamon and Coconut Fat Bombs are a...",
      img: "/images/card3.png",
    },
    {
      id: 4,
      title: "Herb Roasted Turkey Legs",
      desc: "There's no doubt that turkey legs are one of my new favorite foods. All the turkey goodness is yours without...",
      img: "/images/card4.png",
    },
    {
      id: 5,
      title: "Apple Pie Cup",
      desc: "Sometimes the best recipes are the easiest! Easy apple pie cups are perfect in every way! Whether you want to...",
      img: "/images/card5.png",
    },
    {
      id: 6,
      title: "Butternut Squash Soup",
      desc: "It's time to get cozy with a bowl of warm, creamy butternut squash soup. Butternut squash and cool...",
      img: "/images/card6.png",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector("div");
    const cardWidth = card ? card.offsetWidth + 40 : 350; // includes spacing
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-[#f7f3f0] py-12 px-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#c01b2e]">
        Get Inspired
      </h2>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 bg-[#c01b2e] text-white p-3 rounded-full shadow-md hover:bg-[#a31728] z-10"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 bg-[#c01b2e] text-white p-3 rounded-full shadow-md hover:bg-[#a31728] z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex space-x-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[30%] snap-center"
          >
            <div className=" rounded-2xl  overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-56 md:h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl md:text-2xl text-[#c01b2e] font-semibold text-center">
                  {card.title}
                </h3>
                <p className="text-[#c01b2e] text-center text-sm md:text-base mt-2">
                  {card.desc}
                </p>
                <button className="mt-4 w-full text-[#c01b2e] py-2 rounded-lg hover:underline">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
