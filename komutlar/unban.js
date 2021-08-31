const { MessageManager } = require("discord.js")
const { MessageEmbed } = require('discord.js')

module.exports = {
    kod: "unban",
    async run (client, message, args){
        let id = args[0]
        if (!message.member.hasPermission('BAN_MEMBERS')) return;
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return;
        if (isNaN(id)) {
            const embed = new MessageEmbed()
            .setDescription('Lütfen geçerli bir ID Giriniz')
            .setColor('RANDOM')
            .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
            message.channel.send(embed)
            return;
        }
        message.guild.fetchBans().then(ban => {
            if (ban.size === 0) {
                const embed = new MessageEmbed()
                .setDescription('Sunucuda yasaklanan üye yoktur')
                .setColor('RANDOM')
                .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
                message.channel.send(embed)
                return;
            }
            const banlanan = ban.find(b => b.user.id === id)
            if (!banlanan) {
                const embed = new MessageEmbed()
                .setDescription('Kullanıcı')
                .setColor('RANDOM')
                .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
                message.channel.send(embed)
                return;
            }
            message.guild.members.unban(banlanan.user)
            message.reply('Ban kaldırılmıştır.')
        })
    }
}



