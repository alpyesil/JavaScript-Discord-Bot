module.exports = {
    kod: "dex",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***DEXTERITY Özellik Bonusları ***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 DEX Puanı verdiğiniz zaman:', [
            'Hedefe +5% şans ile kritik vuruş sağlar.',
            'Deri toplama hızını +10% artırır.'
        ])
        .addField('100 DEX Puanı verdiğiniz zaman:', [
            'Thrust hasarını +5% artırır.',
            'Deri topladıktan sonraki 3 saniye boyunca +20% hareket hız kazanırısınız.'
        ])
        .addField('150 DEX Puanı verdiğiniz zaman:', [
            'Dodge (Saldırıdan Kaçınma) özelliği kullandığınızda -10 daha az stamina harcar.',
            'Toplanan derilerin ağırlığını -10% azaltır.'
        ])
        .addField('200 DEX Puanı verdiğiniz zaman:', [
            'Arkadan ve Kafadan darbelerde +10% fazla hasar meydana gelir.',
            'Deri toplama hızını +10% artırır.'
        ])
        .addField('250 DEX Puanı verdiğiniz zaman:', [
            'Sersemlemiş, yavaşlatılmış veya yerdeki düşmanlara karşı yapılan kritik saldırı hasarını +10% artırır.',
            'Deri toplarken +10.0% fazladan materyal elde etmenizi sağlar.'
            
        ])
        .addField('300 DEX Puanı verdiğiniz zaman:', [
            'Her başarılı dodgeden sonra kesin kritik vurmannızı sağlar bu etki her 10 sn bir tekrar eder.',
            'Kullanılan cephaneyi +15% şans ile geri kazanırınız.'
            
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881991024451416124/unknown.png')      
        message.channel.send(embed)
    }
}