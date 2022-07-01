import React from 'react';

interface ILinkProps {
  title: string,
  customClass: string,
  path: string
}

const Link: React.FC<ILinkProps> = ({ title, customClass, path }) => {
  return (
    <a href={path} className={customClass}>
      {title}
    </a>
  )
}

export default Link;