"use client";

import { montserrat } from "@/app/assets";
import classNames from "classnames";
import Link from "next/link";
import { HamburgerCollapse } from "react-animated-burgers";
import { useEffect, useState } from "react";
import Button from "./button";
import { StyleSheetManager } from "styled-components";
import isValidProp from "@emotion/is-prop-valid";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMount, setIsMount] = useState(false);
  useEffect(() => setIsMount(true), []);

  const handleNavOpenChange = () => {
    if (isNavOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setIsNavOpen(false), 500);
    } else {
      setIsNavOpen(true);
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <nav className="hidden relative lg:flex items-center justify-between">
        <Link
          href="/"
          className={classNames(montserrat.className, "font-bold text-xl")}
        >
          <span className="text-custom-orange">LPG</span>
          <span>Fitness</span>
        </Link>

        <div className="flex gap-10 *:px-5 *:rounded-full *:py-1 *:transition">
          <Link href="/" className="hover:bg-custom-orange">
            About
          </Link>
          <Link href="/" className="hover:bg-custom-orange">
            Trainers
          </Link>
          <Link href="/" className="hover:bg-custom-orange">
            Pricing
          </Link>
          <Link href="/" className="hover:bg-custom-orange">
            Sucess Story
          </Link>
        </div>

        <Button link="/" dark text="Join Us Now" />
      </nav>
      <div className="grid lg:hidden justify-end">
        {isMount && (
          <StyleSheetManager shouldForwardProp={isValidProp}>
            <HamburgerCollapse
              toggleButton={handleNavOpenChange}
              isActive={isMenuOpen}
              buttonStyle={{
                padding: 0,
                zIndex: 11,
                position: "relative",
                top: 0,
                transitionDuration: "100ms",
                transitionDelay: "2s",
                marginTop: "4px",
              }}
              buttonWidth={30}
              barColor={isNavOpen ? "rgb(255 255 255)" : "rgb(30 30 30)"}
            />
          </StyleSheetManager>
        )}

        <nav
          className={classNames(
            "text-white fixed inset-0 z-10 px-5 bg-black/50 flex flex-col items-center pt-10 gap-7 overflow-scroll xs:gap-10",
            {
              ["block"]: isNavOpen,
              ["hidden"]: !isNavOpen,
            },
          )}
        >
          <Link
            onClick={handleNavOpenChange}
            href="/"
            className={classNames(montserrat.className, "font-bold text-xl")}
          >
            <span className="text-custom-orange">LPG</span>
            <span>Fitness</span>
          </Link>
          <div
            className={
              "grid *:text-center w-full *:py-1 sm:*:py-2 *:rounded-full sm:w-1/2 gap-3 md:gap-5"
            }
          >
            <Link
              onClick={handleNavOpenChange}
              href="/"
              className="hover:bg-custom-orange"
            >
              About
            </Link>
            <Link
              onClick={handleNavOpenChange}
              href="/"
              className="hover:bg-custom-orange"
            >
              Trainers
            </Link>
            <Link
              onClick={handleNavOpenChange}
              href="/"
              className="hover:bg-custom-orange"
            >
              Pricing
            </Link>
            <Link
              onClick={handleNavOpenChange}
              href="/"
              className="hover:bg-custom-orange"
            >
              Sucess Story
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
