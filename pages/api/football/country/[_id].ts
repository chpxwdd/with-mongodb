import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const countries = await mongo.collection(EStorageCollection.COUNTRY).find({_id: new ObjectId(String(req.query._id))}).toArray();
        res.json(countries)
    } catch (e) {console.error(e)}
}