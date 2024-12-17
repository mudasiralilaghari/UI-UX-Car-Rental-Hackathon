import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function PopularHeader() {
  return (
    <div className="flex items-center justify-between w-full px-4 sm:px-6 md:px-8 mb-3">
      <div className="flex items-center px-5 h-11 rounded">
        <span className="text-[#90A3BF] font-semibold text-base leading-5 font-['Plus_Jakarta_Sans']">
          Popular Car
        </span>
      </div>
      <Button
        variant="ghost"
        className="flex items-center px-5 h-11 rounded text-[#3563E9] font-semibold text-base hover:bg-[#3563E9]/10"
      >
        View All
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
