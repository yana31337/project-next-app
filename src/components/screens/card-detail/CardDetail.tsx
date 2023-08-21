import Layout from "@/components/layout/Layout";
import { ICardDataSingle } from "@/interfaces/card.interfaces";
import { FC } from "react";
import Image from "next/image";
import SmallCardItem from "@/components/cards/SmallCardItem";

const CardDetail: FC<ICardDataSingle> = ({ card }) => {
    return (
        // <SmallCardItem card={card} />
    <Layout >
        {/* <Image src={card.image} alt={card.title} height={200} width={200} /> */}
        <h1>{card.title}</h1>
        <h2>{card.description}</h2>
    </Layout>
    )
}

export default CardDetail;