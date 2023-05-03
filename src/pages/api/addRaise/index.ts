import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("fligt");
        const raise = req.body;

        const post = await db.collection("raises").insertOne({
            busName: raise.busName,
            busImg: raise.busImg,
            busNumber: raise.busNumber,
            phone: raise.phone,
            city: raise.city,
            cityTarget: raise.cityTarget,
            landingTime: raise.landingTime,
            dataOfLanding: raise.dataOfLanding,
            price: raise.price

        });

        res.json(post);
    } catch (e) {
        console.error(e);
    }
};