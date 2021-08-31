module.exports = {
    kod: "pp",
    async run (client, message, args){
        const { MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first()
        if (user){
            const embed = new MessageEmbed()
                .setTitle('Profil Fotoğrafı')
                .setColor("RANDOM")
                .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
                .setFooter('Made By Alpysl')
            message.channel.send(embed)
        }else{
            const embed = new MessageEmbed()
            .setTitle('Profil Fotoğrafı')
            .setColor("RANDOM")
            .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setFooter('Made By Alpysl')
            message.channel.send(embed)
        }


    }
}