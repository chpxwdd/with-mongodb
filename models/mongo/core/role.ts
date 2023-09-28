import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schemaCoreRole = new Schema()
schemaCoreRole.set('collection', 'CoreRole')

schemaCoreRole.add({
	title: { type: String, required: true, unique: true },
	_parentId: {
		type: Schema.Types.ObjectId,
		ref: 'CoreRole',
		required: false,
		default: null,
	},
})

export default mongoose.model('CoreRole', schemaCoreRole)
