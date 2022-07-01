import React from "react";
import { IAbout } from "../../../shared/interfaces/about";
import AboutItem from "./AboutItem";
import { dataAbout } from "../../../shared/constant/about";

const AboutList = () => {
  return (
    <ul className="row">
      {dataAbout.map((about: IAbout, idx) => {
        return (
          <AboutItem
            key={idx}
            title={about.title}
            classCol={about.classCol}
            classIndex={about.classIndex}
            link={about.link}
            badge={about.badge}
          />
        );
      })}
    </ul>
  );
};

export default AboutList;
