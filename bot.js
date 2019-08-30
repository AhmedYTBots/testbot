const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("613390101459894289")
setInterval(function() {
channel.send(`AhmedYT AhmedYT AhmedYT AhmedYT AhmedYT`);
}, 30)
})

client.login(process.env.BOT_TOKEN);