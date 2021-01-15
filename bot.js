const Discord = require("discord.js");
const { send } = require("process");
const { MessageChannel } = require("worker_threads");
const client = new Discord.Client();
const config = require("./config.json");
require('dotenv').config()

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

// Funções
client.on("message", msg => {

    if(msg.author.bot) return;

    if(msg.content === 'ping') {
        msg.channel.send("Pong");
    }
    
    if(msg.content === 'pong') {
        msg.channel.send('ping');
    }

    if(msg.content === 'yuki') {

        checaYuki().then( status => {

            if (status == 'online'){
                msg.channel.send("Yuki Online");
            }
            
            else if (status == 'offline'){
                msg.channel.send("Yuki Offline");
            }

            else{
                msg.channel.send('Erro de Servidor')
            }
        })
    }
    
});

async function checaYuki(){
    try {
        let yuki = client.users.cache.get(process.env.YUKI_ID)
        return yuki.presence.status

    }
    catch(error){
        return error

    }
    
}

client.login(config.token);
