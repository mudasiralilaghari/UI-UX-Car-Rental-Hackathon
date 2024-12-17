"use client";

import * as React from "react";
import {
  Heart,
  FuelIcon as GasStation,
  Users,
  Settings2,
  RefreshCw,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Checkbox } from "../../components/ui/checkbox";
import { Slider } from "../../components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

export default function Category() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Section */}
      <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 max-w-7xl mx-auto">
        {/* Pick Up */}
        <Card className="flex-1 ">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <h3 className="font-semibold">Pick-Up</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="font-semibold">Locations</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">Tando Allahyar</SelectItem>
                    <SelectItem value="ld">Larkana</SelectItem>
                    <SelectItem value="db">Sukkur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="font-semibold">Date</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">tommorow</SelectItem>
                    <SelectItem value="tomorrow">yesterday</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="font-semibold">Time</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">8/nov/2025</SelectItem>
                    <SelectItem value="afternoon">9/nov/2025</SelectItem>
                    <SelectItem value="afternoon">10/nov/2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Switch Button */}
        <div className="flex items-center justify-center">
          <Button
            size="lg"
            variant="default"
            className=" h-16 w-16 bg-green-700"
          >
            <RefreshCw className="h-6 w-6" />
          </Button>
        </div>

        {/* Drop Off */}
        <Card className="flex-1">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <h3 className="font-semibold">Drop-Off</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="font-semibold">Locations</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">Sukkur</SelectItem>
                    <SelectItem value="ld">Hyderabad</SelectItem>
                    <SelectItem value="db">Karachi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="font-semibold">Date</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="font-semibold">Time</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">12:am</SelectItem>
                    <SelectItem value="afternoon">4:pm</SelectItem>
                    <SelectItem value="afternoon">5:pm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-72 space-y-6">
            {/* Type Filter */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider">
                T Y P E
              </h3>
              <div className="space-y-4">
                {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                  (type, i) => (
                    <div key={type} className="flex items-center gap-2">
                      <Checkbox id={type} checked={i < 2} />
                      <label
                        htmlFor={type}
                        className="text-lg font-semibold text-gray-600"
                      >
                        {type} ({Math.floor(Math.random() * 20)})
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Capacity Filter */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider">
                C A P A C I T Y
              </h3>
              <div className="space-y-4">
                {["2 Person", "4 Person", "6 Person", "8 or More"].map(
                  (capacity, i) => (
                    <div key={capacity} className="flex items-center gap-2">
                      <Checkbox id={capacity} checked={i === 0 || i === 3} />
                      <label
                        htmlFor={capacity}
                        className="text-lg font-semibold text-gray-600"
                      >
                        {capacity} ({Math.floor(Math.random() * 20)})
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gray-500 tracking-wider">
                P R I C E
              </h3>
              <Slider defaultValue={[80]} max={100} step={1} />
              <div className="font-semibold text-gray-600">Max. $100.00</div>
            </div>
          </div>

          {/* Car Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {[
                {
                  name: "dieaigor-fdl",
                  type: "Sport",
                  price: 99.0,
                  capacity: 2,
                  fuel: "90L",
                },
                {
                  name: "Nissan GT-R",
                  type: "Sport",
                  price: 80.0,
                  capacity: 2,
                  fuel: "80L",
                },
                {
                  name: "Rolls-Royce",
                  type: "Sport",
                  price: 96.0,
                  capacity: 4,
                  fuel: "70L",
                },
                {
                  name: "All New Rush",
                  type: "SUV",
                  price: 72.0,
                  capacity: 6,
                  fuel: "70L",
                },
                {
                  name: "CR-V",
                  type: "SUV",
                  price: 80.0,
                  capacity: 6,
                  fuel: "80L",
                },
                {
                  name: "All New Terios",
                  type: "SUV",
                  price: 74.0,
                  capacity: 6,
                  fuel: "90L",
                },

                {
                  name: "MG ZX Exclusive",
                  type: "Hatchback",
                  price: 76.0,
                  capacity: 4,
                  fuel: "70L",
                },
                {
                  name: "New MG ZS",
                  type: "SUV",
                  price: 80.0,
                  capacity: 6,
                  fuel: "80L",
                },
                {
                  name: "MG ZX Excite",
                  type: "Hatchback",
                  price: 74.0,
                  capacity: 4,
                  fuel: "90L",
                },
              ].map((car, i) => (
                <Card key={car.name} className="overflow-hidden hover:scale-[1.1]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-xl">{car.name}</h3>
                        <p className="text-sm text-gray-500 font-bold">
                          {car.type}
                        </p>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:text-red-500"
                      >
                        <Heart
                          className={cn(
                            "h-6 w-6",
                            i % 3 === 0 ? "fill-red-500 text-red-500" : ""
                          )}
                        />
                      </Button>
                    </div>

                    <div className="my-6">
                      <Image
                        src={`/images/${car.name
                          .toLowerCase()
                          .replace(/ /g, "-")}.png`}
                        alt={car.name} width={100} height={100}
                        className="w-[244px] h-[72px] object-contain"
                      />
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <div className="flex gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <GasStation className="h-5 w-5" />
                          <span>{car.fuel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Settings2 className="h-5 w-5" />
                          <span>Manual</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          <span>{car.capacity} People</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <div className="space-y-1">
                        <p className="text-xl font-bold">
                          ${car.price.toFixed(2)}/day
                        </p>
                        {i % 2 === 1 && (
                          <p className="text-sm text-gray-500 line-through">
                            ${(car.price + 20).toFixed(2)}
                          </p>
                        )}
                      </div>
                      <Link href={"/details"}>
                        <Button className="bg-[#3563E9]">Rent Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Link href={"/details"}>
              <div className="flex justify-between items-center mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 m-auto">
                  Show more cars
                </Button>
                <span className="text-sm text-gray-500">120 Cars</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
