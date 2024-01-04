import Button from "@/components/button";
import classNames from "classnames";
import { montserrat } from "../assets";

export default function About() {
  return (
    <section className="rounded-3xl p-5 sm:p-10 bg-about-image bg-blend-multiply bg-cover bg-center space-y-10">
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
          reiciendis? Modi esse voluptas, vel tempora, quod qui voluptate animi
          vero totam, quaerat labore cupiditate non corrupti amet architecto ea!
        </p>
        <Button text="Get started" link="/" className="justify-self-start" />
      </div>
      <div>videos</div>
    </section>
  );
}
