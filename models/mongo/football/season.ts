import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schemaFootballSeason = new Schema()
schemaFootballSeason.set('collection', 'FootballSeason')

schemaFootballSeason.add({
    year: {type: String, required: true, unique: false},
    start: {type: Schema.Types.Date, required: false, unique: false},
    end: {type: Schema.Types.String, required: false, unique: false},
    country: {
        type: Schema.Types.ObjectId,
        ref: 'FootballCountry',
        required: true,
        default: null,
    },
    league: {
        type: Schema.Types.ObjectId,
        ref: 'FootballLeague',
        required: true,
        default: null,
    },
    teams: [{
        type: Schema.Types.ObjectId,
        ref: 'FootballTeam'
    }]
})

export default mongoose.model('FootballSeason', schemaFootballSeason)
