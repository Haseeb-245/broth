import { useState } from "react";

export default function Yourbroth() {
  const [selected, setSelected] = useState(null);

  const options = [
    {
      id: 1,
      label: "I want a light, versatile flavor",
      title: "Organic Chicken Bone Broth",
      desc: "If you’re looking for a bone broth that packs a punch of nutrition and flavor, look no further. Our broth concentrate is made from slow-simmering and repeatedly steaming high-quality, organic ingredients.",
      img: "/images/yellow.png",
      line:"Revitalize with our chicken broth, crafted with healing turmeric and ginger for ultimate relaxation and detox!"
    },
    {
      id: 2,
      label: "I like rich, full-bodied flavor",
      title: "Organic Beef Bone Broth",
      desc: "If you’re looking for a bone broth that packs a punch of nutrition and flavor, look no further. Our beef broth concentrate is made from slow-simmering and repeatedly steaming high-quality, organic ingredients.",
      img: "/images/red.png",
      line:"Experience the rich depth of our beef broth with a hint of tomato for your perfect post-workout boost!"
    },
    {
      id: 3,
      label: "I want a vegan collagen boost",
      title: "Vegan Mushroom Broth",
      desc: "Looking for a plant-based alternative? Our vegan mushroom broth is rich in umami and formulated to help support natural collagen production, while being 100% vegan.",
      img: "/images/green.png",
      line:"Boost your collagen naturally with our vegan mushroom broth, packed with umami flavor and skin-loving benefits!"
    },
  ];

  
  const selectedOption = options.find((o) => o.id === selected);

  return (
    <div className="min-h-screen pt-10">
      {/* Heading */}
      <div className="mt-10">
        <h1 className="text-5xl text-[#c01b2e] text-center font-bold">
          Which Broth is for me?
        </h1>
      </div>

      {/* Options row */}
      <div className="flex flex-col md:flex-row justify-center gap-6 m-10">
        {options.map((opt) => (
          <div
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className="p-6 flex flex-col items-center rounded-2xl cursor-pointer transition-transform duration-200 w-full md:w-[20rem] bg-[#fce5d0]"
          
            
          >
            {/* Checkbox */}
            <div className="h-6 w-6 border border-[#c01b2e] flex items-center justify-center">
              {selected === opt.id && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="black"
                >
                  <path d="M20.285 6.709l-11.285 11.285-5.285-5.285 1.415-1.415 3.87 3.87 9.87-9.87z" />
                </svg>
              )}
            </div>

            {/* Text */}
            <h1 className="text-[#c01b2e] mt-4 text-center font-medium">
              {opt.label}
            </h1>
          </div>
        ))}
      </div>

      {/* Details card (only if selected) */}
      {selectedOption && (
        <div className=" bg-[#fce5d0] max-w-3xl mx-auto rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg">
          {/* Image */}
          
          <img
            src={selectedOption.img}
            alt="broth"
            className="rounded-xl w-[250px] md:w-[300px]"
          />
       
          {/* Text content */}
          <div className="flex-1">
            <h2 className="text-sm font-bold text-[#c01b2e] mb-2">
              YOU SHOULD GET
            </h2>
            <h1 className="text-3xl font-extrabold text-[#c01b2e] mb-4">
              {selectedOption.title}
            </h1>
            <p className=" text-[#c01b2e] leading-relaxed mb-4">
              {selectedOption.desc}
            </p>
            <p className="text-[#c01b2e] font-bold pt-5">
              {selectedOption.line}
            </p>

            <button className="bg-[#c01b2e] text-white px-32 py-2 font-semibold hover:bg-[#a01624] transition mt-5">
              SHOP NOW
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
