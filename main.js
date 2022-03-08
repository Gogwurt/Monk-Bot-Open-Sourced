const DiscordJS = require('discord.js')

const client = new DiscordJS.Client({
    intents: [
      "GUILDS",
      "GUILD_MESSAGES"
    ],
})

client.on('ready', () => {
    console.log('Monk-Bot is online.')
})

const Prefix = 'gb.'
const enabled = false

client.on('messageCreate', message => {
    if (message.content == Prefix + "Ping" || message.content == Prefix + 'ping') {
        message.channel.send('Pong!')

    } else if (message.content == Prefix + "Help" || message.content == Prefix + 'help') {
        message.react('🔵')
    const exampleEmbed = new DiscordJS.MessageEmbed()
        .setColor('#0c752b')
        .setTitle('Bot Commands')
        .setDescription('**Help** - Sends list of commands.\n\n **Ping** - 🏓 (First Command I Ever Made!)')
        .setFooter({ text: ('Sent By: ' + message.author.username + '.')});
    message.author.send({ embeds: [exampleEmbed] });
    }
})

client.login("OTUwNDk3Njk0NTM3ODkxODkw.YiZx9Q.7XGAWCL-JSdkNF08lOfXX71vsa0");