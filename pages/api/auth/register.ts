// @TODO
import clientPromise from '@/lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'
import { hash } from 'bcryptjs'
import { EStorageCollection } from '@/constants/storage'
export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== 'POST') {
		res.status(422).json({
			message: `error: method not POST`,
		})
		return
	}
	const { email, username, password } = req.body

	if (!email || !email.includes('@') || !password) {
		res.status(422).json({
			message: 'Invalid - email not valid!',
		})
		return
	}

	const client = await clientPromise
	const db = client.db(process.env.MONGODB_DATABASE)

	const existingEmail = await db.collection(EStorageCollection.USER).findOne({ email })

	if (existingEmail) {
		res.status(422).json({
			message: `User with email: ${email} already exists!`,
		})
		return
	}
	const existingUsername = await db.collection(EStorageCollection.USER).findOne({ username })

	if (existingUsername) {
		res.status(422).json({
			message: `User with username: ${username} already exists!`,
		})
		return
	}

	const roles = await db.collection(EStorageCollection.ROLE).findOne({ title: 'member' })
	console.log(roles)

	const result = await db
		.collection(EStorageCollection.USER)
		.insertOne({ email, username, password: await hash(password, 12), role: [roles._id], do_create: new Date() })

	res.status(201).json({ message: 'Created user!', ...result })
}
