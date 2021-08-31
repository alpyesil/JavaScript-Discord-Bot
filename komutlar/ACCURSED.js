module.exports = {
    kod: "accursed",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('ACCURSED Guild')
	    .setURL('https://discord.gg/xBg2DPC')
	    .setAuthor('New World Türkiye', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg', 'https://discord.gg/xBg2DPC')
	    .setDescription('Guild hakkında bilgiler aşağıda listelenmiştir;')
	    .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg')
	    .addFields(
		    { name: 'Sunucu', value: 'Bilinmiyor', inline: true },
            { name: 'Guild Lideri', value: 'Bilinmiyor', inline: true },
            { name: 'Guild Officerları', value: 'Bilinmiyor', inline: true },   
            { name: 'Guild Diplomatı', value: 'Bilinmiyor', inline: true },
            { name: 'Aktif Üye Sayısı', value: 'Bilinmiyor', inline: true },  
            { name: 'Guild Faction:', value: 'Marauders', inline: true },           
            { name: 'Guild Türü', value: 'Bilinmiyor', inline: true },
            { name: 'Guild Tanıtımı', value: 'Yalnız oynamayın, AccursêD e katılın.', inline: true },      
	    )
	    .setTimestamp()
	    .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
        message.channel.send(embed)
    }
}