// src/components/Inspired.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Card() {
  const cards = [
    { id: 1, title: "Card 1", desc: "Description 1", img: "/images/card1.jpg" },
    { id: 2, title: "Card 2", desc: "Description 2", img: "/images/card2.jpg" },
    { id: 3, title: "Card 3", desc: "Description 3", img: "/images/card3.jpg" },
    { id: 4, title: "Card 4", desc: "Description 4", img: "/images/card4.jpg" },
    { id: 5, title: "Card 5", desc: "Description 5", img: "/images/card5.jpg" },
    { id: 6, title: "Card 6", desc: "Description 6", img: "/images/card6.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // 3 cards per slide
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-5 text-center">Be Inspired</h2>
      <Slider {...settings}>
        {cards.map(card => (
          <div key={card.id} className="px-3">
            <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
              <img src={card.img} alt={card.title} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
