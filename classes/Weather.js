const WeatherAPI = require('../weatherAPI.json')
const WeahterSettings = require('../weatherSettings.json')
const axios = require('axios')

module.exports = class Weather {
    getCurrentWeatherInCity = async(city) => {
        return axios
            .get(`${WeahterSettings.dataUrl}weather?q=${city}&APPID=${WeatherAPI.appId}&units=${WeahterSettings.units}`)
            .then(
                (response) => {
                    return response.data
                },
                (error) => {
                    console.log(error)
                    return error
                }
            )
    }
}