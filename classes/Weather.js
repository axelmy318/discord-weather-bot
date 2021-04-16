const WeatherAPI = require('../weatherAPI.json')
const axios = require('axios')

module.exports = class Weather {
    getCurrentWeatherInCity = async(city) => {
        return axios
            .get(`${WeatherAPI.url}weather?q=${city}&APPID=${WeatherAPI.appId}&units=${WeatherAPI.units}`)
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