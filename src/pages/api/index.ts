// import { ICard } from './../../app/models';
import { cards } from './../../app/data';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

type ICard = {
  id: number,
  title: string,
  description: string,
  image: string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICard>
) {
  res.status(200).json(cards)
}
