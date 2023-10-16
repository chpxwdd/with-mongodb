import {EStorageCollection} from "@/constants/storage";
import clientPromise from "@/lib/mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        if (req.method !== 'POST') throw new Error("method is not POST")

        // if (!req.body) throw new Error("not receive teams")
        console.log("body data: ", req.body);
        console.log("saved teams length: ", req.body.teams);
        console.log("saved teams for season: ", req.body.year);
        console.log("saved teams for leagues: ", req.body.league);

        const {teams, league, year} = req.body
        // const insertData = teams.map(({id, name, logo}) => {return {api_id: id, name, logo, season: year, league}})





        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);

        // // find league 
        const collectionLeague = mongo.collection(EStorageCollection.LEAGUE)
        const storageLeague = collectionLeague.findOne({api_id: league})
        if (!storageLeague) throw new Error("league not found")

        const collectionTeam = mongo.collection(EStorageCollection.TEAM)
        const storageTeam = collectionTeam.find({league: {$in: [req.body.team.league]}})
        // console.log("storageTeam")
        // console.log("list teams in leagues:", storageTeam)



        // const team = await mongo.collection(EStorageCollection.TEAM).updateOne({}, {team: {}});
        res.json({})

    } catch (e) {console.error(e)}
}