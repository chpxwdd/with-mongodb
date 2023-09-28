import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schemaFootballTeam = new Schema()
schemaFootballTeam.set('collection', 'FootballTeam')

schemaFootballTeam.add({
    name: {type: String, required: true, unique: true},
    logo: {type: String, required: false, unique: true},
    countries: [],
    leagues: [],
    seasons: [],
})

export default mongoose.model('FootballTeam', schemaFootballTeam)
