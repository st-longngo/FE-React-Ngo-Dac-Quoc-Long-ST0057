import React from 'react';
import Badge from './../../../../shared/components/partials/Badge';
import Button from '../../../../shared/components/partials/Link';

interface IAboutItemProps {
  title: string;
  classCol: string;
  classIndex: string;
  link: {
    title: string;
    customClass: string
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
  link,
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
              title={link.title}
              customClass={link.customClass}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default AboutItem;
