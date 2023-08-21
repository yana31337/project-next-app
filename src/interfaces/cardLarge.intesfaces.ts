export interface ICardLarge {
    largecard: any
    id: number,
    title: string,
    description: string,
    image: string
}


export interface ICardDataLarge {
    largecard: ICardLarge[]
}

export interface ICardDataSingleLarge {
    largecard: ICardLarge
}

