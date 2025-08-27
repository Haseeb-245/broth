export default function Reviews() {
  const reviews = [
    {
      review:
        "I personally drink bone broth daily AND it is a big part of all protocols I put my fertility clients on. With that, I am extremely particular about ingredients and cooking processes when it comes to bone broth. When I found Beauty & The Broth and learned about their quality ingredients and proper cooking methods PLUS their convenient, easy to throw in your bag and take anywhere packaging I jumped right in. Their products are amazing thoughtful and nutrient dense and should be a part of your daily health routine!",
      name: "Aimee Raupp",
      occupation: "Women’s Health & Fertility Detective",
      image: "/broth/images/r1.png",
    },
    {
      review:
        "As a functional medicine expert, I've dedicated years to consulting patients worldwide. In my commitment to supporting gut health naturally through food, I consistently advocate for The Beauty and The Broth's bone broths. The brand's UNWAVERING DEDICATION to sourcing high-quality, organic ingredients reflects their commitment to purity and excellence. Introducing this nourishing elixir into your daily routine is a simple yet PROFOUND step towards enhancing your overall well-being.",
      name: "Dr. Will Cole",
      occupation:
        "Leading functional medicine expert, NYT bestselling author, host of The Art of Being Well podcast",
      image: "/broth/images/r2.png",
    },
    {
      review:
        "My favorite bone broth, I love that I can travel with it anywhere and have the finest nutrients that are organic. We know that beauty comes from within, I love this product because it shelf stable and has zero preservatives in it. It also has grass finished, free range, antibiotic and hormone free— and the chicken is from Marys organic chicken. It also has no salt added so you’re not going to wake up with a puffy face. Each serving has 15g of protein, so In just 3oz you can fit it up and it’s still 5x stronger than regular broth! The best part, it has zero BS ingredients which I love because you never know what you’re getting in a bone broth.",
      name: "Dr Nigma Talib",
      occupation:
        "Celebrity Naturopathic doctor, author, aesthetician, and leading authority on holistic health",
      image: "/broth/images/r3.png",
    },
    {
      review:
        "I LOVE the Beauty & the Broth organic bone broth selection! Not only does it taste amazing, it's nutritional profile is equally remarkable. I ESPECIALLY LOVE the vegan broth. These formulas are rich in l-glutamine, a critical amino acid that supports nourishing the cells lining the intestinal tract. Immunity baby! Beauty & the Broth is a beauty elixir with transformative powers. It’s for anyone seeking a sophisticated yet effective approach to inner beauty and holistic wellness.",
      name: "Teri Cochrane",
      occupation:
        "Founder of Teri Cochrane - Beyond Nutrition, an international thought leader in longevity and a pioneer in personalized wellness",
      image: "/broth/images/r4.png",
    },
  ];

  // Different background colors
  const cardColors = ["#c01b2e", "#fce5d0", "#ED830E", "#c01b2e"];


  return (
    <div className="bg-[#f7f3f0] py-20 overflow-hidden">
      <div className="relative w-full">
        {/* Infinite scroll container */}
        <div className="flex animate-scroll">
          {/* Duplicate reviews twice for seamless loop */}
          {[...reviews, ...reviews].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl shadow-md p-8 flex flex-col items-center justify-between mx-4 min-w-[28rem] max-w-[22rem]"
              style={{
                backgroundColor: cardColors[index % cardColors.length],
              
              }}
            >
              {/* Quote Icon */}
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4"
              >
                <path
                  d="M5.37238 14C3.98572 14 2.85905 13.428 1.99239 12.284C1.12572 11.14 0.692383 9.71863 0.692383 8.01997C0.692383 5.52397 1.43772 3.58263 2.92838 2.19597C4.41905 0.809298 6.46438 0.0986311 9.06438 0.0639648V3.07997C7.53905 3.11463 6.39505 3.5133 5.63239 4.27597C4.86972 5.03863 4.48838 5.93996 4.48838 6.97997C4.48838 7.29197 4.50572 7.5173 4.54038 7.65597C4.99105 7.3093 5.56305 7.13596 6.25639 7.13596C7.15772 7.13596 7.88572 7.43063 8.44038 8.01997C9.02972 8.57463 9.32439 9.3893 9.32439 10.464C9.32439 11.4693 8.96038 12.3186 8.23238 13.012C7.50438 13.6706 6.55105 14 5.37238 14ZM15.3564 14C13.9697 14 12.8431 13.428 11.9764 12.284C11.1097 11.14 10.6764 9.71863 10.6764 8.01997C10.6764 5.52397 11.4217 3.58263 12.9124 2.19597C14.4031 0.809298 16.4484 0.0986311 19.0484 0.0639648V3.07997C17.5231 3.11463 16.3791 3.5133 15.6164 4.27597C14.8537 5.03863 14.4724 5.93996 14.4724 6.97997C14.4724 7.29197 14.4897 7.5173 14.5244 7.65597C14.975 7.3093 15.5471 7.13596 16.2404 7.13596C17.1417 7.13596 17.8697 7.43063 18.4244 8.01997C19.0137 8.57463 19.3084 9.3893 19.3084 10.464C19.3084 11.4693 18.9444 12.3186 18.2164 13.012C17.4884 13.6706 16.5351 14 15.3564 14Z"
                  fill="white"
                ></path>
              </svg>

              {/* Review Text */}
              <p className="text-center text-white flex-1">{item.review}</p>

              <svg width="20" height="14" viewBox="0 0 20 14" fill="white"  style={{ transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg">
  <path d="M5.37238 14C3.98572 14 2.85905 13.428 1.99239 12.284C1.12572 11.14 0.692383 9.71863 0.692383 8.01997C0.692383 5.52397 1.43772 3.58263 2.92838 2.19597C4.41905 0.809298 6.46438 0.0986311 9.06438 0.0639648V3.07997C7.53905 3.11463 6.39505 3.5133 5.63239 4.27597C4.86972 5.03863 4.48838 5.93996 4.48838 6.97997C4.48838 7.29197 4.50572 7.5173 4.54038 7.65597C4.99105 7.3093 5.56305 7.13596 6.25639 7.13596C7.15772 7.13596 7.88572 7.43063 8.44038 8.01997C9.02972 8.57463 9.32439 9.3893 9.32439 10.464C9.32439 11.4693 8.96038 12.3186 8.23238 13.012C7.50438 13.6706 6.55105 14 5.37238 14ZM15.3564 14C13.9697 14 12.8431 13.428 11.9764 12.284C11.1097 11.14 10.6764 9.71863 10.6764 8.01997C10.6764 5.52397 11.4217 3.58263 12.9124 2.19597C14.4031 0.809298 16.4484 0.0986311 19.0484 0.0639648V3.07997C17.5231 3.11463 16.3791 3.5133 15.6164 4.27597C14.8537 5.03863 14.4724 5.93996 14.4724 6.97997C14.4724 7.29197 14.4897 7.5173 14.5244 7.65597C14.975 7.3093 15.5471 7.13596 16.2404 7.13596C17.1417 7.13596 17.8697 7.43063 18.4244 8.01997C19.0137 8.57463 19.3084 9.3893 19.3084 10.464C19.3084 11.4693 18.9444 12.3186 18.2164 13.012C17.4884 13.6706 16.5351 14 15.3564 14Z" fill="white"></path>
</svg>

              {/* Name + Occupation fixed height */}
              <div className="mt-6 h-20 flex flex-col justify-between items-center text-center">
                <h1 className="font-bold text-white">{item.name}</h1>
                <h2 className="text-sm text-white">{item.occupation}</h2>
              </div>

              {/* Reviewer Image */}
              <img
                className="h-20 w-20 mt-5 rounded-full object-cover"
                src={item.image}
                alt={item.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: calc(200%); /* since we duplicated the list */
        }
      `}</style>
    </div>
  );
}
