const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3900f0f1b1f79afab75c64497845c2d6&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log('here is your body', body)
            callback(undefined,
                body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike+ " degrees out. It is currently " + body.location.localtime + " in " + body.location.name + " and the timezone is " + body.location.timezone_id)
        }
    })
}

module.exports = forecast