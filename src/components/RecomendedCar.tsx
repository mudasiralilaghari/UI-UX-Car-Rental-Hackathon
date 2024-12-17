import React from "react";
import CarCard from "./CarCard";
import Recomdcar from "./recomdcar";
import { Button } from "./ui/button";
import Link from "next/link";

export default function RecomendedCar() {
  return (
    <div>
      <Recomdcar />

      {/* Grid for Recommended Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[32px] w-full max-w-[1312px] mx-auto px-4">
        <Link href={"/category"}>
          <CarCard
            name={"All New Rush"}
            type={"SUV"}
            image={"/RcCar1.png"}
            fuelCapacity={"70L"}
            transmission={"Manual"}
            capacity={"6 People"}
            price={72.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"CR - V"}
            type={"SUV"}
            image={"/RcCar2.png"}
            fuelCapacity={"80L"}
            transmission={"Manual"}
            capacity={"6 People"}
            price={80.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"All New Terios"}
            type={"Sedan"}
            image={"/RcCar3.png"}
            fuelCapacity={"90L"}
            transmission={"Manual"}
            capacity={"6 People"}
            price={74.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"CR - V"}
            type={"SUV"}
            image={"/RcCar4.png"}
            fuelCapacity={"80L"}
            transmission={"Manual"}
            capacity={"6 People"}
            price={80.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"MG ZX Exclusice"}
            type={"Hatchback"}
            image={"/RcCar5.png"}
            fuelCapacity={"70L"}
            transmission={"Manual"}
            capacity={"4 People"}
            price={80.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"NewMGZS"}
            type={"SUV"}
            image={"/RcCar6.png"}
            fuelCapacity={"80L"}
            transmission={"Manual"}
            capacity={"6 People"}
            price={80.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"MG ZX Excite"}
            type={"Hatchback"}
            image={"/RcCar7.png"}
            fuelCapacity={"90L"}
            transmission={"Manual"}
            capacity={"4 People"}
            price={74.0}
            originalPrice={100.0}
          />
        </Link>
        <Link href={"/category"}>
          <CarCard
            name={"NewMGZS"}
            type={"SUV"}
            image={"/RcCar8.png"}
            fuelCapacity={"80L"}
            transmission={"Manual"}
            capacity={"6 People"}
            price={80.0}
            originalPrice={100.0}
          />
        </Link>
      </div>

      {/* Show More Button */}
      <Link href={"/category"}>
        <div className="flex justify-center items-center mt-28 ml-14 pr-14">
          <Button className="bg-blue-600 hover:bg-blue-700 m-auto">
            Show more cars
          </Button>
          <span className="text-sm text-gray-500">120 Cars</span>
        </div>
      </Link>
    </div>
  );
}
