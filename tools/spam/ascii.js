const { MessageEmbed, Client } = require('discord.js');
const client = new Client();
const fs = require('fs');
const figlet = require('figlet');

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

client.on('ready', async () => {


    if (cache.dm == "off") {

        setInterval(async () => {

            figlet(cache.msg, async function (err, dataed) {

                if (err) {

                    red(`\`\`\`apache\nErr; ${err}\`\`\``)
                }

                let ch = await client.guilds.cache.get(cache.serverID).channels.cache.get(cache.channelID);

                ch.send(`\`\`\`fix\n${dataed}\`\`\``)

                print('Okay, I have sent one of the Messages Successfully');
            })

        }, cache.delay)
    }

    if (cache.dm == "on") {

        setInterval(async () => {

            figlet(cache.msg, async function(err, dataed) {

                if (err) {

                    red(`\`\`\`apache\nErr; ${err}\`\`\``);
                }

                let user = await client.users.cache.get(cache.serverID);

                 user.send(`\`\`\`fix\n${dataed}\`\`\``)

                 print('Okay, I have sent one of the Messages Successfully');
            })

        }, cache.delay)
    }
})

token.forEach(async acc => {

    try {

    await client.login(acc);

    } catch (err) {

        return red(`Hmm, Something went wrong and i was Unable to login to Token: ${acc}. Please make sure its valid!`);
    }
})
