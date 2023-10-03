const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaFootballSeason = new Schema()
schemaFootballSeason.set('collection', 'FootballSeason')

schemaFootballSeason.add({
    year: {type: Number, required: true, unique: false},
    start: {type: String, required: false, unique: false},
    end: {type: String, required: false, unique: false},
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

module.exports = mongoose.model('FootballSeason', schemaFootballSeason)
