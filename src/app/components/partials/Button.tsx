import React from 'react';

interface IButtonProps {
  name: string,
  type: 'primary' | 'secondary' | 'border',
  typeSection?: string
}

const Button: React.FC<IButtonProps> = ({name, type, typeSection}) => {
  return (
    <a href='' className={type && typeSection ? `btn btn-${type} btn-${typeSection}` : (!typeSection ? `btn btn-${type}` : `btn`)}>
      {name}
    </a>
  )
}

export default Button