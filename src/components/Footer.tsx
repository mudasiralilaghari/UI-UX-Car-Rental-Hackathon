import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8  lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tighter text-[#3563E9]"
            >
              MORENT
            </Link>
            <p className="mt-4 text-base text-[#131313]/60 max-w-xs">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-[#1A202C]">
              About
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Business Relation
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-[#1A202C]">
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Invite a friend
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight text-[#1A202C]">
              Socials
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#131313]/60 hover:text-[#3563E9]"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-[#131313]/16" />

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-base font-semibold text-[#1A202C]">
            ©2022 Mudasir Ali. All rights reserved
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-base font-semibold text-[#1A202C] hover:text-[#3563E9]"
            >
              Privacy & Policy
            </Link>
            <Link
              href="#"
              className="text-base font-semibold text-[#1A202C] hover:text-[#3563E9]"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
