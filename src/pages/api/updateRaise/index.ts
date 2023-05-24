import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await clientPromise;
    const db = client.db("fligt");
    const { id } = req.query;
    const raise = req.body;

    console.log(raise)

    const post = await db.collection("raises").findOneAndUpdate(
        {
            _id: new ObjectId(id as string),
        },
        {
            $set: {
                busName: raise.busName,
                busImg: raise.busImg,
                busNumber: raise.busNumber,
                phone: raise.phone,
                city: raise.city,
                cityTarget: raise.cityTarget,
                landingTime: raise.landingTime,
                dataOfLanding: raise.dataOfLanding,
                price: raise.price,
                listOfStops: raise.listOfStops ?? []

            },
        },
        {
            returnDocument: "after"
        }
    );

    res.status(200).json(post);
}