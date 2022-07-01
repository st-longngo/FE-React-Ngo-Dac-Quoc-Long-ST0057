import React from "react";
import ChooseusItem from "./ChooseusItem";
import Icon from "../../../../assets/icon";

interface IChooseusItem {
  name: string;
  icon: string;
  desc: string;
}

interface IChooseusListProps {
  chooseusList: IChooseusItem[]
}

const ChooseusList = ({ chooseusList }: IChooseusListProps) => {
  return (
    <ul className="row">
      {chooseusList.map((chooseus: IChooseusItem, idx: number) => {
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
