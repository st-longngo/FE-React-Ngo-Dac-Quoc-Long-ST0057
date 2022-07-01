import React from "react";
import SectionTitle from "../../../shared/components/partials/SectionTitle";
import Icon from "../../../../assets/icon";
import ChooseusList from "./ChooseusList";

interface IChooseusItem {
  name: string;
  icon: string;
  desc: string;
}

const chooseusList: IChooseusItem[] = [
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

const SectionChooseus = () => {
  return (
    <section className="section section-chooseus">
      <div className="container">
        <SectionTitle title='why should you choose us' hasButton={false}/>
        <div className="section-content">
          <ChooseusList chooseusList={chooseusList}/>
        </div>
      </div>
    </section>
  );
};

export default SectionChooseus;
