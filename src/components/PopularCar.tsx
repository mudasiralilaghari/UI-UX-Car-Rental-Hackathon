import React from "react";
import CarCard from "./CarCard";
import PopularHeader from "./popularHeadrer";
import Link from "next/link";

export default function PopularCar() {
  return (
    <div>
      <PopularHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[32px] w-full max-w-[1312px] mx-auto px-4">
        <Link href={"/category"}>
          <CarCard
            name={"Koenigsegg"}
            type={"Sport"}
            image={"/pCar1.png" }
            fuelCapacity={"90L"}
            transmission={"Manual"}
            capacity={"2 People"}
            price={99.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"Nissan GT - R"}
            type={"Sport"}
            image={"/pCar2.png"}
            fuelCapacity={"80L"}
            transmission={"Manual"}
            capacity={"2 People"}
            price={80.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"Rolls-Royce"}
            type={"Sedan"}
            image={"/pCar3.png"}
            fuelCapacity={"70L"}
            transmission={"Manual"}
            capacity={"4 People"}
            price={96.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"Nissan GT - R"}
            type={"Sport"}
            image={"/pCar4.png"}
            fuelCapacity={"80L"}
            transmission={"Manual"}
            capacity={"2 People"}
            price={80.0}
            originalPrice={100.0}
          />
        </Link>
      </div>
    </div>
  );
}
