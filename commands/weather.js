const Weather = require('../classes/Weather')
const WeatherSettings = require('../weatherSettings.json')
const Discord = require('discord.js')

module.exports = {
    name: 'weather',
    description: 'Shows infos about the weather of the specified city',
    async execute(message, args){
        const w = new Weather()
        let city = args[0]

        let data = await w.getCurrentWeatherInCity(city)

        console.log('Fetched', data)
        
        let embed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`Weather in ${data.name}`)
            .setURL(`${WeatherSettings.defaultUrl}city/${data.id}`)
            .setThumbnail(`${WeatherSettings.imgUrl}${data.weather[0].icon}@2x.png`)
            .setColor('#fff499')
            .addFields(
                { name: `Temperature : ${data.main.temp} degrees`, value: `feels like ${data.main.feels_like}` },
                { name: '\u200B', value: '\u200B' },
                { name: 'Wind', value: `${data.wind.speed} km/h`, inline: true },
                { name: '\u200B', value: '\u200B' },
            )
            .setFooter(`Datas are fetched from ${WeatherSettings.defaultUrl}`);

        message.channel.send(embed)
    }
}