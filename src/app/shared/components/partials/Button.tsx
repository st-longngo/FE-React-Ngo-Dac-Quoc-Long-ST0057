import React from 'react';

interface IButtonProps {
  title: string,
  customClass: string,
  onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({ title, customClass, onClick }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button;