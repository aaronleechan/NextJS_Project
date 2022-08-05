export interface IImageRender {
  src: string;
  alt: string;
  width: number;
  height: number;
  url: string;
  external?: boolean;
}

export interface ITextRender {
  title: string;
  url: string;
}

export interface ISidebarLayout {}
