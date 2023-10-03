import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') throw new Error("method is not POST")
        if (!req.body) throw new Error("not receive data")
        let criteria = {}
        // uild criteria
        if (req.body.api_id) {
            criteria = {api_id: req.body.api_id}
        }
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const league = await mongo.collection(EStorageCollection.LEAGUE).find(criteria).toArray();
        res.json({league})

    } catch (e) {console.error(e)}
}
console.log("dasd");