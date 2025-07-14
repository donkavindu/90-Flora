"use client";

import { useState, useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";
import wallpapers from "../../lib/images";
import Link from "next/link";
import HeroPortfolio from "@/components/HeroPortfolio";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredWallpapers, setFilteredWallpapers] = useState([]);
  const [visibleWallpapers, setVisibleWallpapers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const containerRef = useRef(null);
  const batchSize = 8; // Number of images to load at once

  useEffect(() => {
    setFilteredWallpapers([...wallpapers].reverse());
  }, []);

  useEffect(() => {
    if (filteredWallpapers.length > 0) {
      setVisibleWallpapers(filteredWallpapers.slice(0, batchSize));
      setPage(1);
    }
  }, [filteredWallpapers]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && visibleWallpapers.length < filteredWallpapers.length) {
          loadMoreWallpapers();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [visibleWallpapers, loading, filteredWallpapers]);

  const loadMoreWallpapers = () => {
    setLoading(true);
    setTimeout(() => {
      const nextPage = page + 1;
      const nextWallpapers = filteredWallpapers.slice(
        0,
        nextPage * batchSize
      );
      setVisibleWallpapers(nextWallpapers);
      setPage(nextPage);
      setLoading(false);
    }, 500); // Small delay for better perceived performance
  };

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
      <HeroPortfolio />
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
          {visibleWallpapers.length > 0 ? (
            visibleWallpapers.map((wallpaper) => (
              <Link href={`#`} key={wallpaper.id}>
                <div className="relative cursor-pointer group">
                  <img
                    src={wallpaper.src}
                    alt={wallpaper.title}
                    loading="lazy" // Native lazy loading as fallback
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

        {/* Loading indicator and sentinel element */}
        {loading && (
          <div className="flex justify-center my-4">
            <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
          </div>
        )}

        {!loading && visibleWallpapers.length < filteredWallpapers.length && (
          <div ref={containerRef} className="h-1"></div>
        )}
      </div>
    </>
  );
}