const Weather = require('../classes/Weather')
const WeatherSettings = require('../weatherSettings.json')
const Discord = require('discord.js')

module.exports = {
    name: 'weather',
    description: 'Shows infos about the weather of the specified city',
    async execute(message, args){
        try{
            if(args[0] === undefined){
                message.channel.send(`<@${message.author.id}>, you need to specify a location. IE: **-${this.name} geneva**`)
            }
            else{
                const w = new Weather()
                let city = args[0]
    
                let data = await w.getCurrentWeatherInCity(city)
                console.log('Fetched', data)
                
                if(data){
                    let embed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        .setTitle(`Weather in ${data.name}`)
                        .setURL(`${WeatherSettings.defaultUrl}city/${data.id}`)
                        .setDescription(`<@${message.author.id}>`)
                        .setThumbnail(`${WeatherSettings.imgUrl}${data.weather[0].icon}@2x.png`)
                        .setColor('#fff499')
                        .addFields(
                            { name: `${data.main.temp} degrees`, value: `feels like ${data.main.feels_like}` },
                            { name: 'Wind', value: `${data.wind.speed} km/h`, inline: true }
                        )
                        .setFooter(`Datas are fetched from ${WeatherSettings.defaultUrl}`);
                        
                        message.channel.send(embed)
                }
                else {
                    message.channel.send(`<@${message.author.id}>, I was unable to find le location you specified`)
                }
            }
        }
        catch {
            console.error('Error')
        }
    }
}