import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') throw new Error("method not POST")
        if (!req.body.user) throw new Error("not receive user")
        // console.log("gerFavoriteUser for user: ", req.body.user)
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const favorite = await mongo.collection(EStorageCollection.FAVORITE).findOne({user: new ObjectId(req.body.user)});
        res.json({favorite})
    } catch (e) {console.error(e)}
}