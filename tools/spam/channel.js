const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

const cache = JSON.parse(fs.readFileSync("./configs/caches.json", "utf8"))
const config = JSON.parse(fs.readFileSync("./configs/tokens.json", "utf8"))
const token = config.tokens;

let print = console.green;
let red = console.red;
let purple = console.purple;
let blue = console.blue;
let orange = console.orange;
let white = console.white;
let yellow = console.yellow;

setInterval(() => {

    client.guilds.cache.get(cache.serverID)
    .channels.cache.get(cache.channelID)
    .send(cache.msg);

    print("Okay, Sent one Message Successfully");

}, cache.delay);

token.forEach(async acc => {

    try {

    await client.login(acc);

    } catch (err) {

        return red(`Hmm, Something went wrong and i was Unable to login to Token: ${acc}. Please make sure its valid!`);
    }
})