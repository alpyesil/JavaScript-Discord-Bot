const Discord = require('discord.js') // discord.js modülü tanımlıyoruz.
const { Client, Intents, Presence, Message, DiscordAPIError } = require('discord.js');
const { MessageEmbed } = require('discord.js'); //embed mesaage discord.js den çekiyor
const client = new Discord.Client() // client tanımalamsı
const { readdirSync } = require('fs'); // tanımlamalar
const { join } = require('path'); // tanımlamalar
const mongoose = require('mongoose');
const dotenv = require("dotenv");
require("dotenv").config();

client.commands= new Discord.Collection(); // komutları alıyoruz

const prefix = "!"

const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); // Belli bir klasörden belli .js uzantılı dosyaları buluyor.



for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`));
    client.commands.set(command.kod, command); // Komutları Ayarlıyoruz.
}

client.on("error", console.error);

client.on('guildCreate', async guild => {
    const embed1= new Discord.MessageEmbed()
    .setTitle('Sunucunuza Eklediğiniz için teşekkürler!!')
    .addField('>Klan bilgilerinizi eklemek için: Alpysl#3943 ulaşın:') 
    .setDescription('Sunucu Adı: `'+ guild.name +' `')
    const embed2 = new Discord.MessageEmbed()
    .setTitle('Yeni Guild')
    .setDescription('>Sunucu Adı: `'+ guild.name +' `')
    .addField('>Kişi Sayısı: `'+ guild.memberCount +' `')
    .addField('>Sunucu Sahibi ID: `'+ guild.ownerID +' `')
    .addField('>Sunucu Sahibi:', guild.owner) 
    .addField('>Sunucu Bölgesi: `'+ guild.region +' `')
    .addField('>Sunucunun Oluşturulma Tarihi: `'+ guild.createdAt +' `')
    .setThumbnail(guild.iconURL())
    guild.owner.send(embed1)
    const channel = client.channels.cache.find(ch => ch.name === 'log');
    channel.send(embed2)

})


client.on('guildDelete', async guild => {
    const embed1= new Discord.MessageEmbed()
    .setTitle('Maga bee!!')
    .addField('>Klan bilgilerinizi eklemek için: Alpysl#3943 ulaşın:') 
    .setDescription('Sunucu Adı: `'+ guild.name +' `')
    const embed2 = new Discord.MessageEmbed()
    .setTitle('ATILDIM')
    .setDescription('>Sunucu Adı: `'+ guild.name +' `')
    .addField('>Kişi Sayısı: `'+ guild.memberCount +' `')
    .addField('>Sunucu Sahibi ID: `'+ guild.ownerID +' `')
    .addField('>Sunucu Sahibi:', guild.owner) 
    .addField('>Sunucu Bölgesi: `'+ guild.region +' `')
    .addField('>Sunucunun Oluşturulma Tarihi: `'+ guild.createdAt +' `')
    .setThumbnail(guild.iconURL())
    guild.owner.send(embed1)
    const channel = client.channels.cache.find(ch => ch.name === 'log');
    channel.send(embed2)

})

client.on("message", message => {
    if(message.author.id === '881979108572168212') return console.log('Bu mesajı Botunuz Gönderdi!')
    console.log(`${message.author.username}: ${message}`)
})


client.on('ready', () => {
    client.user.setActivity('!komutlar Bot Loading %17 :)')
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

client.on('message', message =>{ //Bir kanalda duyuru yapma
    if (message.content.startsWith('!duyuru')){
        const kanal = message.mentions.channels.first();
        const args = message.content.split(' ').slice(2);
        const botmesajı = args.join(" ")
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('YETKİN YOK');
        if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadınız')
        if (!kanal) return message.reply('Kanalı tanımlamadın.');
        message.delete(message.author)
        kanal.send(botmesajı);

    }
});

mongoose
  .connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,

  })
  .then(()=>{
    console.log('Database Bağlantı Başarılı');
  })
  .catch((err) =>{
    console.log(err);
  });
  mongoose.Promise = global.Promise


client.login('ODgwMDY4MDcxMjQxNDE2NzQ1.YSY5Qw._RJlztBnx9pa9J6GVgtiyfjzBKY')
