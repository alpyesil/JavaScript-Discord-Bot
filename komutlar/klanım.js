module.exports = {
    kod: "klanım",
    async run (client, message, args) {
        const klanbilgim  = message.content.split(' ').slice(1)
        const klan = klanbilgim.join(" ")
        const kanal = client.channels.cache.find(ch => ch.id === '882303117251739679')
        kanal.send(klan + ' - ' + message.author.tag)
        message.channel.send('Klan bilgileriniz alınmıştır.')
        message.channel.send('Klan bilgilerinizi buradan sürekli güncelliyebilirsiniz.')
    }
}