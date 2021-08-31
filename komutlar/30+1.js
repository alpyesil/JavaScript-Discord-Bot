module.exports = {
    kod: "30+",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('30+ Guild')
	    .setURL('https://discord.gg/n3DFqcSDRh')
	    .setAuthor('New World Türkiye', 'https://cdn.discordapp.com/attachments/856268503580540983/882263336673235034/indir.jpg', 'https://discord.gg/n3DFqcSDRh')
	    .setDescription('Guild hakkında bilgiler aşağıda listelenmiştir;')
	    .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/882263336673235034/indir.jpg')
	    .addFields(
		    { name: 'Sunucu', value: 'Bilinmiyor', inline: true },
            { name: 'Guild Lideri', value: '30ARTI#9994', inline: true },
            { name: 'Guild Officerları', value: 'Bilinmiyor', inline: true },   
            { name: 'Guild Diplomatı', value: 'Bilinmiyor', inline: true },
            { name: 'Aktif Üye Sayısı', value: 'Bilinmiyor', inline: true },  
            { name: 'Guild Faction:', value: 'Bilinmiyor', inline: true },           
            { name: 'Guild Türü', value: 'Bilinmiyor', inline: true },
            { name: 'Guild Tanıtımı', value: 'Bilinmiyor', inline: true },      
	    )
	    .setTimestamp()
	    .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
        message.channel.send(embed)
    }
}