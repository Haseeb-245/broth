const pic = [
  {
    image: '/images/b1.jpg', // ✅ changed "Image" to "image"
    id: 1,
    title: "Whole-Body Wellbeing",
    description: "A natural powerhouse for gut health, inflammation reduction, and collagen-rich anti-aging benefits."
  },
  {
    image: '/images/b2.jpg',
    id: 2,
    title: "Only The Best Ingredients",
    description: "Crafted with premium, USDA organic ingredients for superior quality and flavour."
  },
  {
    image: '/images/b3.jpg',
    id: 3,
    title: "5x The Nutrients",
    description: "5x the nutrients and benefits than any reconstituted competitor."
  },
  {
    image: '/images/b4.jpg',
    id: 4,
    title: "More Energy & Clarity",
    description: "Increased energy, clarity and mood."
  },
];

export default function Benefits() {
  return (
    <div className=" md:h-[50rem]  h-[80rem] bg-[#fce5d0] p-10 ">
   
      <div className="grid grid-col-1 md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE IMAGE */}
        
        <div className="md:h-[35rem] h-[40rem] w-[23rem] md:w-auto md:mt-20  md:ml-20 rounded-2xl overflow-hidden ">
          <img
            src="/images/benefit.jpg"
            className="h-full object-cover rounded-2xl"
            alt="Benefit"
          />
          <img className="h-16 w-16 md:h-12 md:w-12 mt-[]" src="/images/your.png" alt="checkmark"> 
          </img>
             
          
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="flex flex-col justify-center gap-y-8  md:mt-[5rem]">
            <h1 className="md:text-5xl text-3xl font-bold text-[#B36B00]">A Better Broth for the Benefits You Crave</h1>
          {pic.map((item) => (
            <div key={item.id} className="flex gap-x-6 items-start">
              
              {/* SMALL ICON IMAGE */}
              <div className="md:h-16 h-10  md:w-16 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-full border-2 "
                />
              </div>

              {/* TEXT CONTENT */}
              <div>
                <h3 className="md:text-2xl text-xl font-bold text-[#B36B00]">
                  {item.title}
                </h3>
                <p className="md:text-lg text-sm text-[#5c3a00] mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
