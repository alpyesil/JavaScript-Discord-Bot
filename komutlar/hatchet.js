module.exports = {
    kod: "hatchet",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***Hatchet***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('***Birincil Strength çarpan oranı:*** 0.9X')
        .addField('***İkincil Dexterity çarpan oranı:*** 0.65X')
        .addField('***Hasar Türü:*** Slash')
        .addField('***Kullanılan Bufflar:*** Empower, Fortify, Haste.')
        .addField('***Kullanılan Anti-Bufflar:*** Root, Rend, Slow, Disease, Weaken.')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881994372789469256/unknown.png')
        message.channel.send(embed)
    }
}