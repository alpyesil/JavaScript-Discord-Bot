module.exports = {
  kod: "kick",
  async run (client, message, args) {
    const args1 = message.content.split(' ').slice(2)
    const { MessageEmbed } = require('discord.js')
    const user = message.mentions.users.first();
    
   if (user) {
     const member = message.guild.member(user);
     if (!message.member.hasPermission('KICK_MEMBERS')) {
      const embed = new MessageEmbed()
      .setDescription('Yetkin YOK!!!')
      .setColor('RANDOM')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      message.channel.send(embed)
      return;
  }
     if (member) {
       member
       .kick('Optional reason')
       .then(() =>{
         const kanal = message.guild.channels.cache.find(ch => ch.id === '881926547131498596')
         const embed = new MessageEmbed()
         .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 1024 }))
         .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
         .addField(member, 'sunucudan kicklendi')
         .addField('Üye', member)        
         .setColor('RANDOM')
         message.channel.send(embed)
       })
       .catch(err => {
         const embed = new MessageEmbed()
         .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
         .setDescription('Kickleme başarısız!!')
         message.channel.send(embed)


         console.error(err);
       });

     }else{
      const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription('Böyle bir kişi yok')
      message.channel.send(embed)
     }
   } else{
     const embed = new MessageEmbed()
     .setColor('RANDOM')
     .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
     .setDescription('Kiclenecek kişiyi seçmedin')
     message.channel.send(embed)
   } 

  }
}