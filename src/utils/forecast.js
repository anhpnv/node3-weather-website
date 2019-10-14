const request = require('request')
const celcius = (fahenriet) =>{
    return Math.ceil((fahenriet-32)*5/9)
}

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0b16aa4375ee5d1f2347b38d1b50b642/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + celcius(body.currently.temperature) + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast