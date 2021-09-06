module.exports = {
    kod: "sword",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***Sword & Shield***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('***Birincil Strength çarpan oranı:*** 0.9X', [
        ' a '])
        .addField('***İkincil Dexterity çarpan oranı:*** 0.65X', [
        ' b '])
        .addField('***Hasar Türü:*** Slash/Thrust', [
        ' c '])
        .addField('***Kullanılan Bufflar:*** Hız,', [
        ' d '])
        .addField('***Kullanılan Anti-Bufflar:*** Yavaşlatma, Parçalama, Yereserme, Zayıflatma, Sersemletme', [
        ' f '])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881993951408697404/unknown.png')
        message.channel.send(embed)
    }
}