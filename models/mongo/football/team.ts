import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schemaFootballTeam = new Schema()
schemaFootballTeam.set('collection', 'FootballTeam')
schemaFootballTeam.set('timestamps', true)

schemaFootballTeam.add({
    api_id: {type: Number, required: true, unique: true, indexes: true},
    name: {type: String, required: true},
    logo: {type: String, required: false},
    country: {type: Schema.Types.ObjectId, ref: 'FootballCountry', required: false, default: null}
})

export default mongoose.model('FootballTeam', schemaFootballTeam)
