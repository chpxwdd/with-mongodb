import {EStorageCollection, EStorageFavorite} from "@/constants/storage"
import clientPromise from "@/lib/mongodb"
import {ObjectId} from "mongodb"
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        if (req.method !== 'POST') throw new Error("method not POST")
        if (!req.body.user) throw new Error("getFavoritesLeagues nor receive")
        console.log(req.body.user)
        const client = await clientPromise
        const mongo = client.db(process.env.MONGODB_DATABASE)

        const favorite = await mongo
            .collection(EStorageCollection.FAVORITE)
            .aggregate([
                {
                    $match: {
                        user: new ObjectId(req.body.user)
                    }
                },
                {$unwind: {path: '$leagues'}},
                {
                    $lookup: {
                        from: 'FootballLeague',
                        localField: 'leagues',
                        foreignField: '_id',
                        as: 'leaguesObjList'
                    }
                },
                {$unwind: {path: '$leaguesObjList'}},
                {
                    $group: {
                        _id: '$_id',
                        leagues: {$push: '$leaguesObjList'}
                    }
                },
                {$unwind: {path: '$leagues'}},
                {
                    $lookup: {
                        from: 'FootballCountry',
                        localField: 'leagues.country',
                        foreignField: '_id',
                        as: 'country'
                    }
                },
                {$unwind: {path: '$country'}},
                {
                    $group: {
                        _id: '$_id',
                        leagues: {
                            $push: {
                                league: '$leagues',
                                country: '$country'
                            }
                        }
                    }
                }
            ],
                {maxTimeMS: 60000, allowDiskUse: true})
            .toArray()


        res.json({favorite: favorite[0]})
    } catch (e) {console.error(e)}
}