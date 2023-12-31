import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') throw new Error("method is not POST")
        if (!req.body.year) throw new Error("not receive year")
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const seasons = await mongo.collection(EStorageCollection.SEASON).find({year: req.body.year}).toArray();
        res.json({seasons})
    } catch (e) {console.error(e)}
}