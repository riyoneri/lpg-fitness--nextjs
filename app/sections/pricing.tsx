"use client";

import PricingListItem from "@/components/pricing-list-item";
import classNames from "classnames";
import { useState } from "react";
import { montserrat } from "../assets";

export interface PricingItem {
  id: number;
  title: string;
  description: string;
  dark?: boolean;
  trainer: {
    amount: number;
    checks: string[];
  };
  noTrainer: {
    amount: number;
    checks: string[];
  };
}

const pricingArray: PricingItem[] = [
  {
    id: 0,
    title: "Day",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
        voluptatum inventore unde sapiente quis maxime dolorum`,
    trainer: {
      amount: 20,
      checks: [
        "Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
      ],
    },
    noTrainer: {
      amount: 15,
      checks: [
        "Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
      ],
    },
  },
  {
    id: 1,
    title: "Week",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
        voluptatum inventore unde sapiente quis maxime dolorum`,
    dark: true,
    trainer: {
      amount: 90,
      checks: [
        "Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
      ],
    },
    noTrainer: {
      amount: 60,
      checks: [
        " Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
      ],
    },
  },
  {
    id: 2,
    title: "Month",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
        voluptatum inventore unde sapiente quis maxime dolorum`,
    trainer: {
      amount: 200,
      checks: [
        "Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
        " Lorem ipsum dolor sit amet consectetur",
      ],
    },
    noTrainer: {
      amount: 150,
      checks: [" Lorem ipsum dolor sit amet consectetur"],
    },
  },
];

export default function Pricing() {
  const [withTrainer, setWithTrainer] = useState(false);

  const displayPricing = pricingArray.map((pricing) => (
    <PricingListItem key={pricing.id} {...pricing} withTrainer={withTrainer} />
  ));
  return (
    <section className="flex flex-col md:items-center gap-3">
      <h1
        className={classNames(
          montserrat.className,
          "font-semibold text-xl md:text-2xl",
        )}
      >
        Membership Pricing
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
      <div className="bg-slate-200 mt-3 md:mt-7 relative grid grid-cols-2 gap-5 text-custom-orange font-medium text-sm xs:text-base w-full xs:w-auto *:px-2 sm:*:px-4 py-1 *:z-10 *:transition *:text-center cursor-pointer rounded-full">
        <span
          className={classNames(
            "h-full w-1/2 top-0 left-0 rounded-full ease-in-out bg-custom-orange shadow-inner shadow-black transition-all absolute",
            {
              "translate-x-0": !withTrainer,
              "translate-x-full": withTrainer,
            },
          )}
        ></span>
        <p
          onClick={() => setWithTrainer(false)}
          className={classNames({
            "text-white": !withTrainer,
            "text-custom-orange": withTrainer,
          })}
        >
          Without Trainer
        </p>
        <p
          onClick={() => setWithTrainer(true)}
          className={classNames({
            "text-white": withTrainer,
            "text-custom-orange": !withTrainer,
          })}
        >
          With Trainer
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-5">
        {displayPricing}
      </div>
    </section>
  );
}
