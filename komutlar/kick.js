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
      .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
      message.channel.send(embed)
      return;
  }
     if (member) {
       member
       .kick('Optional reason')
       .then(() =>{
         const kanal = message.guild.channels.cache.find(ch => ch.id === '881918422378741770')
         const embed = new MessageEmbed()
         .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 1024 }))
         .addField(member, 'sunucudan kicklendi')
         .addField('Üye', member)        
         .setColor('RANDOM')
         .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg'); 
         message.channel.send(embed)
       })
       .catch(err => {
         const embed = new MessageEmbed()
         .setDescription('Kickleme başarısız!!')
         .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg');  
         message.channel.send(embed)


         console.error(err);
       });

     }else{
      const embed = new MessageEmbed()
      .setColor('RANDOM')
      .setDescription('Böyle bir kişi yok')
      .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg');  
      message.channel.send(embed)
     }
   } else{
     const embed = new MessageEmbed()
     .setColor('RANDOM')
     .setDescription('Kiclenecek kişiyi seçmedin')
     .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg');  
     message.channel.send(embed)
   } 

  }
}
