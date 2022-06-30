import React from 'react';
import Badge from '../../../../components/partials/Badge';
import Button from '../../../../components/partials/Button';

interface IAboutItemProps {
  title: string;
  classCol: string;
  classIndex: string;
  button: any;
  badge?: any;
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
      <div className={classIndex ? `about ${classIndex}` : 'about'}>
        <div className='about-content'>
          {badge && (
            <div className='about-badge'>
              <Badge discount={badge.discount} type={badge.type}/>
            </div>
          )}
          <h4 className='typo-1 about-title'>{title}</h4>
          <div className='about-link'>
            <Button name={button.name} type={button.type} typeSection={button.typeSection}/>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AboutItem;
