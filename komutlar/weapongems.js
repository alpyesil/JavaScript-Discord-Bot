module.exports = {
    kod: "weapongems",
    async run (client, message, args) {
        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setTitle('***Silah Gemleri***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('Arboreal:', [
            'Silahın temel hasarı veya FOCUS ta bakılarak hanfisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Nature hasara dönüştürür.'
        ])
        .addField('Brash:', [
            'Canı tam olan hedeflere karşı (T1)15% , (T2)20% (T3)25% (T4)30% hasar artışı sağlar.'
        ])
        .addField('Calming:', [
            '(T1)-4% , (T2)-6% (T3)-8% (T4)-10% daha az tehdit oluşturursunuz.'
        ])
        .addField('Cruel:', [
            'Yavaşlatılmış, sersemletilmiş veya sabitlenmiş düşmanlara karşı (T1)6% , (T2)8% (T3)10% (T4)12%.'
        ])
        .addField('Electrified:', [
            'Silahın temel hasarı veya INT te bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Ligtning hasara dönüştürür.'
        ])
        .addField('Frozen:', [
            'Silahın temel hasarı veya INTte bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Ice hasara dönüştürür.'
        ])
        .addField('Gambit:', [
            'Staminanız dolu değilse (T1)+6% , (T2)+9% (T3)+12% (T4)+15% hasar artışı kazanırsınız.'
        ])
        .addField('Ignited:', [
            'Silahın temel hasarı veya INTte bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% FIRE hasara dönüştürür.'
        ])
        .addField('Lucky:', [
            '(T1)+0.25% , (T2)+0.35% (T3)0.45% (T4)5% Sandıklardan ve canavarlardan nadir eşyalar düşme şansını artırır.'
        ])
        .addField('Opportunist:', [
            'Eğer düşmanlarınızın canı %30 dan daha az ise (T1)+8% , (T2)+12% (T3)+16% (T4)200% daha fazla hasar vurmanızı sağlar.'
        ])
        .addField('Rally:', [
            'Eğer canınız full ise (T1)+6% , (T2)+9% (T3)+12% (T4)+15% dostlarınızı iyileştirme artışı ve hasar artışı kazanırsınız..'
        ])
        .addField('Rataliate:', [
            'Düşman tarafından 3 vuruş aldıktan sonra (T1)+6% , (T2)+9% (T3)+12% (T4)+15% oranda hasar artışı kazanırınız.'
        ])
        .addField('Taunt:', [
            'Taunt aktif iken (T1)100% , (T2)200% (T3)250% (T4)300% düşmanlarınıza tehdit oluştururusnuz.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881999140920377394/unknown.png')
        message.channel.send(embed)
    }
}