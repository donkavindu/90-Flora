"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function HeroPortfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleHomeClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <div className="portfoliopage shadow-lg h-[70vh] bg-black relative">
        {/* Home Button */}
        <button
          onClick={handleHomeClick}
          className="absolute z-10 flex items-center gap-2 px-4 py-2 text-black transition-colors duration-200 cursor-pointer top-4 left-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>
    </>
  );
}

export default HeroPortfolio;