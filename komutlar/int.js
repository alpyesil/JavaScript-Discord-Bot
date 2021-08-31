module.exports = {
    kod: "int",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***INTELLIGENCE Özellik Bonusları***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 INT Puanı verdiğiniz zaman:', [
            'Hafif ve Ağır Magic (Büyü) saldırlarının hasarını +10% artırır',
            'Bitki toplarken 1 Azoth kazanma şansınızı +5% artırır.'
        ])
        .addField('100 INT Puanı verdiğiniz zaman:', [
            'Critical (Kritik) vuruş hasarını +10% artırır.',
            'Bitki toplama hızını +%10 artırır.'
        ])
        .addField('150 INT Puanı verdiğiniz zaman:', [
            'Elemental hasarınızı +15% artırır.',
            'Bitki toplarken kazandığınız malzemenin ağırlığını -10% düşürür.'
        ])
        .addField('200 INT Puanı verdiğiniz zaman:', [
            'Her dodge sonrasında +10 Mana kazanırsınız.',
            'Bitki yoplama hızını +10% artırır.'
        ])
        .addField('250 INT Puanı verdiğiniz zaman:', [
            'Zamana bağlı hasar vuran büyü skillerinizin aktiflik süresini +30% artırır.',
            'Bitki toplarken +10% fazladan materyal elde etmenizi sağlar.'
        ])
        .addField('300 INT Puanı verdiğiniz zaman:', [
            'Canı 100% olan hedeflere ilk vuruşunuz +10% hasar verir.',
            'Azoth seyahat maliyetinde -10% azalma.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881991174922076220/unknown.png')   
        message.channel.send(embed)
    }
}