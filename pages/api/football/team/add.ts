import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') throw new Error("method is not POST")
        if (!req.body.team) throw new Error("not receive _id")
        console.log("saved team obj: ", req.body.team);

        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);

        // find team 
        const storageTeam = mongo.collection(EStorageCollection.TEAM)
            .find({league: {$in: [req.body.team.league]}});
        console.log(storageTeam)

        // const team = await mongo.collection(EStorageCollection.TEAM).updateOne({}, {team: {}});
        // res.json({team})

    } catch (e) {console.error(e)}
}