import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'GET') throw new Error("method is not GET")
        if (!req.query) throw new Error("not receive data")
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const teams = await mongo.collection(EStorageCollection.TEAM).find(
            (Array.isArray(req.query.league))
                ? {league: req.query.league.map(item => parseInt(String(item)))}
                : {league: {"$in": [parseInt(String(req.query.league))]}}
        ).toArray();
        res.json({teams})
    } catch (e) {console.error(e)}
}