import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const countries = await mongo.collection(EStorageCollection.COUNTRY).find({code: req.query.code}).toArray();
        res.json({countries})
    } catch (e) {console.error(e)}
}