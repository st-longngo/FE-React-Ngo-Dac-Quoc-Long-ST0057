import { IAbout } from './../interfaces/about';

export const dataAbout: IAbout[] = [
  {
    title: 'New arrivalsare now in!',
    classCol: 'col-6 col-sm-12',
    classIndex: 'about-item-1',
    link: {
      title: 'Show Collection',
      customClass: 'btn btn-primary btn-about',
      path: '/'
    },
  },
  {
    title: 'Basic t-shirts $29,99',
    classCol: 'col-3 col-sm-6',
    classIndex: 'about-item-2',
    link: {
      title: 'More Details',
      customClass: 'btn btn-primary btn-about',
      path: '/'
    }
  },
  {
    title: 'Sale this summer',
    classCol: 'col-3 col-sm-6',
    classIndex: 'about-item-3',
    link: {
      title: 'View All',
      customClass: 'btn btn-primary btn-about',
      path: '/'
    },
    badge: {
      discount: 50,
      type: 'primary'
    }
  }
];