import React from 'react';

interface IButtonProps {
  title: string,
  type: string,
  typeSection?: string
}

const Button: React.FC<IButtonProps> = ({title, type, typeSection}) => {
  let classButton = 'btn';
  if(type && typeSection) {
    classButton += ` btn-${type} btn-${typeSection}`;
  } 
  if(type && !typeSection) {
    classButton += ` btn-${type}`;
  }

  return (
    <a href="#" className={classButton}>
      {title}
    </a>
  )
}

export default Button;