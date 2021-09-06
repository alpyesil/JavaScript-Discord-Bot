const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');
const { model } = require('mongoose');

module.exports = {
    kod: "test",
    async run (client, message, args){
        const filter = m => m.content.toLowerCase() === 'evet'
        const collector = message.channel.createMessageCollector(filter, {time: 5000})
        
        collector.on("collect", collected => {
            console.log('Worked!!');
        })

        collector.on("end", collected => {            
            if(!collected.size) {
                const embed = new MessageEmbed()
                .setDescription('Belirtilen süre içerisinde cevap verilmedi')
                .setColor('RANDOM')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                 message.channel.send(embed)
                 return;
            }
        })
    }

}
