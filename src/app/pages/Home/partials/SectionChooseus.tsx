import React from "react";
import SectionTitle from "../../../shared/components/partials/SectionTitle";
import ChooseusList from "./ChooseusList";

const SectionChooseus = () => {
  return (
    <section className="section section-chooseus">
      <div className="container">
        <SectionTitle title="why should you choose us" hasButton={false}/>
        <div className="section-content">
          <ChooseusList />
        </div>
      </div>
    </section>
  );
};

export default SectionChooseus;
