export interface IAbout {
  title: string;
  classCol: string;
  classIndex: string;
  link: {
    title: string;
    customClass: string;
    path: string;
  };
  badge?: {
    discount: number;
    type: string;
  };
}
