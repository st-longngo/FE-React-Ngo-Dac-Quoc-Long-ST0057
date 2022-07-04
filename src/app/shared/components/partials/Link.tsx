import React from 'react';
import { Link } from 'react-router-dom';

interface ILinkProps {
  title: string,
  customClass: string,
  path: string
}

export const ButtonLink: React.FC<ILinkProps> = ({ title, customClass, path }) => {
  return (
    <Link to={path} className={customClass}>
      {title}
    </Link>
  )
}
