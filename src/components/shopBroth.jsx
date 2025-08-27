export default function ShopBroth() {
  return (
    <div className="bg-[#f7f3f0] py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
        
        {/* Left Section */}
        <div className="flex flex-col text-left">
          <p className="text-[#c01b2e] mb-4  md:ml-[10rem] text-lg">Can’t decide? Try them all</p>
          <h1 className="text-[#c01b2e] md:ml-[10rem] font-bold text-4xl md:text-5xl leading-snug">
            Broth <br /> Concentrate <br /> Starter Pack
          </h1>

          <button className="bg-[#c01b2e] md:mx-[10rem] text-white px-6 py-3 mt-6 max-w-[12rem] font-semibold  hover:bg-[#a01624] transition">
            SHOP NOW
          </button>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-sm md:max-w-md object-contain"
            src="/broth/images/starter.png"
            alt="starter pack"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
