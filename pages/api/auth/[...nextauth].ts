import NextAuth from 'next-auth';
import {compare} from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";
import {NextApiRequest} from 'next';
import clientPromise from '@/lib/mongodb';
import {EStorageCollection} from '@/constants/storage';
const authorize: any = async (credentials: Record<string, string>, req: NextApiRequest) => {
    const client = await clientPromise
    const db = client.db()
    const users = db.collection(EStorageCollection.USER)
    const {email, password} = credentials as {email: string, password: string}
    const result = await users.findOne({email})
    if (!result) throw new Error('No user found with the email')
    const checkPassword = await compare(password, result.password)
    if (!checkPassword) throw new Error('Password doesnt match')
    return result
}
export default NextAuth({
    secret: process.env.AUTH_SECRET,
    // session: {strategy: "jwt"},
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'email', type: 'email'},
                password: {label: 'password', type: 'password'}
            },
            authorize
        })
    ],
    callbacks: {
        // async signIn({user, account, profile, email, credentials}) {return true},
        // async redirect({url, baseUrl}) {return baseUrl},
        // async jwt({token, user, account, profile, isNewUser}) {return token},
        session: async ({session, user, token}: any) => {
            const client = await clientPromise;
            const userData = await client.db().collection(EStorageCollection.USER).findOne({email: session.user.email});
            if (!userData) throw new Error("user not found for append session!")
            return {...session, user: {...userData}}
        }
    }
})
