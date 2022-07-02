import React from "react";
import { IChooseus } from "../../../shared/interfaces/chooseus";
import ChooseusItem from "./ChooseusItem";
import { chooseusList } from "../../../shared/constant/chooseus";

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
