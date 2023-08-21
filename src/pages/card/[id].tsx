import CardDetail from "@/components/screens/card-detail/CardDetail";
import { ICard, ICardDataSingle } from "@/interfaces/card.interfaces";
import { CardService } from "@/services/card.service";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

const CardDetailPage: NextPage<ICardDataSingle> = ({ card }) => {
    return (
        <CardDetail card={card} />

        // <div className='flex flex-row mb-5'>
        //     <img src={card.image} alt='Image' className='h-24 w-24 mr-5' />
        //     <div>
        //         <a href="#" className=''>
        //             <div className='tracking-wider text-sm pb-1'>{card.title}</div>
        //             <div className=' text-base tracking-wide hover:underline'>{card.description}</div>
        //         </a>
        //     </div>
        // </div>
    )
}

interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const cards = await CardService.getAllSmall()

    const paths = cards.map((card: { id: any; }) => {
        return {
            params: {id: card.id}
        }
    })

    return {
        // paths: cards.map((card: { id: { toString: () => any; }; }) => ({
        //     params: {
        //         id: card.id.toString()
        //     }
        // })),
        paths,
        fallback: 'blocking',
    }

}

export const getStaticProps: GetStaticProps<ICardDataSingle> = async ({
    params,
}) => {
    const card = await CardService.getByIdSmall(String(params?.id))
    return {
        props: {
            card
        }
    }
}

export default CardDetailPage;