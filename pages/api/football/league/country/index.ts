import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') throw new Error("method is not POST")
        if (!req.body.country) throw new Error("not receive country")
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const leagues = await mongo.collection(EStorageCollection.LEAGUE).find({country: new ObjectId(req.body.country)}).toArray();
        res.json({leagues})
    } catch (e) {console.error(e)}
}