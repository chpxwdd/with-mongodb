import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schemaCoreUser = new Schema()
schemaCoreUser.set('collection', 'CoreUser')

schemaCoreUser.add({
	username: { type: String, required: false, unique: true, dropDups: true },
	email: { type: String, required: true, unique: true, dropDups: true },
	password: { type: String, required: true },
	roles: [{ type: Schema.Types.ObjectId, ref: 'CoreRole', required: true }],
})

export default mongoose.model('CoreUser', schemaCoreUser)
