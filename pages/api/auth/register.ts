// @TODO
import clientPromise from "@/lib/mongodb"
import type {NextApiRequest, NextApiResponse} from 'next'
import {hash} from 'bcryptjs'
import {EStorageCollection} from "@/constants/storage"
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') return
    const {email, password} = req.body
    if (!email || !email.includes('@') || !password) {
        res.status(422).json({message: 'Invalid - input not valid!'})
        return
    }
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DATABASE)
    const existingUser = await db.collection(EStorageCollection.USER).findOne({email: email})
    if (existingUser) {
        res.status(422).json({message: 'User exists already!'})
        return
    }
    const result = await db.collection(EStorageCollection.USER).insertOne({email: email, password: await hash(password, 12)})
    res.status(201).json({message: 'Created user!', ...result})
}