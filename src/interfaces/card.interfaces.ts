export interface ICard {
    id: number,
    title: string,
    description: string,
    image: string
}

export interface ICardData {
    cards: ICard[]

}

export interface ICardDataSingle {
    card: ICard
 
}

