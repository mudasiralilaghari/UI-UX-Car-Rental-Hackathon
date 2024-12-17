import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CarCardProps {
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  originalPrice: number;
  isFavorite?: boolean;
}

export default function CarCard({
  name = "All New Rush",
  type = "SUV",
  image = "/placeholder.svg",
  fuelCapacity = "70L",
  transmission = "Manual",
  capacity = "6 People",
  price = 72.0,
  originalPrice = 80.0,
  isFavorite = false,
}: CarCardProps) {
  return (
    <Card className="w-[304px] p-6 relative hover:scale-[1.1]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="font-bold text-xl tracking-tight">{name}</h3>
          <p className="text-sm text-muted-foreground font-semibold">{type}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className={`${isFavorite ? "text-red-500" : "text-muted-foreground"}`}
        >
          <Heart className="h-6 w-6" />
        </Button>
      </div>

      {/* Car Image */}
      <div className="my-8 relative">
        <div className="relative h-[120px] flex items-center justify-center">
          <Image
            src={image}
            alt={name}
            width={100} height={100}
            className="h-auto w-[232px] object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[68px] bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Specifications */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-muted-foreground"
          >
            <path
              d="M22 13.5V8.5C22 7.4 21.1 6.5 20 6.5H4C2.9 6.5 2 7.4 2 8.5V13.5C2 14.6 2.9 15.5 4 15.5H20C21.1 15.5 22 14.6 22 13.5ZM19.5 13C18.7 13 18 12.3 18 11.5C18 10.7 18.7 10 19.5 10C20.3 10 21 10.7 21 11.5C21 12.3 20.3 13 19.5 13Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-sm">{fuelCapacity}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-muted-foreground"
          >
            <circle
              cx="12"
              cy="12"
              r="8"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
          <span className="text-sm">{transmission}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-muted-foreground"
          >
            <path
              d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm">{capacity}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold">${price.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground">/ day</span>
          </div>
          <span className="text-sm text-muted-foreground line-through">
            ${originalPrice.toFixed(2)}
          </span>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Rent Now</Button>
      </div>
    </Card>
  );
}
