import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'POST') throw new Error("method not POST")
        const {_id, module, user} = req.body
        if (!user || !module || !_id) throw new Error("not receive needed data")
        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        // console.log("remove", _id, module, user)
        switch (module) {
            default: break;
            case "countries":
                await mongo.collection("FootballFavorite").updateOne({user: new ObjectId(user)}, {$pull: {countries: new ObjectId(_id)}})
                break
            case "leagues":
                await mongo.collection("FootballFavorite").updateOne({user: new ObjectId(user)}, {$pull: {leagues: new ObjectId(_id)}})
                break
            case "seasons":
                await mongo.collection("FootballFavorite").updateOne({user: new ObjectId(user)}, {$pull: {seasons: new ObjectId(_id)}})
                break
            case "teams":
                await mongo.collection("FootballFavorite").updateOne({user: new ObjectId(user)}, {$pull: {teams: new ObjectId(_id)}})
                break
        }
        const favorite = await mongo.collection("FootballFavorite").findOne({user: new ObjectId(req.body.user)});
        res.json({favorite})
    } catch (e) {console.error(e)}
}