///* [Define variables] *///
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]});
const moment = require('moment-timezone');
const { token, owners } = require('./config.js');

/*
    Evaninoo - 2021
    Discord : Evaninoo#1305
    Website : https://evaninoo.com
    GitHub: https://github.com/Evaninoo
*/

///* [Event emitted when the bot is ready] *///
client.on('ready', () => {
    ///* [Log when the bot is ready] *///
    let time = moment.tz(Date.now(), "Europe/Paris").format("HH:mm:ss");
    console.log(`[${time}] [✔] Logged in as ${client.user.tag}.`);
});

///* [Event emitted when the thread is created] *///
client.on('threadCreate', async thread => {
    if (thread.deleted) return;
    ///* [If the user is an owner] *///
    if (owners.includes(thread.ownerId)) return;

    ///* [Delete the thread and log it] *///
    await thread.delete().then(async (deleted) => {
        let time = moment.tz(Date.now(), "Europe/Paris").format("HH:mm:ss");
        let owner = await client.users.fetch(deleted.ownerId);
        console.log(`[${time}] [🧬] Thread deleted : ${deleted.name}, ⭐️ Owner : ${owner.tag} (${owner.id}).`);
    });
});

client.login(token);
