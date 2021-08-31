module.exports = {
    kod: "conx",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***CONSTITUTION Özellik Bonusları***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 CON Puanı verdiğiniz zaman:', [
            'Tüketilebilen bütün sağlık eşyaları etkisi +20% artar.',
            'Odunculuk hızını +10% artırır.'
        ])
        .addField('100 CON Puanı verdiğiniz zaman:', [
            'Maximum canınız fiziksel zırhınızın +10% kadar artar.',
            'Toplayılıcılık aletlerindeki dayanıklılık +10% artırır.'
        ])
        .addField('150 CON Puanı verdiğiniz zaman:', [
            'Kritik hasar alınımını karşı %10 dayanaklılık artar.',
            'Odunculuk elde edilen malzemelerin ağırlığını -10% azaltır.'
        ])
        .addField('200 CON Puanı verdiğiniz zaman:', [
            'Zırhınızı +20% artırır.',
            'Odunculuk ağaç kesme hızınızı +10% artar.'
        ])
        .addField('250 CON Puanı verdiğiniz zaman:', [
            'Canınız tamamen dolu iken aldığınız hasar +80% azaltır.',
            'Odunculuktan elde edilen materyalleri +10% arttırır.'
        ])
        .addField('300 CON Puanı verdiğiniz zaman:', [
            'Sersemleme, yavaşlatma, bağlama büyülerinin süresini %20 artırır.',
            'Tek vuruşta bir ağacı kesme şansını %25 artırır.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881991427544981514/unknown.png')  
        message.channel.send(embed)
    }
}