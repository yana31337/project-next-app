import { ICardDataSingle } from "@/interfaces/card.interfaces"
import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { ICardDataSingleMedium } from "@/interfaces/cardMedium.intesfaces"


const MediumCardItem: FC<ICardDataSingleMedium> = (props:ICardDataSingleMedium) => {
    return (

        <div className='w-80 text-black'>
            <div className='h-auto relative'>
                <div className='absolute flex flex-col w-full inset-x-0 bottom-0 pl-3  bg-white   '>
                    <div className=''>
                        <a href="#" className='mr-5  text-xs uppercase'> { props.mediumcard.title} </a>
                    </div>

                    <a href="#" className=' text-xl font-medium font-sans '> {props.mediumcard.description} </a>
                    <div className='flex flex-row mb-2'>
                        <img src='../menuBlack.svg' alt="" className='w-4 h-4 aling-center' />
                        <a href="" className='uppercase ml-2 text-xs'>Read</a>
                    </div>
                </div>
                <img src={props.mediumcard.image} alt="" className='' />
            </div>

        </div>

    )
}

export default MediumCardItem



    //     return (
    //     <div className='flex flex-row mb-5'>
    //       {/* <img src='' alt='Image' className='h-24 w-24 mr-5' /> */}
    //       <Image src={card.image} alt={card.title} width={96} height={96} className='mr-5' />
    //       <div>
    //         <Link href={`/card/${card.id}`} className=''>
    //           <div className='tracking-wider text-sm pb-1'>{card.title}</div>
    //           <div className=' text-base tracking-wide hover:underline'>{card.description}</div>
    //         </Link>
    //       </div>
    //     </div>
    //   )


