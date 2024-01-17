export interface IBaseData {
  contentAbout: IContentAbout[];
}

export interface IContentAbout {
  id: string;
  heading1: string;
  heading2: string;
  description: string;
  buttons: string;
  idNext: string;
}

export interface IContentAboutProps {
  contentAboutData: IContentAbout[];
}
