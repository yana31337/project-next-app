export interface ICardLarge {
    id: number,
    title: string,
    description: string,
    image: string
}


export interface ICardDataLarge {
    cardsLarge: ICardLarge[]
}

export interface ICardDataSingleLarge {
    cardsLarge: ICardLarge
}

