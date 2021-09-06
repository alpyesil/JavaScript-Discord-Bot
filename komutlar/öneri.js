const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
    kod: 'öneri',
    async run (message, args, cmd, client, discord){
        const kanal = message.guild.channels.cache.find(ch => ch.id === '881926547131498596')
        if(!channel) {
            const embed = new MessageEmbed()
            .setDescription('Öneri Kanalı Bulunamadı!!!')
            .setColor('RANDOM')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
            return;
        }

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
        .setColor('FADF2E')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}