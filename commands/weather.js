const Weather = require('../classes/Weather')

module.exports = {
    name: 'weather',
    description: 'Shows infos about the weather of the specified city',
    async execute(message, args){
        const w = new Weather()
        let city = args[0]

        let data = await w.getCurrentWeatherInCity(city)
        console.log('Fetched', data)
        message.channel.send(JSON.stringify(data))
    }
}