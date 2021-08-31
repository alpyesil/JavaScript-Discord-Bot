module.exports = {
    kod: "klana",
    async run (client, message, args){
        const game = args[0]
        const nott = message.content.split(' ').slice(2)
        const not = nott.join(" ")
        if (message.member.voice.channel){
            const Discord = new require('discord.js')
            const embed = new Discord.MessageEmbed()
            .setTitle (`Klan arıyor: **${message.author.tag}**`)
            .setColor("RANDOM")
            .addField("Oyun:", `${game}`)
            .addField('Sesli Kanal:', `${meesage.member.voice.channel}`)
            .addField("Not:", `${not}`);
            message.channel.send(embed)
        }
    }
}