const clear = require('clear-it');

clear();

let cache = JSON.parse(fs.readFileSync('./configs/caches.json', "utf-8"));
let tc = require('termcolor').define;
let input = require('readline-sync');
let fs = require('fs');

/**
 * COLORS FOR CONSOLE LOGS
 */
let print = console.green;
let red = console.red;
let purple = console.purple;
let blue = console.blue;
let orange = console.orange;
let white = console.white;
let yellow = console.yellow;

clear();

clear();
print('-=-')
print('')
white("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=");
yellow("-=                                        ProjectX Raid Tool                                             =-");
white("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=");
yellow("-=                                    Created By: Toxic Dev (http://toxicdev.me)                         =-");
white("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=");
print("");
print("-=-");
white("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=");
purple("-=                                        Available Options                                              -=");
print("");
print("| 1. Spam the Provided Discord Channel ID");
print("")
print("| 2. Spam The Provided Users DM's");
print("")
print("| 3. Nuke a Discord Server (Will crash Discord with too many Scripts Working!)")
print("")
print("| 4. Raid a Discord Server with Bots Joining (Requires Perms + Tokens)")
print("")
print("| 5. Nitro Brute Forcer - Attempts to find a Valid Nitro Code")
print("")
print("| 6. Raid a Discord Server with Users Joining (Requires User Tokens)")
print("")
print("| 7. Spam a Voice Channel (Bot(s) will Join and Leave Continuously)")
print("")
print("| 8. Spam Mention Server Members")
print("")
print("| 9. Embed Spam (Spam Messages in a Embed | SelfBots will be Banned by Discord)")
print("")
print("| 10. Spam Some ASCII Text in the Provided Server")
print("")
print("| 11. Spam a Image URL in the Provided Channel(s)")
print("")
print("| 12. Bot or User Token Checker (Attemp to Login to the Token to check if its Valid)")
print("")
print("| 13. Spam mention Role(s) in the Provided Discord Server")
print("")
white("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=");
print("-=-")
print("")
red("- Disclaimer: This Tool is made for Entertainment Purposes Only,")
red("- I'm not responsible for any Discord Bans you may Recieve for using this tool!")
red("- I Will Offer No Support In Setting Up/Using This Tool If Its Being Used For Careless Purposes.")
purple("- Feel Free To Contact Me Here For Suggestions And Changes: https://chillcord.life/discord")
white("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=")
print("")
print("-=-")

let option = input.question("Enter the Number of the Option you want to Start!");

/**
 * Discord Channel Spammer
 */
if (option === "1") {

    clear();

    var tokens = JSON.parse(fs.readFileSync('./tokens.json', 'utf8'));

    print("Important Note: The Tokens should be Provided in the `tokens.json` file");

    let serverID = input.question("Okay, Please provide me with the Sever ID");

    if (!serverID == Number) return red('Nope, The Server ID should be a Integer or Discord Snowflake');

    let channelID = input.question('Okay, Please provide me with the Channel ID');

    if (!channelID == Number) return red('Nope, The Channel ID should be a Integer or Discord Snowflake');

    let msg = input.question('Okay, Please provide me with the Message to Spam!');

    let delay = input.question('Okay, Finally please provide me with the Delay for the Message in MS (Default: 5 Seconds (5000ms) | Leave Empty for 5000)');

    if (!delay) delay = 5000

    cache = {
        serverID: serverID,
        channelID: channelID,
        msg: msg,
        delay: delay
    }

    save();

    print('Okay, Spamming is starting. Enjoy!')

    let spamChan = require('../tools/spam/channel.js');
}

/**
 * CHECK FOR A VALID OPTION
 */
 if(option !== "1") {

    red("Woah, Slow down. You provided an Invalid Option!");
}

/**
 * DEFINE THE SAVE MIDDLEWARE/FUNCTION
 */
function save() {
    fs.writeFileSync('./configs/caches.json', JSON.stringify(cache, null, 4));
}