export interface ICardMedium {
    id: number,
    title: string,
    description: string,
    image: string
}


export interface ICardDataMedium {
    cardsMedium: ICardMedium[]
}

export interface ICardDataSingleMedium {
    cardsMedium: ICardMedium
}

