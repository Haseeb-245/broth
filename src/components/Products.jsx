import React, { useState, useRef, useEffect } from 'react';

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  
  // Product data
  const products = [
    {
      id: 1,
      title: "Organic Beef Bone Broth Concentrate",
      details: "Ranch raised & 100% grass fed beef",
      price: "Rs.20.440.66",
      image: '/images/product1.jpg'
    },
    {
      id: 2,
      title: "Organic Chicken Bone Broth Concentrate",
      details: "Free range & vegetarian fed chicken",
      price: "Rs.20.440.66",
      image: '/images/product2.jpg'
    },
    {
      id: 3,
      title: "Organic Turkey Bone Broth Concentrate",
      description: "Free-range turkey broth with rich collagen content.",
      details: "Free range & natural diet",
      price: "Rs.18.320.50",
      weight: "NET WT. 3 FL OZ (88.7ml)",
      category: "Beauty & the Broth",
      image: '/images/product3.jpg'
    },
    {
      id: 4,
      title: "Organic Vegetable Broth Concentrate",
      description: "Hearty vegetable broth with organic vegetables and herbs.",
      details: "100% organic vegetables",
      price: "Rs.15.220.40",
      weight: "NET WT. 3 FL OZ (88.7ml)",
      category: "Beauty & the Broth",
      image: '/images/product4.jpg'
    }
  ];

  // Calculate total slides
  const slides = [];
  for (let i = 0; i < products.length; i += 2) {
    slides.push(products.slice(i, i + 2));
  }
  
  const totalSlides = slides.length;
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  // Update carousel position
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="h-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[50rem]">
        
        {/* Left column with title */}
        <div className="bg-[#f7f3f0] max-w-full md:max-w-lg flex items-center justify-center md:justify-start">
          <div className="flex flex-col items-center md:items-start w-full max-w-lg md:ml-[5rem] p-6 md:p-0">
            <h1 className="text-3xl md:text-5xl text-[#c01b2e] font-bold">Shop</h1>
            <h1 className="text-3xl md:text-5xl text-[#c01b2e] font-bold">Broths</h1>
            <p className="mt-2 text-[#c01b2e] text-center md:text-left">
              Nutrient-dense organic<br/>broth concentrates.
            </p>
          </div>
        </div>

        {/* Right column with carousel */}
        <div className="overflow-hidden relative md:-ml-[20rem]">
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-in-out h-full"
          >
            {slides.map((slide, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full grid grid-cols-2 gap-8 px-6 md:px-12"
              >
                {slide.map(product => (
                  <div key={product.id} className="h-auto md:h-[30rem]  p-4 md:p-6">
                    <div className="h-[15rem] md:h-[20rem] mb-4 flex items-center justify-center overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full  object-cover"
                      />
                    </div>
                    <h3 className="text-xl md:text-[35px] font-bold text-[#c01b2e]">{product.title}</h3>
                    <p className="text-sm text-[#c01b2e] font-medium mt-2">{product.details}</p>
                    <p className="text-lg text-[#c01b2e] font-bold mt-4">{product.price}</p>
                    <button className="mt-4 bg-[#c01b2e] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <div className="absolute bottom-8 right-8 flex space-x-4">
            <button 
              onClick={prevSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#c01b2e]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap');
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-lato {
          font-family: 'Lato', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
