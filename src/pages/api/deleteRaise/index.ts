import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("fligt");
        const { id } = req.query;

        const post = await db.collection("raises").deleteOne({
            _id: new ObjectId(id as string),
        });

        res.json(post);
    } catch (e) {
        console.error(e);
    }
};