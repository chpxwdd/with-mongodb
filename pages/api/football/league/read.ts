import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'

interface ICriteria {
    api_id: number | number[]
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'GET') throw new Error("method is not GET")

        if (!req.query) throw new Error("not receive data")

        const criteria: ICriteria = (Array.isArray(req.query.api_id))
            ? {api_id: req.query.api_id.map(item => parseInt(String(item)))}
            : {api_id: parseInt(String(req.query.api_id))}

        console.log(criteria)
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const league = await mongo.collection(EStorageCollection.LEAGUE).find(criteria).toArray();
        res.json({league: league[0]})

    } catch (e) {console.error(e)}
}