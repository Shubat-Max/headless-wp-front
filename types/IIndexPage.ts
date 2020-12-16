interface IInteriorsSlider
{
  slug: string;
  image: string,
  color: string,
  categories: Array<any>,
}

interface IPopularSlider {
  pid: string
  title: string,
  subtitle: Array<string>,
  slug: string,
  price: number,
  image: string,
  categories: Array<any>
}

export interface ISuperiorSlider {
  title: string,
  href: string,
  img: string,
  imgMobile?: string,
}

export interface IProjectsSlider {
  title: string,
  category: string,
  img: string,
  url: string,
}

export interface IInstagramMainProducts {
  pid: string,
  name: string,
  slug: string,
  price: number,
  image: string,
}

export interface IInstagramMain {
  instagramPost: string,
  products: Array<IInstagramMainProducts>
}

export interface IIndexPage {
  readonly superiorSlider: Array<ISuperiorSlider>,
  readonly popularSlider: Array<IPopularSlider>,
  readonly interiorsSlider?: Array<IInteriorsSlider>,
  readonly instagramMain:  Array<IInstagramMain>,
  readonly projectsSlider: Array<IProjectsSlider>
}