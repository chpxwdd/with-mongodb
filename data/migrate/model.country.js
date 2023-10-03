const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaFootballCountry = new Schema()
schemaFootballCountry.set('collection', 'FootballCountry')

schemaFootballCountry.add({
    code: { type: String, required: true, unique: true, nullable: true },
    name: { type: Schema.Types.Date, required: true, unique: true },
    flag: { type: Schema.Types.Date, required: false, unique: true, nullable: true, default: null },
})

module.exports = mongoose.model('FootballCountry', schemaFootballCountry)
