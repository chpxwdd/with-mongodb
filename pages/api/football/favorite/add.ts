import {EStorageCollection, EStorageFavorite} from "@/constants/storage";
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
        switch (module) {
            default: break;
            case EStorageFavorite.COUNTRY:
                const countries = await mongo.collection(EStorageCollection.FAVORITE).findOne({countries: {_id: new Object(_id)}})
                if (!countries) await mongo.collection(EStorageCollection.FAVORITE).updateOne({user: new ObjectId(user)}, {$push: {countries: new ObjectId(_id)}})
                break
            case EStorageFavorite.LEAGUE:
                const leagues = await mongo.collection(EStorageCollection.FAVORITE).findOne({leagues: {_id: new Object(_id)}});
                if (!leagues) await mongo.collection(EStorageCollection.FAVORITE).updateOne({user: new ObjectId(user)}, {$push: {leagues: new ObjectId(_id)}})
                break
            case EStorageFavorite.SEASON:
                const seasons = await mongo.collection(EStorageCollection.FAVORITE).findOne({seasons: {_id: new Object(_id)}})
                if (!seasons) await mongo.collection(EStorageCollection.FAVORITE).updateOne({user: new ObjectId(user)}, {$push: {seasons: new ObjectId(_id)}})
                break
            case EStorageFavorite.TEAM:
                const teams = await mongo.collection(EStorageCollection.FAVORITE).findOne({teams: {_id: new Object(_id)}})
                if (!teams) await mongo.collection(EStorageCollection.FAVORITE).updateOne({user: new ObjectId(user)}, {$push: {teams: new ObjectId(_id)}})
                break
        }
        const favorite = await mongo.collection("FootballFavorite").findOne({user: new ObjectId(req.body.user)});
        res.json({favorite})
    } catch (e) {console.error(e);}
};