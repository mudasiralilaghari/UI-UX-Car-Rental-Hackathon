"use client";

import { Bell, Heart, Search, Settings, Settings2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full bg-white md:sticky  lg:sticky top-0 z-50 border-b border-[rgba(195,212,233,0.4)] px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <div className="flex items-center justify-between flex-wrap md:flex-nowrap w-full">
        {/* Logo */}
        <h1 className="text-[28px] sm:text-[32px] font-bold tracking-[-0.03em] text-[#3563E9]">
          MORENT
        </h1>

        {/* Search */}
        <div className="relative w-full md:w-[60%] lg:w-[70%] mt-4 md:mt-0">
          <Search className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-[#596780]" />
          <Input
            className="h-11 rounded-[70px] border-[rgba(195,212,233,0.4)] pl-14 pr-12 text-sm font-medium text-[#596780]"
            placeholder="Search something here"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <Link href={"/"}>
            <Settings2 className="h-14 w-14 text-[#596780]" />
            </Link>
          </Button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Like Button */}
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)] opacity-80"
          > <Link href={"/payment"}>
            <Heart className="h-14 w-14 text-[#596780]" />
          </Link>
          </Button>

          {/* Notification Button */}
          <div className="relative">
            <Button
              size="icon"
              variant="outline"
              className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)] opacity-80"
            >
              <Link href={"/category"}>
              <Bell className="h-6 w-6 text-[#596780]" />
              </Link>
            </Button>
            <span className="absolute right-1 top-0.5 h-[11px] w-[11px] rounded-full bg-[#FF4423]" />
          </div>

          {/* Settings Button */}
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full border-[rgba(195,212,233,0.4)] opacity-80"
          >
            <Link href={"/details"}>
            <Settings className="h-6 w-6 text-[#596780]" />
            </Link>
          </Button>

          {/* Profile */}
          <Link href={"/admin"}>
          <Avatar className="h-11 w-11">
            <AvatarImage src="/profile.png" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          </Link>
        </div>
      </div>
    </nav>
  );
}
