"use client";

import { montserrat, questrial } from "@/app/assets";
import classNames from "classnames";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { HamburgerCollapse } from "react-animated-burgers";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMount, setIsMount] = useState(false);
  useEffect(() => setIsMount(true), []);
  return (
    <div
      className={classNames(
        "width-responsive pt-10 relative grid",
        questrial.className,
      )}
    >
      <nav className="hidden items-center justify-between">
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

        <Link
          href="/"
          className="flex gap-2 items-center rounded-full p-1 bg-light-black group hover:bg-custom-orange transition border-white border-2"
        >
          <span className="px-4">Join Us Now</span>
          <span className="p-1 bg-custom-orange rounded-full">
            <BiRightArrowAlt className="size-5 group-hover:translate-x-1.5 transition duration-300" />
          </span>
        </Link>
      </nav>
    </div>
  );
}
