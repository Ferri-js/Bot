const Discord = require("discord.js");
const { send } = require("process");
const { MessageChannel } = require("worker_threads");
const client = new Discord.Client();
const config = require("./config.json");
const yuki = Discord.User.ID = 273902318276050944;


client.on("ready", () => {
    console.log(`Bot iniciado, com ${client.users.cache.size} usuarios, em ${client.channels.cache.size} canais, em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity(`${client.guilds.cache.size} servidores fora`);
});

client.on("guildCreate", guild => {
    console.log(`Bot entrou no servidor: ${guild.name} (id: ${guild.id}). Cornos: ${guild.memberCount} Chifrudos`);  //alguem me mata
    client.user.setActivit(`Estou em ${client.guilds.cache.size} servidores`)
});

client.on("guildDelete", guild => {
     console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
     client.user.setActivity(`Serving ${client.guilds.cache.size} server`);
});

client.on(`message`, msg => {
    if(msg.content === 'ping') {
        msg.reply(`Pong`);
    //if(msg.author.bot) return;
    }
});

client.on(`message`, msg => {
    if(msg.content === 'pong') {
        msg.reply('ping');
    //if(msg.author.bot) return;
    }
});

client.on(`message`, msg => {
    if(msg.content === 'yuki') {
        msg.reply(`Hum ${Discord.Presence = yuki}`); //tenho q arrumar sa porra;
    }
});

client.login(config.token);