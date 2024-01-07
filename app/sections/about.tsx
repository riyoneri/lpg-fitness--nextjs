"use client";

import Button from "@/components/button";
import classNames from "classnames";
import { montserrat } from "../assets";
import "@vidstack/react/player/styles/base.css";

export default function About() {
  return (
    <section className="py-16" id="about">
      <div className="rounded-3xl p-5 sm:p-10 bg-about-image bg-blend-multiply bg-cover bg-center space-y-10">
        <h1
          className={classNames(
            montserrat.className,
            "text-3xl lg:text-5xl font-bold",
          )}
        >
          About us
        </h1>
        <div className="lg:w-1/2 grid gap-5 sm:gap-10">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, earum
            reiciendis? Modi esse voluptas, vel tempora, quod qui voluptate
            animi vero totam, quaerat labore cupiditate non corrupti amet
            architecto ea!
          </p>
          <Button text="Get started" link="/" className="justify-self-start" />
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          <div className="h-10 bg-custom-orange"></div>
          <div className="h-10 bg-custom-orange"></div>
          <div className="h-10 bg-custom-orange"></div>
          {/* <MediaPlayer
            src="/easy.mp4"
            title="Workout 1"
            className="h-20 overflow-hidden bg-green-500 relative"
          >
            <MediaProvider />
            <PlayButton className="group p-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-content-center">
              <PlayIcon className="size-10 hidden group-data-[paused]:block bg-green-500" />
              <PauseIcon className="size-10 group-data-[paused]:hidden bg-green-500" />
            </PlayButton>
          </MediaPlayer> */}
        </div>
      </div>
    </section>
  );
}
