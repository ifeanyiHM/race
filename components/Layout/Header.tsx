"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBook,
  FaEnvelope,
  FaGlobe,
  FaHandshake,
  FaHome,
  FaInfoCircle,
  FaServicestack,
} from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { formattedItem } from "../../utils/FormatString";

const menuList = [
  { name: "Home", icon: <FaHome /> },
  { name: "About us", icon: <FaInfoCircle /> },
  { name: "Services", icon: <FaServicestack /> },
  { name: "Study Destinations", icon: <FaGlobe /> },
  { name: "Partners", icon: <FaHandshake /> },
  { name: "Programs", icon: <FaBook /> },
  { name: "Contact", icon: <FaEnvelope /> },
];

const handleScroll = (sectionId: string) => {
  if (typeof window !== "undefined") {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash) handleScroll(hash);
    }
  }, []);

  return (
    <div className="sticky top-0 z-10 w-full md:shadow-md bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-[95%] lg:w-[93%] mx-auto">
        <div className="flex justify-between items-center shadow-md md:shadow-none md:block  px-2 md:px-0">
          <div className="w-[70px] h-[70px] lg:w-[80px] lg:h-[75px] bg-cover flex items-center justify-center">
            <Link href="/">
              {" "}
              <Image
                src="/race_logo.svg"
                alt="race education service logo"
                width={126}
                height={124}
              />
            </Link>
          </div>

          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-2xl pr-2 text-[#185397]"
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </div>
        </div>

        {/* mobile menu */}
        <ul
          className={`${
            isMenuOpen
              ? "h-[136px] max-h-[140px] py-2"
              : "max-h-[0] h-[0] delay-500 py-0"
          }  flex flex-wrap justify-center md:hidden space-y-1 space-x-4 transition-all duration-500 ease-in-out`}
        >
          {menuList.map(({ name, icon }, index) => {
            const sectionId = name.toLowerCase();
            const isInternalScroll =
              sectionId === "programs" || sectionId === "services";
            const linkHref =
              sectionId === "home"
                ? "/"
                : isInternalScroll
                ? `/#${sectionId}`
                : name;
            return (
              <li
                key={name}
                className={`transition-transform transform duration-500 ease-in-out p-2 lg:p-2.5 ${
                  isMenuOpen ? "scale-y-100" : "scale-y-0 "
                }`}
                style={{
                  transitionDelay: `${
                    isMenuOpen ? index * 100 : (3 - index) * 100
                  }ms`,
                }}
              >
                <Link
                  href={formattedItem(linkHref.toLowerCase())}
                  onClick={(e) => {
                    if (isInternalScroll) {
                      e.preventDefault();
                      if (window.location.pathname !== "/") {
                        router.push(`/#${sectionId}`);
                      } else {
                        handleScroll(sectionId);
                      }
                    }
                  }}
                  className="flex items-center gap-2 font-bold text-[#185397] text-sm lg:text-base xl:text-xl"
                >
                  <span className="text-lg">{icon}</span>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* desktop menu */}
        <ul className="hidden md:flex gap-1 lg:gap-2">
          {menuList.map((menu) => {
            const sectionId = menu.name.toLowerCase();
            const isInternalScroll =
              sectionId === "programs" || sectionId === "services";
            const linkHref =
              sectionId === "home"
                ? "/"
                : isInternalScroll
                ? `/#${sectionId}`
                : menu.name;

            const itemPath = formattedItem(
              menu.name.toLowerCase() === "home"
                ? "/"
                : `/${menu.name.toLowerCase()}`
            );

            const isActive =
              itemPath === "/"
                ? pathName === "/"
                : pathName.startsWith(itemPath) && itemPath !== "/";

            return (
              <li key={menu.name} className={``}>
                <Link
                  href={formattedItem(linkHref.toLowerCase())}
                  onClick={(e) => {
                    if (isInternalScroll) {
                      e.preventDefault();
                      if (window.location.pathname !== "/") {
                        router.push(`/#${sectionId}`);
                      } else {
                        handleScroll(sectionId);
                      }
                    }
                  }}
                  className={`${
                    isActive ? "border-[#185397]" : "border-transparent"
                  } p-2 md:py-0 md:px-1 lg:px-1.5 md:mx-1 border-l-2 hover:border-[#185397] font-bold text-[#185397] text-sm lg:text-base`}
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
