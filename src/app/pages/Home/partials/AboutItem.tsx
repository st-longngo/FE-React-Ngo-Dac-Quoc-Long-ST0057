import React from 'react';
import { IAbout } from '../../../shared/interfaces/about';
import Badge from './../../../shared/components/partials/Badge';
import Link from './../../../shared/components/partials/Link';

const AboutItem: React.FC<IAbout> = ({
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
            <Link
              title={link.title}
              customClass={link.customClass}
              path={link.path}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default AboutItem;