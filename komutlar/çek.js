const { MessageEmbed } = require('discord.js')
const { run } = require("./unban");


module.exports = {
    kod: "çek",
    async run (client, message, args){
        if (!message.member.hasPermission('MOVE_MEMBERS')) {
            const embed = new MessageEmbed()
            .setDescription('Çekme Yetkin YOK!')
            .setColor('RANDOM')
            message.channel.send(embed)
            return;
        }
        const üye = message.mentions.members.first()
        if (!üye) {
            const embed = new MessageEmbed()
            .setDescription('Geçerli bir kullanıcıyı seçmedin!')
            .setColor('RANDOM')
            message.channel.send(embed)
            return;
        }
        if (!üye.voice.channel) {
            const embed = new MessageEmbed()
            .setDescription('Kişi ses kanalında değil')
            .setColor('RANDOM')
            message.channel.send(embed)
            return;
        }
        if (message.member.voice.channel){
            message.channel.send('Başarıyla Kanala Taşındı');
            üye.voice.setChannel(message.member.voice.channel.id)

        }else{
            if (!args[1]) {
                const embed = new MessageEmbed()
                .setDescription('Ses kanalında değilsiniz.')
                .setColor('RANDOM')
                message.channel.send(embed)
                return;
            }     
            message.channel.send('Başarıyla Kanala Taşındı');
            üye.voice.setChannel(args[1])
        }
        
    }
}