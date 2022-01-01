
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const cache = JSON.parse(fs.readFileSync("./conifgs/caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./configs/tokens.json", "utf8"))
const token = config.tokens;

let print = console.green;
let red = console.red;
let purple = console.purple;
let blue = console.blue;
let orange = console.orange;
let white = console.white;
let yellow = console.yellow;

client.on('ready', async () => {

    if (cache.dm == "off") {

        setInterval(async () => {

            let ch = await client.guilds.cache.get(cache.serverID).channels.cache.get(cache.channelID);

            let embed = new Discord.MessageEmbed()
             .setTitle('Hello Noobs!!')
             .setColor('RANDOM')
             .setDescription(cache.msg)
             .setTimestamp()
             .setFooter('Get Fucked! Powered by: ProjectX')

             ch.send({ embeds: [embed] });

             print('Okay, One message has been sent!');

        }, cache.delay);
    }

    if (cache.dm == "on") {

        setInterval(async () => {

            let user = await client.users.cache.get(cache.serverID);

            let embed = new Discord.MessageEmbed()
             .setTitle('Hello Noob!!')
             .setColor('RANDOM')
             .setDescription(cache.msg)
             .setTimestamp()
             .setFooter('Get Fucked! Powered by: ProjectX')

             user.send({embeds: [embed]}).catch(() => {

                red('Okay, A message failed to send to that User!');
             });

             print('Okay, One message sent Successfully');

        }, cache.delay)
    }
});

token.forEach(async acc => {

    try {

    await client.login(acc);

    } catch (err) {

        return red(`Hmm, Something went wrong and i was Unable to login to Token: ${acc}. Please make sure its valid!`);
    }
})