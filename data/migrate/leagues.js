const mongoose = require('mongoose')
const fs = require('fs')
const JSONStream = require('JSONStream')
require('./model.country.js')
require('./model.league.js')
require('./model.season.js')

mongoose
    .connect("mongodb://127.0.0.1:27017/football")
    .then(res => {
        console.log('Connect to the database success')

        fs.readFile('./leagues.json', 'utf8', async (err, data) => {

            const json = JSON.parse(data)
            // console.log("json", jsonData)
            const modelFootballCountry = mongoose.model('FootballCountry')
            const modelFootballLeague = mongoose.model('FootballLeague')
            const modelFootballSeason = mongoose.model('FootballSeason')


            await json.forEach(async jsonItem => {
                // console.log("country", country)
                const {country, league, seasons} = jsonItem
                modelFootballCountry
                    .findOne({code: country.code ? country.code : "W1"})
                    .exec()
                    .then(async countryRes => {

                        await console.log("country=", country.code)
                        // await console.log("seasons=", seasons)
                        // смотрим есть ли нужная лига 
                        // modelFootballLeague.findOne({api_id:league.id})

                        await new modelFootballLeague({
                            api_id: league.id,
                            name: league.name,
                            logo: league.logo,
                            type: league.type,
                            country: countryRes._id
                        })
                            .save()
                            .then(async leagueRes => {

                                console.log(leagueRes._id)
                                await console.log('Save league id=', league.id, " name=", league.name)
                                seasons.forEach(async season => {

                                    await new modelFootballSeason({
                                        year: season.year,
                                        start: new Date(season.start).toISOString(),
                                        end: new Date(season.end).toISOString(),
                                        country: countryRes._id,
                                        league: leagueRes._id,
                                        teams: []
                                    })
                                        .save()
                                        .then(async res => await console.log('\tSave season year=', season.year))
                                        .catch(async err => await console.error(err.message))
                                })
                            })
                            .catch(async err => await console.error(err.message))
                    })
                return true
            })
            console.log('Load success')
            return
        })

    })

