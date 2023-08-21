import Home from "@/components/screens/home/Home";
import { ICard, ICardData } from "@/interfaces/card.interfaces";
import { ICardDataLarge, ICardLarge } from "@/interfaces/cardLarge.intesfaces";
import { ICardDataMedium, ICardMedium } from "@/interfaces/cardMedium.intesfaces";
import { CardLargeService, CardMediumService, CardService } from "@/services/card.service";
import { GetServerSideProps, NextPage } from "next";

export type CardData = {
  mediumcard: ICardMedium[],
  smallcard: ICard[],
  largecard: ICardLarge[],
  card: ICard[]
}

const HomePage: NextPage<CardData> = (props: ICardData) => {
  return <Home 
  card={props.card}
  //  mediumcard={props.card.mediumcard} smallcard={props.card.smallcard} largecard={props.card.largecard}  // mediumcard={props.mediumcard} largecard={props.largecard}
  />
}

export const getServerSideProps: GetServerSideProps<ICardData> = async () => {
  const card = await CardService.getAllSmall()
  return {
    props: {
      card
    }
  }
}

// export const getServerSidePropsMedium: GetServerSideProps<ICardDataMedium> = async () => {
//   const cardsMedium = await CardMediumService.getAllMedium()
//   return {
//     props: {
//       cardsMedium
//     }
//   }
// }

// export const getServerSidePropsLarge: GetServerSideProps<ICardDataLarge> = async () => {
//   const cardsLarge = await CardLargeService.getAllLarge()
//   return {
//     props: {
//       cardsLarge
//     }
//   }
// }

export default HomePage




// import { Inter } from 'next/font/google'
// import Home from '@/components/screens/home/Home'

// const inter = Inter({ subsets: ['latin'] })

// export default function HomePage() {
//   return (
//     <>
//       <Home cards={[]} />
//     </>
//   )
// }
