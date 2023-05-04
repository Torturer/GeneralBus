import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("fligt");
        const raise = req.body;

        const post = await db.collection("raises").insertOne(
            {
                ...raise
            }
        );

        res.json(post);
    } catch (e) {
        console.error(e);
    }
};