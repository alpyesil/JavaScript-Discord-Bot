module.exports = {
    kod: "admin",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('Admin Komutları')
	    .setAuthor('New World Türkiye', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg', 'https://discord.gg/QeaKR9YT9A')
	    .setDescription('Admin komutları hakkında bilgiler aşağıda listelenmiştir;')
	    .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg')
	    .addFields(
		    { name: '!kick', value: 'Kullanıcıyı sunucudan kickler.', inline: true },
            { name: '!ban', value: 'Kullanıcıyı sunucudan banlar.', inline: true },
            { name: '!çek', value: 'Kullanıcıyı bulunduğunuz kanala taşır', inline: true },   
            { name: '!unban', value: 'Banladığınız kullanıcının banını açar ID ile.', inline: true },
            { name: '!kurulum', value: 'Kurulum hakkında bilgi verir.', inline: true },    
	    )
	    .setTimestamp()
	    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true })) 
        message.channel.send(embed)
    }
}