import clientPromise from "@/lib/mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method !== 'GET') {
            res.status(500).json({message: 'method is not valid'});
            return
        }

        const client = await clientPromise;
        const mongo = client.db(process.env.MONGODB_DATABASE);
        const users = await mongo.collection("CoreUser").find({}).toArray();
        res.json({users})
    } catch (e) {console.error(e)}
}