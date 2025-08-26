export default function Broth() {
  const logo = [
    { id: 1, image: "/broth/images/glamour.jpg" },
    { id: 2, image: "/broth/images/Goop.jpg" },
    { id: 3, image: "/broth/images/travel.jpg" },
    { id: 4, image: "/broth/images/natural.jpg" },
    { id: 5, image: "/broth/images/new.jpg" },
  ];

  return (
    <div className="h-[8rem] bg-[#c01b2e] w-full overflow-hidden">
      {/* Scrolling container */}
      <div className="flex animate-scroll">
        {/* Duplicate images to create infinite loop */}
        {[...logo, ...logo].map((item, index) => (
          <div key={index} className="flex-shrink-0 px-12">
            <img
              className="h-[3rem] w-auto mt-[2rem] object-contain"
              src={item.image}
              alt={`logo-${index}`}
            />
          </div>
        ))}
      </div>

      {/* Tailwind custom animation */}
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
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
