module.exports = {
    kod: "sil",
    async run (client, message, args){
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
        if (isNaN(args)) return message.reply('Lütfen bir sayı girinizi:');
        if (args < 2 || args > 100) return message.reply('Lütfen 2-100 Arasında bir sayı girin')
        message.channel.bulkDelete(Number(args))
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Mesajlar Silindi')
        .setDescription('Silinen Mesaj Sayısı: ' + args)
        message.channel.send(embed).then(mesaj => {
            setTimeout(function () {
                mesaj.delete()

            }, 5000);
        })

    }
}