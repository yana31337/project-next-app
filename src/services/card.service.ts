import { ICard, ICardData } from "@/interfaces/card.interfaces"
import { ICardLarge } from "@/interfaces/cardLarge.intesfaces"
import { ICardMedium } from "@/interfaces/cardMedium.intesfaces"
import { CardData } from "@/pages"
import axios from "axios"

const API_URL = 'http://localhost:7000'

axios.defaults.baseURL = API_URL

export const CardService = {
    async getAllSmall() {
        const { data } = await axios.get<ICardData>('/cards')
        console.log(data)
        return data
    },

    async getByIdSmall(id: string) {
        const { data } = await axios.get<ICard[]>('/cards/:id', {
            params: {
                id
            },
        })

        return data[0]
    },
}

// export const CardMediumService = {
//     async getAllMedium() {
//         const { data } = await axios.get<ICardMedium[]>('/mediumcard')
//         return data
//     },

//     async getByIdMedium(id: string) {
//         const { data } = await axios.get<ICardMedium[]>('/mediumcard', {
//             params: {
//                 id
//             },
//         })

//         return data[0]
//     },
// }

// export const CardLargeService = {
//     async getAllLarge() {
//         const { data } = await axios.get<ICardLarge[]>('/largecard')
//         return data
//     },

//     async getByIdLarge(id: string) {
//         const { data } = await axios.get<ICardLarge[]>('/largecard', {
//             params: {
//                 id
//             },
//         })

//         return data[0]
//     },
// }