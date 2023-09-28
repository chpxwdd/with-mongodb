import clientPromise from "@/lib/mongodb";
import type {NextApiRequest, NextApiResponse} from 'next'
import bcrypt from 'bcryptjs';
import {SECRET_PHRASE} from "@/constants/auth";
import jwt from 'jsonwebtoken'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        if (req.method !== 'POST') {
            // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            res.status(500).json({message: 'Route not valid'});
            return
        }

        const client = await clientPromise;
        // await client.close()
        const db = client.db(process.env.MONGODB_DATABASE);

        const {email, password} = req.body
        const user = await db.collection('CoreUser').findOne({email})

        console.log("user", user)
        if (!user) {
            await client.close()
            res.status(500).json({message: 'Password is incorrect!'});
            return
        }
        // console.log("33333333333333333333333333333")

        const isEqual = await bcrypt.compare(password, user.password)
        console.log("isEqual", isEqual)
        if (!isEqual) {
            await client.close()
            res.status(500).json({message: 'Password is incorrect!'});
            return
        }

        res.status(201).json({
            message: 'auth success',
            ...user,
            token: jwt.sign(
                {
                    userId: user._id,
                    email: user.email
                },
                SECRET_PHRASE,
                {
                    expiresIn: '1h'
                }),
            expired: 1
        })

        // await client.close();

    } catch (e) {
        console.error(e);
    }
};