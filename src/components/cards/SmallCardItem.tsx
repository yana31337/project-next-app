import { ICardData, ICardDataSingle } from "@/interfaces/card.interfaces"
import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { CardService } from "@/services/card.service"
import { GetServerSideProps } from "next"


const SmallCardItem: FC<ICardDataSingle> = ({ card }) => {
  return (
    <div className='flex flex-row mb-5'>
      {/* <img src='' alt='Image' className='h-24 w-24 mr-5' /> */}
      <Image src={card.image} alt={card.title} width={96} height={96} className='mr-5' />
      <div>
        <Link href={`/card/${card.id}`} className=''>
          <div className='tracking-wider text-sm pb-1'>{card.title}</div>
          <div className=' text-base tracking-wide hover:underline'>{card.description}</div>
        </Link>
      </div>
    </div>
  )
}

export default SmallCardItem;

// export const getServerSideProps: GetServerSideProps<ICardData> = async () => {
//   const cards = await CardService.getAllSmall()
//   return {
//     props: {
//       cards
//     }
//   }
// } 