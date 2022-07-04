import React from 'react';
import { Button } from './Button';

interface ISectionTitleProps {
  title: string,
  hasButton?: boolean
}

export const SectionTitle: React.FC<ISectionTitleProps> = ({ title, hasButton }) => {
  return (
    <div className={!hasButton ? "section-header section-center": "section-header"}>
      <h3 className="txt-title section-title">{title}</h3>
      {hasButton && <Button title="show more" customClass="btn btn-border"/>}
    </div>
  )
}
