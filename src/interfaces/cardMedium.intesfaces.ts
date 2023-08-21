export interface ICardMedium {
    id: number,
    title: string,
    description: string,
    image: string
}

export interface ICardDataMedium {
    mediumcard: ICardMedium[]
}

export interface ICardDataSingleMedium {
    mediumcard: ICardMedium
    // card: ICardMedium
}

