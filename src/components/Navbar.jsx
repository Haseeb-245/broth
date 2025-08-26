"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="flex justify-center bg-[#c01b2e] h-10">
        <h1 className="text-sm text-amber-100 font-cooper text-center pt-2">
          Free shipping on all US subscriptions
        </h1>
      </div>

      {/* Navbar */}
      <nav className="h-20 flex items-center bg-[#f7f3f0] justify-between px-6 md:px-10 sticky top-0 z-50">
        
        {/* Left side: Mobile Hamburger + Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger (Mobile only) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-[#B36B00]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <img src="/broth/images/logo.jpg" alt="Logo" className="h-[30px]" />
        </div>

        {/* Menu (Desktop only) */}
        <ul className="hidden md:flex gap-12 text-[#B36B00] font-cooper ml-14">
          <li><a href="#">Shop</a></li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Loyalty Program</a></li>
          <li><a href="#">Refer and Earn</a></li>
          <li><a href="#">Recipes</a></li>
        </ul>

        {/* Right Side: Search + Login + Cart */}
        <div className="flex items-center md:gap-6  ml-20">
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="black"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0108 13.7179C11.7372 14.8278 10.0721 15.5 8.25 15.5C4.24594 15.5 1 12.2541 1 8.25C1 4.24594 4.24594 1 8.25 1C12.2541 1 15.5 4.24594 15.5 8.25C15.5 10.0721 14.8278 11.7372 13.7179 13.0108L19.8536 19.1464L19.1464 19.8536L13.0108 13.7179ZM14.5 8.25C14.5 11.7018 11.7018 14.5 8.25 14.5C4.79822 14.5 2 11.7018 2 8.25C2 4.79822 4.79822 2 8.25 2C11.7018 2 14.5 4.79822 14.5 8.25Z"
            />
          </svg>

          {/* Login */}
           <p className="font-cooper cursor-pointer text-[#B36B00]">Login</p>

          {/* Cart */}
          {/* Cart Icon */}
          <svg
            width="22"
            height="23"
            viewBox="0 0 18 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.69157 0.690002C7.4318 0.690002 6.22361 1.19045 5.33282 2.08125C4.44202 2.97204 3.94157 4.18022 3.94157 5.44V6H0.781574L0.0115738 17.6C-0.0350324 18.2838 0.0594434 18.9699 0.289133 19.6156C0.518823 20.2614 0.878821 20.853 1.34677 21.3538C1.81472 21.8546 2.38063 22.2538 3.00936 22.5266C3.63808 22.7995 4.31619 22.9402 5.00157 22.94H12.3816C13.0661 22.9401 13.7433 22.7997 14.3713 22.5274C14.9993 22.2552 15.5647 21.8569 16.0325 21.3572C16.5003 20.8575 16.8605 20.2671 17.0909 19.6226C17.3212 18.978 17.4167 18.293 17.3716 17.61L16.6016 6.01H13.4416V5.44C13.4416 4.81622 13.3187 4.19855 13.08 3.62226C12.8413 3.04596 12.4914 2.52232 12.0503 2.08125C11.6093 1.64017 11.0856 1.29028 10.5093 1.05157C9.93302 0.812865 9.31535 0.690002 8.69157 0.690002ZM12.4416 5.44V6H4.94157V5.44C4.94157 4.44544 5.33666 3.49161 6.03992 2.78835C6.74318 2.08509 7.69701 1.69 8.69157 1.69C9.68614 1.69 10.64 2.08509 11.3432 2.78835C12.0465 3.49161 12.4416 4.44544 12.4416 5.44ZM12.4416 7H4.94157V7.56C4.94157 8.55456 5.33666 9.50839 6.03992 10.2117C6.74318 10.9149 7.69701 11.31 8.69157 11.31C9.68614 11.31 10.64 10.9149 11.3432 10.2117C12.0465 9.50839 12.4416 8.55456 12.4416 7.56V7ZM3.94157 7.56V7H1.72157L1.00157 17.67C0.964529 18.2176 1.04055 18.7669 1.22492 19.2838C1.40928 19.8007 1.69804 20.2741 2.07324 20.6746C2.44843 21.0752 2.90202 21.3942 3.40581 21.6119C3.90959 21.8296 4.45277 21.9413 5.00157 21.94H12.3816C12.9295 21.9399 13.4716 21.8272 13.9742 21.6089C14.4768 21.3906 14.9292 21.0714 15.3033 20.671C15.6774 20.2706 15.9653 19.7976 16.1491 19.2814C16.3328 18.7652 16.4086 18.2167 16.3716 17.67L15.6616 7H13.4416V7.56C13.4416 8.81978 12.9411 10.028 12.0503 10.9188C11.1595 11.8096 9.95135 12.31 8.69157 12.31C7.4318 12.31 6.22361 11.8096 5.33282 10.9188C4.44202 10.028 3.94157 8.81978 3.94157 7.56Z"
              fill="#0A0A08"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f7f3f0] px-6 py-4 space-y-4 font-cooper text-[#B36B00]">
          <a href="#">Shop</a>
          <a href="#">Benefits</a>
          <a href="#">About Us</a>
          <a href="#">Loyalty Program</a>
          <a href="#">Refer and Earn</a>
          <a href="#">Recipes</a>
        </div>
      )}
    </>
  );
}
