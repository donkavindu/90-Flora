"use client"; // Enable client-side interactivity

import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi"; // Import download icon
import wallpapers from "../../lib/images";
import Link from "next/link";
import HeroPortfolio from "@/components/HeroPortfolio";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredWallpapers, setFilteredWallpapers] = useState([]);

  useEffect(() => {
    setFilteredWallpapers([...wallpapers].reverse()); // Fetch images in reverse order
  }, []);

  const handleSearch = () => {
    const searchWords = searchTerm
      .toLowerCase()
      .split(" ")
      .filter((word) => word.trim() !== "");

    const filtered = wallpapers.filter((wallpaper) => {
      const matchesSearch = searchWords.some(
        (word) =>
          wallpaper.title.toLowerCase().includes(word) ||
          wallpaper.keywords.some((keyword) =>
            keyword.toLowerCase().includes(word)
          )
      );

      const matchesCategory =
        selectedCategory === "All" ||
        wallpaper.keywords.some(
          (keyword) => keyword.toLowerCase() === selectedCategory.toLowerCase()
        );

      return matchesSearch && matchesCategory;
    });

    setFilteredWallpapers([...filtered].reverse());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");

    const filtered = wallpapers.filter((wallpaper) => {
      if (category === "All") {
        return true;
      }
      return wallpaper.keywords.some(
        (keyword) => keyword.toLowerCase() === category.toLowerCase()
      );
    });

    setFilteredWallpapers([...filtered].reverse());
  };

  const handleDownload = (src, title) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = title || "wallpaper.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <HeroPortfolio/>
      <div className="container p-10 mx-auto">

        <div className="flex flex-wrap justify-center gap-5 mb-8">
          {["All", "Welcome Sign", "Entrance Arch", "Stage Decoration", "Settee Back", "Couple"].map(
            (category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-lg text-sm md:text-base ${
                  selectedCategory === category
                    ? "bg-[#e7eae8] text-black"
                    : "bg-[#070c0f] text-white hover:bg-[#e7eae8] hover:text-black"
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredWallpapers.length > 0 ? (
            filteredWallpapers.map((wallpaper) => (
              <Link href={`#`} key={wallpaper.id}>
                <div className="relative cursor-pointer group">
                  <img
                    src={wallpaper.src}
                    alt={wallpaper.title}
                    className="w-full h-auto aspect-[9/16] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-102 group-hover:shadow-2xl"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDownload(wallpaper.src, wallpaper.title);
                    }}
                    className="absolute p-2 text-white transition-opacity bg-gray-900 rounded-full opacity-0 bottom-2 right-2 group-hover:opacity-100"
                  >
                    <FiDownload size={20} />
                  </button>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-600">No wallpapers found.</p>
          )}
        </div>
      </div>
    </>
  );
}