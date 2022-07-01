import React from 'react';
import { IChooseus } from './../../../shared/interfaces/chooseus';


const ChooseusItem: React.FC<IChooseus> = ({ name, icon, desc }) => {
  return (
    <li className="col-3 col-sm-12">
      <div className="chooseus">
        <div className="chooseus-thumnail">
          <img src={icon} alt={name} />
        </div>
        <div className="chooseus-content">
          <h4 className="typo-2 chooseus-title">{name}</h4>
          <p className="chooseus-desc">{desc}</p>
        </div>
      </div>
    </li>
  );
};

export default ChooseusItem;
