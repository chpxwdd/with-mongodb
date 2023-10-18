import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import {ObjectId} from "mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        if (req.method !== 'GET') throw new Error("method error")
        if (!req.query._user_id) throw new Error("not receive user")

        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const user = await mongo.collection(EStorageCollection.USER).findOne({_id: new ObjectId(String(req.query._user_id))})
        if (!user) {
            res.status(500).json({message: 'user not found is not valid'});
            return
        }

        console.log("gerFavoriteUser for user: ", req.query._user_id)
        let favorite = await mongo.collection(EStorageCollection.FAVORITE)
            .findOne({user: new ObjectId(String(req.query._user_id))})

        // // если не найден а пользователь существует то создаем каркас избранного
        if (!favorite) {
            const insert = mongo.collection(EStorageCollection.FAVORITE).insertOne({
                user: new ObjectId(String(req.query._user_id)),
                __v: 0,
                countries: [],
                leagues: [],
                seasons: [],
                teams: []
            })

            console.log("insert to Fav")
            favorite = await mongo.collection(EStorageCollection.FAVORITE)
                .findOne({user: new ObjectId(String(req.query._user_id))})
        }

        res.json({favorite})

    } catch (e) {console.error(e)}
}