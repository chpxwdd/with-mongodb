import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schemaFootballLeague = new Schema()
schemaFootballLeague.set('collection', 'FootballLeague')

schemaFootballLeague.add({
    api_id: {type: Number, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    logo: {type: String, required: false, unique: true},
    type: {type: String, requires: true},
    country: {
        type: Schema.Types.ObjectId,
        ref: 'FootballCountry',
        required: true,
        default: null,
    }
})

export default mongoose.model('FootballLeague', schemaFootballLeague)
