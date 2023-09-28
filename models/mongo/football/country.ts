import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schemaFootballCountry = new Schema()
schemaFootballCountry.set('collection', 'FootballCountry')

schemaFootballCountry.add({
    code: { type: String, required: true, unique: true, maxlength: 2, minlength: 2 },
    name: { type: String, required: true, unique: true },
    flag: { type: String, required: true, unique: true },
})

export default mongoose.model('FootballCountry', schemaFootballCountry)
