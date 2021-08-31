module.exports = {
    kod: "hammer",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***War Hammer***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('***Birincil Strength çarpan oranı:*** 1.0X')
        .addField('***İkincil Dexterity çarpan oranı:*** 0.65X')
        .addField('***Hasar Türü:*** Strike')
        .addField('***Kullanılan Bufflar:*** Haste, Empower, Fortify.')
        .addField('***Kullanılan Anti-Bufflar:*** Rend, Exhaust, Stun, Weaken, Slow.')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881994263754330122/unknown.png')
        message.channel.send(embed)
    }
}