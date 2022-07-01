import React from "react";
import AboutItem from "./AboutItem";

interface IAboutItem {
  title: string;
  classCol: string;
  classIndex: string;
  link: {
    title: string;
    customClass: string;
  };
  badge?: {
    discount: number;
    type: string;
  };
}

interface IAboutListProps {
  dataAbout: IAboutItem[];
}

const AboutList = ({ dataAbout }: IAboutListProps) => {
  return (
    <ul className="row">
      {dataAbout.map((item, idx) => {
        return (
          <AboutItem
            key={idx}
            title={item.title}
            classCol={item.classCol}
            classIndex={item.classIndex}
            link={item.link}
            badge={item.badge}
          />
        );
      })}
    </ul>
  );
};

export default AboutList;
