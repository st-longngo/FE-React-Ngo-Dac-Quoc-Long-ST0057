import React from 'react';

interface IPolicyProps {
  title: string;
  icon: string;
  desc: string;
}

const PolicyItem: React.FC<IPolicyProps> = ({ title, icon, desc }) => {
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
