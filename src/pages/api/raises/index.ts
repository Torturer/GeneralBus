// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { parse, stringify } from 'querystring';


export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
    const client = await clientPromise;
    const db = client.db("fligt")

    const raises = await db
      .collection("raises")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();


    res.status(200).json(raises)

  

  // if (req.method === "POST") {
  //   try {
  //     const client = await clientPromise;
  //     const db = client.db("fligt")

  //     const raises = await db
  //       .collection("raises")

  //       .toArray();


  //     res.status(200).json(raises)
  //   } catch (error) { console.log(error) }
  // }
}




// const client = await clientPromise;
// const db = client.db("fligt");

// const movies = await db
//     .collection("raises")
//     .find({})
//     .sort({ metacritic: -1 })
//     .limit(10)
//     .toArray();

// res.json(movies);

// return {
//     props: {

//     }
// }
// } catch (error) {
// return
// }
