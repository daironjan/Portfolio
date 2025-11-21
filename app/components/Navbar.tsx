"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementScrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {
            id: link.id,
            title: link.title,
            top: rect.top + elementScrollTop - 100, // Account for fixed navbar
            bottom: rect.bottom + elementScrollTop - 100,
          };
        }
        return null;
      }).filter(Boolean) as Array<{ id: string; title: string; top: number; bottom: number }>;

      const currentSection = sections.find(
        (section) =>
          scrollTop + 150 >= section.top && scrollTop + 150 < section.bottom
      );

      if (currentSection) {
        setActive(currentSection.title);
      } else if (scrollTop < 100) {
        setActive(""); // Reset to no active section at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`paddingX
			w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActive("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="logo"
              priority
              className="object-contain"
            />
          </a>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
             &nbsp;{" "}
            <span className="sm:block hidden ">Dairon Jan Lamprea Rotelo</span>
          </p>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(nav.title);
                  
                  // Function to scroll to element
                  const scrollToElement = () => {
                    const element = document.getElementById(nav.id);
                    if (element) {
                      // Get the element's position relative to document
                      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                      // Account for navbar height (100px)
                      const targetScroll = elementTop - 100;
                      window.scrollTo({
                        top: Math.max(0, targetScroll),
                        behavior: "smooth",
                      });
                      return true;
                    }
                    return false;
                  };
                  
                  // Try immediately, if fails wait a bit and retry
                  if (!scrollToElement()) {
                    setTimeout(() => {
                      scrollToElement();
                    }, 50);
                  }
                }}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-2 lg:block hidden">
          <ResumeButton />
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            width={28}
            height={28}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setToggle(!toggle);
                      setActive(nav.title);
                      
                      // Function to scroll to element
                      const scrollToElement = () => {
                        const element = document.getElementById(nav.id);
                        if (element) {
                          // Get the element's position relative to document
                          const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
                          // Account for navbar height (100px)
                          const targetScroll = elementTop - 100;
                          window.scrollTo({
                            top: Math.max(0, targetScroll),
                            behavior: "smooth",
                          });
                          return true;
                        }
                        return false;
                      };
                      
                      // Try immediately, if fails wait a bit and retry
                      if (!scrollToElement()) {
                        setTimeout(() => {
                          scrollToElement();
                        }, 50);
                      }
                    }}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li>
                <div className="mt-2">
                  <ResumeButton />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
