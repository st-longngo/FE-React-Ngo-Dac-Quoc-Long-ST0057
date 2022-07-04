import React from 'react';
import { IPolicy } from '../../../shared/interfaces/policy';

interface IPolicyProps {
  policy: IPolicy
}

const PolicyItem: React.FC<IPolicyProps> = ({ policy }) => {
  const { title, icon, desc } = policy;

  return (
    <li className="policy-item">
      <div className="policy-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="policy-content">
        <h4 className="txt-bold policy-title">{title}</h4>
        <p className="text policy-desc">{desc}</p>
      </div>
    </li>
  );
};

export default PolicyItem;
