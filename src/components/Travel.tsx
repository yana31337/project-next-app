import LargeCardItem from "./cards/LargeCardItem"
import MediumCardItem from "./cards/MediumCardItem"
import SmallCardItem from "./cards/SmallCardItem"
import { CardData } from "@/pages"
import { FC } from "react"
import Image from "next/image"


const Travel: FC<CardData> = (props: CardData) => {
    return (
        <div className='bg-black '>

            <div className=' text-white pb-10 relative  h-auto '>

                <div className='absolute grid grid-cols-12 gap-x-10 col-start-auto max-w-5xl h-4/5 text-white pb-14  ml-52'>

                    <div className='col-span-12 text-center py-16 min-h-min'>
                        <h2 className='text-5xl font-semibold uppercase tracking-wider'> Travel</h2>
                        <div className='h-1 mt-5 mx-auto mb-0 w-14 bg-yellow-400 '>
                        </div>
                    </div>

                    <div className='col-span-8'>

                        <LargeCardItem largecard={props.card.cards.largecard[0]} />

                        <div className='flex flex-row justify-between  mt-10'>
                            <MediumCardItem mediumcard={props.card.cards.mediumcard[0]} /> 
                            <MediumCardItem mediumcard={props.card.cards.mediumcard[1]} />
                        </div>

                    </div>

                    <div className='col-span-4'>

                        <div className='flex ml-2 '>
                            <div className='w-1 mr-4 mb-4 h-8 bg-yellow-400'> </div>
                            <h2 className=' uppercase text-3xl mb-4 '>Today's Picks</h2>
                        </div>

                        <div >
                            {props.card.cards.smallcard.map(card => <SmallCardItem key={card.id} card={card} />)}
                        </div>

                        <div className=''>
                            <a href="#" className='uppercase text-sm font-medium tracking-wide underline decoration-yellow-500 decoration-2 underline-offset-4 hover:no-underline hover:bg-yellow-400 hover:text-black'>See More</a>
                        </div>
                    </div>

                </div>
                <Image src='/national.jpg' alt="" width={1440} height={500} className="" />
                <div className='bg-black h-40 '></div>

            </div>

        </div>
    )
}

export default Travel