import { ICardLarge } from "./cardLarge.intesfaces"
import { ICardMedium } from "./cardMedium.intesfaces"

export interface ICard {
    id: number,
    title: string,
    description: string,
    image: string
}

export interface ICardData {
    card: ICard[]
    mediumcard:  ICard[],
    smallcard: ICard[],
    largecard:  ICard[]
}

export interface ICardDataSingle {
    card: ICard
}

