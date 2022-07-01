import React from 'react';

interface IButtonProps {
  title: string,
  customClass: string,
}

const Button: React.FC<IButtonProps> = ({ title, customClass }) => {
  return (
    <button className={customClass ? `btn ${customClass}`: 'btn'}>
      {title}
    </button>
  )
}

export default Button;