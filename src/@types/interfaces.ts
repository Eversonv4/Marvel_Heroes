export interface ICharacterProps {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface ICardsListProps {
  charactersDataList: ICharacterProps[];
  isLoading?: boolean;
}

export interface ILoadAnimationProps {
  size?: string;
  loaderColor?: string;
}

export interface ICharacter extends ICharacterProps {
  description: string;
  urls: { type: string; url: string }[];
}

export interface IComicsProps {
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface IComicsListProps {
  comics: IComicsProps[];
}

export interface IDetailCharProps {
  character: ICharacter[];
  comics: IComicsProps[];
}

export interface IHeaderProps {
  onClick?: () => void;
}

export interface IFooterProps {
  onClick?: () => void;
}
