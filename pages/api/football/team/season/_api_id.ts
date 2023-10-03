import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') throw new Error("method is not POST")
        if (!req.body._api_id) throw new Error("not receive _api_id")
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const team = await mongo.collection(EStorageCollection.TEAM).findOne({_api_id: new ObjectId(req.body._api_id)});
        res.json({team})
    } catch (e) {console.error(e)}
}