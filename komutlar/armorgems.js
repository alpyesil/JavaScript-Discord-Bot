module.exports = {
    kod: "armorgems",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***Zırh Gemleri***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('Abbysal Ward:', [
            '(T1)+2.5% , (T2)+3.5% (T3)+5.0% (T4)+6.0% Void (Hiçlik) Hasarı Emilimi.'
        ])
        .addField('Arcane Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)3.0% (T4)3.75% Arcane (Gizemli) Hasarı Emilimi.'
        ])
        .addField('Calming:', [
            '(T1)-4.0% , (T2)-6% (T3)-8.0% (T4)-10% daha az tahdit oluşturursunuz.'
        ])
        .addField('Elemental Ward:', [
            '(T1)+1.0% , (T2)+1.5% (T3)+2.0% (T4)+2.5% Elemental (Eklement) Hasar Emilimi.'
        ])
        .addField('Fire Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Fire (Ateş) Hasar Emilimi.'
        ])
        .addField('Ice ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Ice (Buz) Hasar Emilimi.'
        ])
        .addField('Lightning Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Lightning (Elektirik) Hasar Emilimi.'
        ])
        .addField('Lucky:', [
            '(T1)+0.25% , (T2)+0.35% (T3)+0.45% (T4)+5.0% Sandıklardan ve canavlaran nadir eşyalar düşme şansını arttırır.'
        ])
        .addField('Nature Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Nature (Doğa) Hasar Emilimi.'
        ])
        .addField('Physical Ward:', [
            '(T1)+1.0% , (T2)+1.5% (T3)+2.0% (T4)+2.5% Physical (Fiziksel) Hasar Emilimi.'
        ])
        .addField('Slash Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Slash Hasar Emilimi.'
        ])
        .addField('Spectral Ward:', [
            '(T1)+0.75% , (T2)+1.13 (T3)+1.5% (T4)+1.88% Elemental ve (T1)+0.25% , (T2)+0.38 (T3)+0.5% (T4)+0.63% Fiziksel Hasar Emilimi.'
        ])
        .addField('Strike Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Strike Hasar Emilimi.'
        ])
        .addField('Thrust Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Thrust Hasar Emilimi.'
        ])
        .addField('Wilderness Ward:', [
            '(T1)+0.75% , (T2)+1.13% (T3)+1.5% (T4)+1.88% Fiziksel ve (T1)0.25% , (T2)0.38% (T3)0.5 (T4)0.63% Elemental Hasar Emilimi.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881999140920377394/unknown.png')
        message.channel.send(embed)
    }
}