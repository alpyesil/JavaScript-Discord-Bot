module.exports = {
    kod: "str",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***STRENGTH Özellik Bonusları***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 STR Puanı verdiğiniz zaman:', [
            'Mele silahlarla yapacağınız Hafif (Light) saldırılar sırasında +5% hasar artışı kazanır.',
            'Maden toplama hızınızı +10 artar.'
        ])
        .addField('100 STR Puanı verdiğiniz zaman:', [
            'Mele silahlarla yapacağınız Ağır (Heavy) saldırılar sırasında +10% hasar artışı kazanır.',
            'Taşıma kapasitebizi +20 eklenir.'
        ])
        .addField('150 STR Puanı verdiğiniz zaman:', [
            'Mele silahlarla yaptığınız saldırlar düşmanın +50% daha fazla stamina kaybetmesini sağlar.',
            'Maden materyallerinin taşınma ağırlıklarını -10% oranında azaltır.'
        ])
        .addField('200 STR Puanı verdiğiniz zaman:', [
            'Sersemlemiş, yavaşlatılmış veya yerdeki düşmanlara karşı yapılan kritik saldırı hasarını +10% artırır.',
            'Maden toplama hızınız +10% artar.'
        ])
        .addField('250 STR Puanı verdiğiniz zaman:', [
            'Mele silahlar ile yapacağınız hafif ve ağır saldırlar esnasında stamina kazancı sağlanır.',
            'Maden toplarken +10% fazladan materyal elde etmenizi sağlar.'
        ])
        .addField('300 STR Puanı verdiğiniz zaman:', [
            'Mele silahlarla yapacağınız hafif ve ağır saldırların düşman tarafından bozulmamasını sağlar.',
            'Tüm madenleri +25% şansla tek kazma vuruşunda toplama şansı sağlar.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881982542042005524/unknown.png')      
        message.channel.send(embed)
    }
}