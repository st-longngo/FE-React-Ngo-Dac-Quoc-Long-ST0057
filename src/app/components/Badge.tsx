import React from 'react';

interface IBadgeProps {
  discount: number;
  type: 'primary' | 'secondary';
}

const Badge: React.FC<IBadgeProps> = ({ discount, type }) => {
  return <span className={type ? `badge badge-${type}`: 'badge'}>-{discount}%</span>;
};

export default Badge;
