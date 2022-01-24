# discord-weather-bot 👋

A bot that displays informations about the weather for a specific city.

### Disclaimer

This bot was built for educational purposes and may not be updated in the future. However you can still invite it into your discord servers using this link : https://discord.com/oauth2/authorize?client_id=832684912356098058&scope=bot&permissions=52288

## Dependencies 🔒

The server fetches data from the [OpenWeatherMap API](https://www.meteomatics.com/en/weather-api)

## Screenshot 👀

![image](https://user-images.githubusercontent.com/82584433/115156822-80173b00-a086-11eb-91de-24bf8e9dadf6.png)

## How to install and run the bot on your own server

You can run this bot on a NodeJS server following these steps : 
1. Clone this repo
2. CD into the folder and type `npm install`
3. Remove the `_template` in the templates json files names
4. Add your own appIds and accessToken in these files (you can get your own accessToken for discord at https://discord.com/developers/applications/ and appId for openweathermap at https://openweathermap.org/api)
5. Type `npm start` and the bot should come online
