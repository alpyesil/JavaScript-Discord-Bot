const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const { Client, Intents, Presence, Message, DiscordAPIError } = require('discord.js');
const { MessageEmbed } = require('discord.js'); //embed mesaage discord.js den çekiyor
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "!"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('ready', () => {
    client.user.setActivity('!komutlar Bot Loading %10 :)')
    console.log('Botumuz Aktif')
});
client.on("message", async message => {

    if(message.author.bot) return;
    

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        //if(!client.commands.has(command)) return message.channel.send(`Komut dosyamda **${command}** adlı bir komut bulamadım.`);


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
client.on('guildMemberAdd', member =>{ //Sesli kanala üye saysınını yazar
    try{
        const Sayac = member.guild.channels.cache.find(channel => channel.id === '708783822518354100');
        Sayac.setName(`Üye Sayısı: ${member.guild.memberCount}`);
    }
    catch (e){
        console.log(e);
    }
});
client.on('guildMemberRemove', member =>{ //Sesli kanala üye sayısını yazar
    try{
        const Sayac = member.guild.channels.cache.find(channel => channel.id === '708783822518354100');
        Sayac.setName(`Üye Sayısı: ${member.guild.memberCount}`);
    }
    catch (e){
        console.log(e);
    }
});
client.on("guildMemberAdd", member => { //Kullanıcıya otamatik rol verme kodu
    try {
    let role = member.guild.roles.cache.find(role => role.name === 'Misafir')
    member.roles.add(role);
  } catch(e) {
    console.log(e)
  }
});
client.on('guildMemberAdd', member => {//Gelen Kullanıcı
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'log');     
    girişçıkış.send(`${member} Sucunumuza katıldı. Üye sayımızı ${member.guild.memberCount}`);
    member.send(`${member} GÖKTÜRK GUİLD DİSCORDUNA HOŞGELDİN`) //Gelen kullanıcaya özek mesaj atma
  
});
client.on('guildMemberRemove', member => {//Giden Kullanıcı
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'log');
    girişçıkış.send(`${member} Siktirip gitti Üye sayımızı ${member.guild.memberCount}`);
  
});

client.login('ODgxOTc5MTA4NTcyMTY4MjEy.YS0tDQ.tuTTKRjeMRG2YrjBeZZRHYApP7Q')