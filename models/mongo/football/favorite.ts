import mongoose from 'mongoose'
const Schema = mongoose.Schema

const schemaFootballFavorite = new Schema()
schemaFootballFavorite.set('collection', 'FootballFavorite')

schemaFootballFavorite.add({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'UserCore',
        required: true,
        default: null,
    },
    countries: [{type: Schema.Types.ObjectId, ref: 'FootballCountry'}],
    leagues: [{type: Schema.Types.ObjectId, ref: 'FootballLeague'}],
    seasons: [{type: Schema.Types.ObjectId, ref: 'FootballSeason'}],
    teams: [{type: Schema.Types.ObjectId, ref: 'FootballTeam'}],
})

export default mongoose.model('FootballFavorite', schemaFootballFavorite)
