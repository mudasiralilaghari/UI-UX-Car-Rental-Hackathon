import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row gap-10 mt-[32px] mb-[32px]">
        {/* First Card */}
        <div className="relative w-full md:w-[640px] h-[360px] bg-[#54A6FF] hover:scale-[1.1] rounded-lg overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute inset-0">
            {[50, 150, 275, 400, 525, 650, 775].map((size, i) => (
              <div
                key={i}
                className="absolute border-[20px] border-white/[0.06] rounded-full"
                style={{
                  width: size,
                  height: size,
                  left: `${-157 + i * 63}px`,
                  top: `${-83 + i * 63}px`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 flex flex-col gap-5">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.3] max-w-[272px]">
                The Best Platform for Car Rental
              </h1>
              <p className="text-white/90 text-base font-medium leading-relaxed max-w-[284px]">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
            </div>
            <Link href={"/category"}>
              <Button className="w-[120px] bg-[#3563E9] hover:bg-[#3563E9]/90 text-white font-semibold">
                Rental Car
              </Button>
            </Link>
          </div>

          {/* Car Image */}
          <div className="absolute bottom-6 right-6">
            <Image
              src="/herocar1.png"
              height="116"
              width="406"
              alt="Luxury sports car"
              className="w-[406px] h-[116px] object-contain"
            />
          </div>
        </div>

        {/* Second Card (Hidden on Mobile) */}
        <div className="relative w-full md:w-[640px] h-[360px] bg-[#54A6FF] rounded-lg hover:scale-[1.1] overflow-hidden md:block hidden">
          {/* Decorative Circles */}
          <div className="absolute inset-0">
            {[50, 150, 275, 400, 525, 650, 775].map((size, i) => (
              <div
                key={i}
                className="absolute border-[20px] border-white/[0.06] rounded-full"
                style={{
                  width: size,
                  height: size,
                  left: `${-157 + i * 63}px`,
                  top: `${-83 + i * 63}px`,
                }}
              />
            ))}
          </div>
          {/* Content */}
          <div className="relative z-10 p-6 flex flex-col gap-5">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.3] max-w-[272px]">
                The Best Platform for Car Rental
              </h1>
              <p className="text-white/90 text-base font-medium leading-relaxed max-w-[284px]">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
            </div>

            <Link href={"/category"}>
              <Button className="w-[120px] bg-[#3563E9] hover:bg-[#3563E9]/90 text-white font-semibold">
                Rental Car
              </Button>
            </Link>
          </div>

          {/* Car Image */}
          <div className="absolute bottom-6 right-6">
            <Image
              src="/herocar2.png"
              height="116"
              width="406"
              alt="Luxury sports car"
              className="w-[406px] h-[116px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
