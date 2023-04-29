import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb';


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db("fligt")
    const { id } = req.query

    const raises = await db
        .collection("raises")
        .findOne({
            _id: new ObjectId(id as string)
        });


    res.status(200).json(raises);
}