const {Client, GatewayIntentBits} = require('discord.js');
const {Player} = require('discord-player');


global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
    ]
});

client.config = require('./config.js');
require('./src/loader.js');

//Definis les couleur de l'embed
global.color = client.config.app.color;
if (color === undefined) {
    color = "#af33c1";
}

global.player = new Player(client, {
    ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
    }
});

player.extractors.loadDefault();
client.login(client.config.app.token);
