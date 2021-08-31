module.exports = {
    kod: "foc",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***FOCUS Özellik Bonusları***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 FOC Puanı verdiğiniz zaman:', [
            'Mana yenileme oranını +10% artırır.',
            'Balıkçılık yapaılırken orta gerginliği +10% artış sağlanır.'
        ])
        .addField('100 FOC Puanı verdiğiniz zaman:', [
            'Toplam mana kapasitesi +20 artar.',
            'Materyal parçalama (Salvage) esanasında elde edilen malzeme miktarını +10% artırır.'
        ])
        .addField('150 FOC Puanı verdiğiniz zaman:', [
            'Yapılan heal oranını +20% artırır.',
            'Balıkçılıktan elde edilen materyallerin ağırlığını -10% azaltır.'
        ])
        .addField('200 FOC Puanı verdiğiniz zaman:', [
            'Verilen güçlendirme (BUFF) etkilerin süresini +20% artırır.',
            'Balıkçılık yapaılırken orta gerginliği +10% artış sağlanır.'
        ])
        .addField('250 FOC Puanı verdiğiniz zaman:', [
            'Kişisel veya grup üyelerinden herhangi biri bir düşman öldürdüğünde +30 mana kazandırır.',
            'Yakalanan balık kazancını +10% artırır.'
        ])
        .addField('300 FOC Puanı verdiğiniz zaman:', [
            'Mana sıfıra ulaştığında mana yenilenmesi 10 saniyeliğine +200% artar (60sn bekeme süresi).',
            'Hızlı seyehat yöntemlerinden biri olan şehirdeki Han evlerine dönüş beklme süresini +10% azaltır.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881991320929964072/unknown.png')   
        message.channel.send(embed)
    }
}