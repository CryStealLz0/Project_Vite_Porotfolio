export interface IBaseData {
  contentAbout: IContentAbout[];
  contentSkills: IContentSkills[];
}

// Data About
export interface IContentAbout {
  idLink: string;
  heading1: string;
  heading2: string;
  description: string;
  buttons: string;
  idNext: string;
}

export interface IContentAboutProps {
  contentAboutData: IContentAbout[];
}
// Data About End

// Data Skill
export interface IContentSkills {
  key: number;
  clasPosition: string;
  clasColor: string;
  svgIcon: string;
  styleIcon: string;
  headIcon: string;
  desSkills: string;
  linkSkills: {
    linkPlaylist: {
      headList: string;
      links: Array<{
        id: number;
        listLink: string;
        list: string;
      }>;
    };
    linkBootcamp: {
      headList: string;
      links: Array<{
        id: number;
        listLink: string;
        list: string;
      }>;
    };
  };
}

export interface IContentSkillsProps {
  contentSkillsData: IContentSkills[];
}
// Data Skill End
