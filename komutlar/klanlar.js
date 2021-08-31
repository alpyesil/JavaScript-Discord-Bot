module.exports = {
    kod: "klan",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('New World Türkiye')
	    .setURL('https://discord.gg/QeaKR9YT9A')
	    .setAuthor('New World Türkiye', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg', 'https://discord.gg/QeaKR9YT9A')
	    .setDescription('Aktif Klanlar aşağıda listelenmiştir;')
	    .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg')
	    .addFields(
		    { name: 'GökTürk',  value: '29 Eylülde x Sunucunda daha fazla bilgi için !GökTürk [Discord](https://discord.gg/QeaKR9YT9A)', inline: true },   
            { name: '30+ Guild', value: '29 Eylülde x Sunucunda daha fazla bilgi için !30+ [Discord](https://discord.gg/n3DFqcSDRh)', inline: true },
            { name: 'ACCURSED', value: '29 Eylülde x Sunucunda daha fazla bilgi için !accursed [Discord](https://discord.gg/xBg2DPC)', inline: true },       
	    )
	    .setTimestamp()
	    .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
        message.channel.send(embed)
    }
}