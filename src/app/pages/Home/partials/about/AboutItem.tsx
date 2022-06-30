import React from 'react';
import Badge from '../../../../components/partials/Badge';
import Button from '../../../../components/partials/Button';

interface IAboutItemProps {
  title: string;
  classCol: string;
  classIndex: string;
  button: {
    title: string;
    type: string;
    typeSection: string;
  };
  badge?: {
    discount: number;
    type: string;
  };
}

const AboutItem: React.FC<IAboutItemProps> = ({
  title,
  classCol,
  classIndex,
  button,
  badge,
}) => {
  return (
    <li className={classCol}>
      <div className={classIndex ? `about ${classIndex}` : "about"}>
        <div className="about-content">
          {badge && (
            <div className="about-badge">
              <Badge discount={badge.discount} type={badge.type} />
            </div>
          )}
          <h4 className="typo-1 about-title">{title}</h4>
          <div className="about-link">
            <Button
              title={button.title}
              type={button.type}
              typeSection={button.typeSection}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default AboutItem;
