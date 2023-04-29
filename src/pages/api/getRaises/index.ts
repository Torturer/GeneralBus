import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'


export default async function (req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db("fligt")

  const raises = await db
    .collection("raises")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();


  res.status(200).json(raises);
}

