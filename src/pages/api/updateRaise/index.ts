import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { IDataRaise } from "@/components/Table_Flights/data/data";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await clientPromise;
    const db = client.db("fligt");
    const { id } = req.query;
    const raise = req.body as IDataRaise

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
                city: raise.city,
                cityTarget: raise.cityTarget,
                landingTime: raise.landingTime,
                dataOfLanding: raise.dataOfLanding,
                price: raise.price,
                listOfStops: raise.listOfStops ?? [],
                finishDate: raise.finishDate,
                finishTime: raise.finishTime,
                isRegular: raise.isRegular,
                regular: raise.regular,
                map: raise.map

            } as IDataRaise
        },
        {
            returnDocument: "after"
        }
    );

    res.status(200).json(post);
}