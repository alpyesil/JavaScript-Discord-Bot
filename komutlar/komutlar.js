module.exports = {
    kod: "komutlar",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('New World Türkiye Botu')
	    .setURL('https://discord.gg/QeaKR9YT9A')
	    .setAuthor('New World Türkiye', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg', 'https://discord.gg/QeaKR9YT9A')
	    .setDescription('Genel komutlar aşağıda listelenmiştir;')
	    .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg')
	    .addFields(
            { name: '!klan', value: 'Aktif Klanlar hakkında bilgi verir', inline: true },
            { name: '!klanım', value: 'Klan bilgilerinizin eklenmesi için bu komutu kullanın Klan bilgileri pazar güncellenecektir.', inline: true },   
		    { name: '!str', value: 'STR Puanları hakkında bilgi verir', inline: true },   
            { name: '!int', value: 'INT Puanları hakkında bilgi verir', inline: true },
            { name: '!dex', value: 'DEX Puanları hakkında bilgi verir', inline: true },    
            { name: '!foc', value: 'FOC Puanları hakkında bilgi verir', inline: true },
            { name: '!cons', value: 'CONS Puanları hakkında bilgi verir', inline: true },
            { name: '!weapongems', value: 'Silah Gemleri hakkında bilgi verir', inline: true },
            { name: '!armorgems', value: 'Armor Gemleri hakkında bilgi verir', inline: true },
            { name: '!sword', value: 'Kılıc ve Kalkan hakkında bilgi verir', inline: true },  
            { name: '!great', value: 'Great Axe hakkında bilgi verir', inline: true },  
            { name: '!hammer', value: 'War Hammer hakkında bilgi verir', inline: true },  
            { name: '!hatchet', value: 'Hatchet hakkında bilgi verir', inline: true },       
	    )
	    .setTimestamp()
	    .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
        message.channel.send(embed)
    }
}