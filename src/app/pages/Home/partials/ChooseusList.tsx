import React from "react";
import ChooseusItem from "./ChooseusItem";
import Icon from "../../../../assets/icon";
import { IChooseus } from "../../../shared/interfaces/chooseus";

const chooseusList: IChooseus[] = [
  {
    name: "Free Shipping",
    icon: Icon.FreeShippingBig,
    desc: "All purchases over $199 are eligible forfree shipping via USPS First className Mail.",
  },
  {
    name: "Easy Payments",
    icon: Icon.Payment,
    desc: "All payments are processed instantlyover a secure payment protocol.",
  },
  {
    name: "Money-Back Guarantee",
    icon: Icon.GruanranteeBig,
    desc: "If an item arrived damaged or youve changed your mind, you can send itback for a full refund.",
  },
  {
    name: "Finest Quality",
    icon: Icon.Materials,
    desc: "Designed to last, each of our products hasbeen crafted with the finest materials.",
  },
];

const ChooseusList = () => {
  return (
    <ul className="row">
      {chooseusList.map((chooseus: IChooseus, idx: number) => {
        return (
          <ChooseusItem
            key={idx}
            name={chooseus.name}
            icon={chooseus.icon}
            desc={chooseus.desc}
          />
        );
      })}
    </ul>
  );
};

export default ChooseusList;
