import React from "react";
import Image from "next/image";

export default function Admin() {
  return (
    <div className="w-full h-fix flex flex-col md:flex-row">
      <div className="first hidden md:flex w-[25%] lg:w-[20%]">
        <Image src={"/Nav Bar.png"} alt="Nav Bar" width={360} height={1600} />
      </div>
      <div className="sec hidden md:flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-7 flex-nowrap justify-center">
        <Image
          src={"/Details Rental.png"}
          alt="Details Rental"
          width={534}
          height={836}
          className="ml-1 w-full md:w-[45%] lg:w-[534px]"
        />
        <Image
          src={"/Details Rental.png"}
          alt="Details Rental"
          width={534}
          height={836}
          className="w-full md:w-[45%] lg:w-[534px]"
        />
      </div>
      <div className="small-screens md:hidden bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-6">
        <Image
          src={"/Detail Rental.png"}
          alt="Detail Rental"
          width={327}
          height={1272}
          className="w-full"
        />
        <Image
          src={"/Top 5.png"}
          alt="Top 5"
          width={327}
          height={508}
          className="w-full"
        />
        <Image
          src={"/Recent Transaction.png"}
          alt="Recent Transaction"
          width={327}
          height={352}
          className="w-full"
        />
      </div>
    </div>
  );
}
