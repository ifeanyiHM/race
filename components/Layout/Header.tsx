"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBook,
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaHandshake,
  FaHome,
  FaInfoCircle,
  FaInstagram,
  FaServicestack,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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

interface HeaderProps {
  classname?: string;
}

function Header({ classname }: HeaderProps) {
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
    <nav className="sticky top-0 z-10 w-full md:shadow-md">
      <div className={`${classname} w-full bg-[#185397] py-2`}>
        <div className="flex justify-between items-center text-white text-xs md:text-sm font-medium px-2 md:px-0 md:w-[95%] lg:w-[93%] xxl:w-[90%] mx-auto">
          <p>
            Email:{" "}
            <Link href="mailto:info@raceeduconsult.com">
              info@raceeduconsult.com
            </Link>{" "}
            | call: <Link href="tel:+2348092330570">+234 809 2330 570</Link> |{" "}
            <Link href="tel:+2349038940707">+234 903 8940 707</Link>
          </p>
          <ul className="hidden md:flex items-center gap-1 md:gap-3">
            <li>
              <Link
                href="https://www.instagram.com/raceeduservices1?igsh=dDZ2bTZ1anU2M2Z1"
                target="_blank"
                className="flex items-center gap-3"
              >
                <span className="font-bold">
                  <FaInstagram />
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/share/WNBrWDJXg8Hso873/"
                target="_blank"
                className="flex items-center gap-3"
              >
                <span className="font-bold">
                  <FaFacebookF />
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/Raceduservices?t=UvnxM6yluN7mFkOhbUzUng&s=09"
                target="_blank"
                className="flex items-center gap-3"
              >
                <span className="font-bold">
                  <FaXTwitter />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-[95%] lg:w-[93%] xxl:w-[90%] mx-auto">
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
                sectionId === "programs" ||
                sectionId === "services" ||
                sectionId === "study destinations";
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
                    className="flex items-center gap-2 font-medium text-[#185397] text-sm lg:text-base xl:text-xl"
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
            {menuList.map((menu, index) => {
              const sectionId = menu.name.toLowerCase();
              const isInternalScroll =
                sectionId === "programs" ||
                sectionId === "services" ||
                sectionId === "study destinations";
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
                    } ${
                      index === menuList.length - 1
                        ? "md:pl-1 md:pr-0 lg:pl-1.5 lg:pr-0 md:ml-1 lg:mr-0"
                        : "md:px-1 lg:px-1.5 md:mx-1"
                    } p-2 md:py-0 border-l-2 hover:border-[#185397] font-medium text-[#185397] text-sm lg:text-base`}
                  >
                    {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
