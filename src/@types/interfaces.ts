export interface ICharacterProps {
  id: string;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

export interface CardsListProps {
  charactersHighlight: ICharacterProps[];
}
