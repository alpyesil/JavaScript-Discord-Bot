module.exports = {
    kod: "kick",
    async run (client, message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick()
              .then(() => {
              const log = message.guild.channels.cache.find(channel => channel.name === 'log')
               log.send(`${user.tag} kişisi kicklenmiştir`);
              })
              .catch(err => {
                message.reply('Bunu yapamam.');
                console.error(err);
              });
          } else {
            message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
          }
        } else {
          message.reply("Atılacak kişiyi yazmadın");
        }
      }
}