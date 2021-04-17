//Importing modules and json files
const Discord = require('discord.js')
const DiscordAPI = require('./discordAPI.json')
const BotSettings = require('./botSettings.json')
const fs = require('fs')

//Initializing client
const client = new Discord.Client()

client.commands = new Discord.Collection()

//Making sure all the commands files are javascript
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

//Loading all the commands into the client
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('Client ready')
    client.user.setPresence({
        status: 'online',
        activity: {
         type: 'PLAYING',
         name: 'type "-weather location" to get info on weather',
        }
    });
})

client.on('message', (message) => {
    //Returning if the message is not a command, or if the bot sent it
    if(!message.content.startsWith(BotSettings.prefix) || message.author.bot) return

    const args = message.content.slice(BotSettings.prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
    
    if(BotSettings.commandsWhitelist.includes(command))
        client.commands.get(command).execute(message, args)
})

client.login(DiscordAPI.accessToken)