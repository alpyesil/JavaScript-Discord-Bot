const Discord = require('discord.js')
const mongoose = require("mongoose");
const { MessageEmbed } = require('discord.js')


module.exports= {
    kod: "bal",
    async run (message, args, cmd, client, discord, profileData) {
        const embed = new MessageEmbed()
        .setDescription('Öneri Kanalı Bulunamadı!!!')
        .setColor('RANDOM')

        message.channel.send(embed)

    },
  };