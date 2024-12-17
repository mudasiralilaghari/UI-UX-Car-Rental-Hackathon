import Hero from "@/components/Hero";
import PopularCar from "@/components/PopularCar";
import RecomendedCar from "@/components/RecomendedCar";
import SearchSection from "@/components/SearchSection";
import React from "react";

export default function Home() {
  return (
    <div className="mb-[124px] w-full px-4 sm:px-6 md:px-8 overflow-x-hidden ">
      <Hero />
      <SearchSection />
      <PopularCar />
      <RecomendedCar />
    </div>
  );
}
