module.exports = {
    kod: "great",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***Great Axe***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('***Birincil Strength çarpan oranı:*** 1.0X')
        .addField('***İkincil Dexterity çarpan oranı:*** NaNX')
        .addField('***Hasar Türü:*** Slash')
        .addField('***Kullanılan Bufflar:*** Haste, Fortify, Grit')
        .addField('***Kullanılan Anti-Bufflar:*** NaN')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881994150877225060/unknown.png')
        message.channel.send(embed)
    }
}