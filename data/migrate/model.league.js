const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaFootballLeague = new Schema()
schemaFootballLeague.set('collection', 'FootballLeague')

schemaFootballLeague.add({
    api_id: {type: Number, required: true, unique: true},
    name: {type: String, required: true, unique: false},
    logo: {type: String, required: false, unique: false, default: null},
    type: {type: String, requires: true},
    country: {
        type: Schema.Types.ObjectId,
        ref: 'FootballCountry',
        required: true,
        default: null,
    }
})

module.exports = mongoose.model('FootballLeague', schemaFootballLeague)
