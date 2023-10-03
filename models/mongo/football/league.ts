import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaFootballLeague = new Schema()
schemaFootballLeague.set('collection', 'FootballLeague')
schemaFootballLeague.set('timestamps', true)
schemaFootballLeague.add({
    api_id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    logo: {type: String, required: false},
    type: {type: String, required: false, default: 'League'},
    country: {type: Schema.Types.ObjectId, ref: 'FootballCountry', required: true, default: null}
})

export default mongoose.model('FootballLeague', schemaFootballLeague)
