module.exports = {
    kod: "kurulum",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('Kurulum Adımları')
	    .setAuthor('New World Türkiye', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg', 'https://discord.gg/QeaKR9YT9A')
	    .setDescription('Kullanıcı logları için lütfen özel olarak botun görebileceği bir odaya log kanalı açın.')
	    .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg')       
	    .setTimestamp()
        
	    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}