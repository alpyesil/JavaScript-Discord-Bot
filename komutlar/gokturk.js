module.exports = {
    kod: "göktürk",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('GökTürk Guild')
	    .setURL('https://discord.gg/QeaKR9YT9A')
	    .setAuthor('New World Türkiye', 'https://cdn.discordapp.com/attachments/856268503580540983/882259974087143434/unknown.png', 'https://discord.gg/QeaKR9YT9A')
	    .setDescription('Guild hakkında bilgiler aşağıda listelenmiştir;')
	    .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/882259974087143434/unknown.png')
	    .addFields(
		    { name: 'Sunucu', value: 'Asgard', inline: true },
            { name: 'Guild Lideri', value: 'Latviado Servantes#6128', inline: true },
            { name: 'Guild Officerları', value: 'Alpysl#3943 // Serkan-26#6217/ Epicurus-29#0141', inline: true },   
            { name: 'Guild Diplomatı', value: 'sozcan#0067', inline: true },
            { name: 'Aktif Üye Sayısı', value: 'Bilinmiyor', inline: true },  
            { name: 'Guild Faction:', value: 'Syndicate', inline: true },           
            { name: 'Guild Türü', value: 'Hard Core PVP', inline: true },
            { name: 'Guild Tanıtımı', value: 'Daha Tanıtılmadı', inline: true },      
	    )
	    .setTimestamp()
	    .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
        message.channel.send(embed)
    }
}