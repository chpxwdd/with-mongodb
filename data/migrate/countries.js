const mongoose = require('mongoose')
const config = require('../src/config/db')
const fs = require('fs')
const JSONStream = require('JSONStream')
require('./model.country.js')

mongoose
    .connect(config.path)
    .then(res => {
        console.log('Connect to the database succes')
        fs.readFile('./countries.json', 'utf8', (err, data) => {

            const jsonData = JSON.parse(data)
            // console.log("json", jsonData)
            const modelFootballCountry = mongoose.model('FootballCountry')
            jsonData.forEach(country => {
                // console.log("country", country)
                var FootballCountry = new modelFootballCountry({
                    code: country.code ? country.code : "W1",
                    name: country.name,
                    flag: country.flag,
                })
                FootballCountry
                    .save()
                    .then(res => console.log('Save success id=' + country.code, country.name))
                    .catch(err => console.error(err.message))

            })
            return true
        })
        console.log('Load success')
        return
    })
    .catch(err => {
        console.log('Can not connect to the database' + err)
    })

