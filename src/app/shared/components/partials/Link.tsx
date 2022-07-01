import React from 'react';

interface ILinkProps {
  title: string,
  customClass: string,
}

const Link: React.FC<ILinkProps> = ({ title, customClass }) => {
  return (
    <a href="#" className={customClass ? `btn ${customClass}`: 'btn'}>
      {title}
    </a>
  )
}

export default Link;