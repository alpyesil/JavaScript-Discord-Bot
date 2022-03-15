const { Client, Intents, Presence, Message, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const isaret = require('./isaret.json'); //Komutlardan kullanan "!" çağrılan yer
const { MessageEmbed } = require('discord.js'); //embed mesaage discord.js den çekiyor
const hedefimiz = require('./hedef.json'); //Hedef sayacı
const play = require('discordjs-ytdl')

var hedef = hedefimiz.hedef
var prefix = isaret.prefix


client.on('ready', () => {
  console.log(`Bot sunucuya giriş yaptı ${client.user.tag}!`); //Botun çalışıp çalışmadığını gördüğümüz durum
  client.user.setActivity('!komutlar Bot Loading %10 :)', {type: 'PLAYING'}) //Bot durumunun buradan değiştiriyoruz
  .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`)) //Durum değişikliğini onaylayan kısım.
  .catch(console.error);

});

client.on('message', msg => { //Kanala mesaj yeri
    if (msg.content.toLowerCase() === 'günaydın') {
        msg.channel.send("Günaydınlar ❤️");
    }
});

// client.on('message', msg =>{ //DM (Özel) mesaj yeri
//     if (msg.content.toLowerCase() === 'selam'){
//         msg.author.send('sana da selam');
//     }
// });

// client.on('message',msg =>{ //Blacklist kelimlerin yeri
//     if(msg.content.toLowerCase() == 'siktir'){
//         msg.delete()
//         msg.channel.send('Argo ve küfür yok!!')
//     }
// });

// client.on('message',msg =>{ //Mesaja tepki ekleme
//     if (msg.content.toLowerCase() == ''){ //Kullanıcının öncenden tanımlı kelimesi
//         msg.react('') //Mesaja koyulan emoji
//         msg.channel.send(' ') //Bot Mesajı
//     }
// })

client.on('message', message => { //KOMUTLAR EMBED
    if (message.content.toLowerCase() === '!komutlar'){
        const kanal = new MessageEmbed()
        .setColor('RANDOM')
	    .setTitle('New World Türkiye Botu')
	    .setURL('https://discord.gg/QeaKR9YT9A')
	    .setAuthor('New World Türkiye', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg', 'https://discord.gg/QeaKR9YT9A')
	    .setDescription('Genel komutlar aşağıda listelenmiştir;')
	    .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg')
	    .addFields(
		    { name: '!str', value: 'STR Puanları hakkında bilgi verir', inline: true },   
            { name: '!int', value: 'INT Puanları hakkında bilgi verir', inline: true },
            { name: '!dex', value: 'DEX Puanları hakkında bilgi verir', inline: true },    
            { name: '!foc', value: 'FOC Puanları hakkında bilgi verir', inline: true },
            { name: '!cons', value: 'CONS Puanları hakkında bilgi verir', inline: true },
            { name: '!weapongems', value: 'Silah Gemleri hakkında bilgi verir', inline: true },
            { name: '!armorgems', value: 'Armor Gemleri hakkında bilgi verir', inline: true },
            { name: '!sword', value: 'Kılıc ve Kalkan hakkında bilgi verir', inline: true },  
            { name: '!great', value: 'Great Axe hakkında bilgi verir', inline: true },  
            { name: '!hammer', value: 'War Hammer hakkında bilgi verir', inline: true },  
            { name: '!hatchet', value: 'Hatchet hakkında bilgi verir', inline: true },       
	    )
	    .setTimestamp()
	    .setFooter('Made by Alpysl', 'https://cdn.discordapp.com/attachments/856268503580540983/882005172719607848/vBwCWL8W.jpg');
        
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //INT EMBED
    if (message.content.toLowerCase() === '!int'){
        const kanal = new MessageEmbed()

        .setTitle('***INTELLIGENCE Özellik Bonusları***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 INT Puanı verdiğiniz zaman:', [
            'Hafif ve Ağır Magic (Büyü) saldırlarının hasarını +10% artırır',
            'Bitki toplarken 1 Azoth kazanma şansınızı +5% artırır.'
        ])
        .addField('100 INT Puanı verdiğiniz zaman:', [
            'Critical (Kritik) vuruş hasarını +10% artırır.',
            'Bitki toplama hızını +%10 artırır.'
        ])
        .addField('150 INT Puanı verdiğiniz zaman:', [
            'Elemental hasarınızı +15% artırır.',
            'Bitki toplarken kazandığınız malzemenin ağırlığını -10% düşürür.'
        ])
        .addField('200 INT Puanı verdiğiniz zaman:', [
            'Her dodge sonrasında +10 Mana kazanırsınız.',
            'Bitki yoplama hızını +10% artırır.'
        ])
        .addField('250 INT Puanı verdiğiniz zaman:', [
            'Zamana bağlı hasar vuran büyü skillerinizin aktiflik süresini +30% artırır.',
            'Bitki toplarken +10% fazladan materyal elde etmenizi sağlar.'
        ])
        .addField('300 INT Puanı verdiğiniz zaman:', [
            'Canı 100% olan hedeflere ilk vuruşunuz +10% hasar verir.',
            'Azoth seyahat maliyetinde -10% azalma.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881991174922076220/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //DEX EMBED
    if (message.content.toLowerCase() === '!dex'){
        const kanal = new MessageEmbed()

        .setTitle('***DEXTERITY Özellik Bonusları ***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 DEX Puanı verdiğiniz zaman:', [
            'Hedefe +5% şans ile kritik vuruş sağlar.',
            'Deri toplama hızını +10% artırır.'
        ])
        .addField('100 DEX Puanı verdiğiniz zaman:', [
            'Thrust hasarını +5% artırır.',
            'Deri topladıktan sonraki 3 saniye boyunca +20% hareket hız kazanırısınız.'
        ])
        .addField('150 DEX Puanı verdiğiniz zaman:', [
            'Dodge (Saldırıdan Kaçınma) özelliği kullandığınızda -10 daha az stamina harcar.',
            'Toplanan derilerin ağırlığını -10% azaltır.'
        ])
        .addField('200 DEX Puanı verdiğiniz zaman:', [
            'Arkadan ve Kafadan darbelerde +10% fazla hasar meydana gelir.',
            'Deri toplama hızını +10% artırır.'
        ])
        .addField('250 DEX Puanı verdiğiniz zaman:', [
            'Sersemlemiş, yavaşlatılmış veya yerdeki düşmanlara karşı yapılan kritik saldırı hasarını +10% artırır.'
            
        ])
        .addField('300 DEX Puanı verdiğiniz zaman:', [
            'Her başarılı dodgeden sonra kesin kritik vurmannızı sağlar bu etki her 10 sn bir tekrar eder. \nKullanılan cephaneyi +15% şans ile geri kazanırınız.'
            
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881991024451416124/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //STR EMBED
    if (message.content.toLowerCase() === '!str'){
        const kanal = new MessageEmbed()

        .setTitle('***STRENGTH Özellik Bonusları***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 STR Puanı verdiğiniz zaman:', [
            'Mele silahlarla yapacağınız Hafif (Light) saldırılar sırasında +5% hasar artışı kazanır.',
            'Maden toplama hızınızı +10 artar.'
        ])
        .addField('100 STR Puanı verdiğiniz zaman:', [
            'Mele silahlarla yapacağınız Ağır (Heavy) saldırılar sırasında +10% hasar artışı kazanır.',
            'Taşıma kapasitebizi +20 eklenir.'
        ])
        .addField('150 STR Puanı verdiğiniz zaman:', [
            'Mele silahlarla yaptığınız saldırlar düşmanın +50% daha fazla stamina kaybetmesini sağlar.',
            'Maden materyallerinin taşınma ağırlıklarını -10% oranında azaltır.'
        ])
        .addField('200 STR Puanı verdiğiniz zaman:', [
            'Sersemlemiş, yavaşlatılmış veya yerdeki düşmanlara karşı yapılan kritik saldırı hasarını +10% artırır.',
            'Maden toplama hızınız +10% artar.'
        ])
        .addField('250 STR Puanı verdiğiniz zaman:', [
            'Mele silahlar ile yapacağınız hafif ve ağır saldırlar esnasında stamina kazancı sağlanır.',
            'Maden toplarken +10% fazladan materyal elde etmenizi sağlar.'
        ])
        .addField('300 STR Puanı verdiğiniz zaman:', [
            'Mele silahlarla yapacağınız hafif ve ağır saldırların düşman tarafından bozulmamasını sağlar.',
            'Tüm madenleri +25% şansla tek kazma vuruşunda toplama şansı sağlar.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881982542042005524/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //FOC EMBED
    if (message.content.toLowerCase() === '!foc'){
        const kanal = new MessageEmbed()

        .setTitle('***FOCUS Özellik Bonusları***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 FOC Puanı verdiğiniz zaman:', [
            'Mana yenileme oranını +10% artırır.',
            'Balıkçılık yapaılırken orta gerginliği +10% artış sağlanır.'
        ])
        .addField('100 FOC Puanı verdiğiniz zaman:', [
            'Toplam mana kapasitesi +20 artar.',
            'Materyal parçalama (Salvage) esanasında elde edilen malzeme miktarını +10% artırır.'
        ])
        .addField('150 FOC Puanı verdiğiniz zaman:', [
            'Yapılan heal oranını +20% artırır.',
            'Balıkçılıktan elde edilen materyallerin ağırlığını -10% azaltır.'
        ])
        .addField('200 FOC Puanı verdiğiniz zaman:', [
            'Verilen güçlendirme (BUFF) etkilerin süresini +20% artırır.',
            'Balıkçılık yapaılırken orta gerginliği +10% artış sağlanır.'
        ])
        .addField('250 FOC Puanı verdiğiniz zaman:', [
            'Kişisel veya grup üyelerinden herhangi biri bir düşman öldürdüğünde +30 mana kazandırır.',
            'Yakalanan balık kazancını +10% artırır.'
        ])
        .addField('300 FOC Puanı verdiğiniz zaman:', [
            'Mana sıfıra ulaştığında mana yenilenmesi 10 saniyeliğine +200% artar (60sn bekeme süresi).',
            'Hızlı seyehat yöntemlerinden biri olan şehirdeki Han evlerine dönüş beklme süresini +10% azaltır.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881991320929964072/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //CONS EMBED
    if (message.content.toLowerCase() === '!cons'){
        const kanal = new MessageEmbed()

        .setTitle('***CONSTITUTION Özellik Bonusları***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('50 CON Puanı verdiğiniz zaman:', [
            'Tüketilebilen bütün sağlık eşyaları etkisi +20% artar.',
            'Odunculuk hızını +10% artırır.'
        ])
        .addField('100 CON Puanı verdiğiniz zaman:', [
            'Maximum canınız fiziksel zırhınızın +10% kadar artar.',
            'Toplayılıcılık aletlerindeki dayanıklılık +10% artırır.'
        ])
        .addField('150 CON Puanı verdiğiniz zaman:', [
            'Kritik hasar alınımını karşı %10 dayanaklılık artar.',
            'Odunculuk elde edilen malzemelerin ağırlığını -10% azaltır.'
        ])
        .addField('200 CON Puanı verdiğiniz zaman:', [
            'Zırhınızı +20% artırır.',
            'Odunculuk ağaç kesme hızınızı +10% artar.'
        ])
        .addField('250 CON Puanı verdiğiniz zaman:', [
            'Canınız tamamen dolu iken aldığınız hasar +80% azaltır.',
            'Odunculuktan elde edilen materyalleri +10% arttırır.'
        ])
        .addField('300 CON Puanı verdiğiniz zaman:', [
            'Sersemleme, yavaşlatma, bağlama büyülerinin süresini %20 artırır. tek vuruşta bir ağacı kesme şansını %25 artırır.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881991427544981514/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //SWORD EMBED
    if (message.content.toLowerCase() === '!sword'){
        const kanal = new MessageEmbed()

        .setTitle('***Sword & Sheild***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('***Birincil Strength çarpan oranı:*** 0.9X', [
        ' a '])
        .addField('***İkincil Dexterity çarpan oranı:*** 0.65X', [
        ' b '])
        .addField('***Hasar Türü:*** Slash/Thrust', [
        ' c '])
        .addField('***Kullanılan Bufflar:*** Hız,', [
        ' d '])
        .addField('***Kullanılan Anti-Bufflar:*** Yavaşlatma, Parçalama, Yereserme, Zayıflatma, Sersemletme', [
        ' f '])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881993951408697404/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //GREAT AXE EMBED
    if (message.content.toLowerCase() === '!great'){
        const kanal = new MessageEmbed()

        .setTitle('***Great Axe***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('***Birincil Strength çarpan oranı:*** 1.0X')
        .addField('***İkincil Dexterity çarpan oranı:*** NaNX')
        .addField('***Hasar Türü:*** Slash')
        .addField('***Kullanılan Bufflar:*** Haste, Fortify, Grit')
        .addField('***Kullanılan Anti-Bufflar:*** NaN')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881994150877225060/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //WAR HAMMER EMBED
    if (message.content.toLowerCase() === '!hammer'){
        const kanal = new MessageEmbed()

        .setTitle('***War Hammer***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('***Birincil Strength çarpan oranı:*** 1.0X')
        .addField('***İkincil Dexterity çarpan oranı:*** 0.65X')
        .addField('***Hasar Türü:*** Strike')
        .addField('***Kullanılan Bufflar:*** Haste, Empower, Fortify.')
        .addField('***Kullanılan Anti-Bufflar:*** Rend, Exhaust, Stun, Weaken, Slow.')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881994263754330122/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //HATCHET EMBED
    if (message.content.toLowerCase() === '!hatchet'){
        const kanal = new MessageEmbed()

        .setTitle('***Hatchet***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('***Birincil Strength çarpan oranı:*** 0.9X')
        .addField('***İkincil Dexterity çarpan oranı:*** 0.65X')
        .addField('***Hasar Türü:*** Slash')
        .addField('***Kullanılan Bufflar:*** Empower, Fortify, Haste.')
        .addField('***Kullanılan Anti-Bufflar:*** Root, Rend, Slow, Disease, Weaken.')
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881994372789469256/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //WEAPONG GEMS EMBED
    if (message.content.toLowerCase() === '!weapongems'){
        const kanal = new MessageEmbed()

        .setTitle('***Silah Gemleri***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('Arboreal:', [
            'Silahın temel hasarı veya FOCUS ta bakılarak hanfisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Nature hasara dönüştürür.'
        ])
        .addField('Brash:', [
            'Canı tam olan hedeflere karşı (T1)15% , (T2)20% (T3)25% (T4)30% hasar artışı sağlar.'
        ])
        .addField('Calming:', [
            '(T1)-4% , (T2)-6% (T3)-8% (T4)-10% daha az tehdit oluşturursunuz.'
        ])
        .addField('Cruel:', [
            'Yavaşlatılmış, sersemletilmiş veya sabitlenmiş düşmanlara karşı (T1)6% , (T2)8% (T3)10% (T4)12%.'
        ])
        .addField('Electrified:', [
            'Silahın temel hasarı veya INT te bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Ligtning hasara dönüştürür.'
        ])
        .addField('Frozen:', [
            'Silahın temel hasarı veya INTte bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Ice hasara dönüştürür.'
        ])
        .addField('Gambit:', [
            'Staminanız dolu değilse (T1)+6% , (T2)+9% (T3)+12% (T4)+15% hasar artışı kazanırsınız.'
        ])
        .addField('Ignited:', [
            'Silahın temel hasarı veya INTte bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% FIRE hasara dönüştürür.'
        ])
        .addField('Lucky:', [
            '(T1)+0.25% , (T2)+0.35% (T3)0.45% (T4)5% Sandıklardan ve canavarlardan nadir eşyalar düşme şansını artırır.'
        ])
        .addField('Opportunist:', [
            'Eğer düşmanlarınızın canı %30 dan daha az ise (T1)+8% , (T2)+12% (T3)+16% (T4)200% daha fazla hasar vurmanızı sağlar.'
        ])
        .addField('Rally:', [
            'Eğer canınız full ise (T1)+6% , (T2)+9% (T3)+12% (T4)+15% dostlarınızı iyileştirme artışı ve hasar artışı kazanırsınız..'
        ])
        .addField('Rataliate:', [
            'Düşman tarafından 3 vuruş aldıktan sonra (T1)+6% , (T2)+9% (T3)+12% (T4)+15% oranda hasar artışı kazanırınız.'
        ])
        .addField('Taunt:', [
            'Taunt aktif iken (T1)100% , (T2)200% (T3)250% (T4)300% düşmanlarınıza tehdit oluştururusnuz.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881999140920377394/unknown.png')
        
        message.channel.send(kanal)
    }
});
client.on('message', message => { //ARMOR GEMS EMBED
    if (message.content.toLowerCase() === '!armorgems'){
        const kanal = new MessageEmbed()

        .setTitle('***Zırh Gemleri***')
        .setURL("https://discord.gg/QeaKR9YT9A")
        .addField('Abbysal Ward:', [
            '(T1)+2.5% , (T2)+3.5% (T3)+5.0% (T4)+6.0% Void (Hiçlik) Hasarı Emilimi.'
        ])
        .addField('Arcane Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)3.0% (T4)3.75% Arcane (Gizemli) Hasarı Emilimi.'
        ])
        .addField('Calming:', [
            '(T1)-4.0% , (T2)-6% (T3)-8.0% (T4)-10% daha az tahdit oluşturursunuz.'
        ])
        .addField('Elemental Ward:', [
            '(T1)+1.0% , (T2)+1.5% (T3)+2.0% (T4)+2.5% Elemental (Eklement) Hasar Emilimi.'
        ])
        .addField('Fire Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Fire (Ateş) Hasar Emilimi.'
        ])
        .addField('Ice ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Ice (Buz) Hasar Emilimi.'
        ])
        .addField('Lightning Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Lightning (Elektirik) Hasar Emilimi.'
        ])
        .addField('Lucky:', [
            '(T1)+0.25% , (T2)+0.35% (T3)+0.45% (T4)+5.0% Sandıklardan ve canavlaran nadir eşyalar düşme şansını arttırır.'
        ])
        .addField('Nature Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Nature (Doğa) Hasar Emilimi.'
        ])
        .addField('Physical Ward:', [
            '(T1)+1.0% , (T2)+1.5% (T3)+2.0% (T4)+2.5% Physical (Fiziksel) Hasar Emilimi.'
        ])
        .addField('Slash Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Slash Hasar Emilimi.'
        ])
        .addField('Spectral Ward:', [
            '(T1)+0.75% , (T2)+1.13 (T3)+1.5% (T4)+1.88% Elemental ve (T1)+0.25% , (T2)+0.38 (T3)+0.5% (T4)+0.63% Fiziksel Hasar Emilimi.'
        ])
        .addField('Strike Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Strike Hasar Emilimi.'
        ])
        .addField('Thrust Ward:', [
            '(T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Thrust Hasar Emilimi.'
        ])
        .addField('Wilderness Ward:', [
            '(T1)+0.75% , (T2)+1.13% (T3)+1.5% (T4)+1.88% Fiziksel ve (T1)0.25% , (T2)0.38% (T3)0.5 (T4)0.63% Elemental Hasar Emilimi.'
        ])
        .setColor("RANDOM")
        .setThumbnail('https://cdn.discordapp.com/attachments/856268503580540983/881999140920377394/unknown.png')
        
        message.channel.send(kanal)
    }
});


client.on('guildMemberAdd', member => {//Gelen Kullanıcı
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'log');     
    girişçıkış.send(`${member} Sucunumuza katıldı. Üye sayımızı ${member.guild.memberCount}`);
    member.send(`${member} GÖKTÜRK GUİLD DİSCORDUNA HOŞGELDİN`) //Gelen kullanıcaya özek mesaj atma
  
});
client.on('guildMemberRemove', member => {//Giden Kullanıcı
    const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'log');
    girişçıkış.send(`${member} Siktirip gitti Üye sayımızı ${member.guild.memberCount}`);
  
});
client.on('guildMemberAdd', member =>{ //Sesli kanala üye saysınını yazar
    try{
        const Sayac = member.guild.channels.cache.find(channel => channel.id === '708783822518354100');
        Sayac.setName(`Üye Sayısı: ${member.guild.memberCount}`);
    }
    catch (e){
        console.log(e);
    }
});
client.on('guildMemberRemove', member =>{ //Sesli kanala üye sayısını yazar
    try{
        const Sayac = member.guild.channels.cache.find(channel => channel.id === '708783822518354100');
        Sayac.setName(`Üye Sayısı: ${member.guild.memberCount}`);
    }
    catch (e){
        console.log(e);
    }
});


client.on('message', message => { //Kullanıcıyı sunucudan kickleyeme yaran komut
    if (!message.guild) return;
    if (message.content.startsWith('!kick')) {
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
});
client.on('message', message => { //Kullanıcıyı sunucudan banlamaya yarayan komut
    if (!message.guild) return;
  if (message.content.startsWith('!ban')) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban()
            .then(() => {
            const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
             log.send(`${user.tag} kişisi banlanmıştır.`);
            })
            .catch(err => {
              message.reply('Bunu yapamam.');
              console.error(err);
            });
        } else {
          message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
        }
      } else {
        message.reply("Yasaklanacak kişiyi yazmadın.");
      }
    }
});

client.on("guildMemberAdd", member => { //Kullanıcıya otamatik rol verme kodu
    try {
    let role = member.guild.roles.cache.find(role => role.name === 'Misafir')
    member.roles.add(role);
  } catch(e) {
    console.log(e)
  }
});

client.on("message", message => { //Kodla rol verme
    if (message.content.startsWith('!yetki')) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('YETKİN YOK')
      let role = message.mentions.roles.first();
      let member = message.mentions.members.first();
      member.roles.add(role)
    }
});

client.on('message', message => { //oymalama açma
    if (message.content.startsWith('!oylama')){
        const args = message.content.split(' ').slice(1)
        const botmesajı = args.join(" ")
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('YETKİN YOK');
        if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadınız.');
        message.delete(message.author)
        const embed = new MessageEmbed()
        .setTitle('GÖKTÜRK OYLAMA')
        .setDescription(botmesajı)
        .setFooter('DENEME BOTU');
        message.channel.send({ embed: embed}).then( embedMessage =>{
            embedMessage.react("✔️")
            embedMessage.react("❌")
        })
    }
});

client.on('message', message =>{ //Bir kanalda duyuru yapma
    if (message.content.startsWith('!duyuru')){
        const kanal = message.mentions.channels.first();
        const args = message.content.split(' ').slice(2);
        const botmesajı = args.join(" ")
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('YETKİN YOK');
        if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadınız')
        if (!kanal) return message.reply('Kanalı tanımlamadın.');
        message.delete(message.author)
        kanal.send(botmesajı);

    }
});

client.on('message', message =>{ //Kullanıcya dm den mesaj atmak
    if (message.content.startsWith('!özel')){
        const kişi = message.mentions.users.first();
        const args = message.content.split(' ').slice(2);
        const botmesajı = args.join(" ")
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('YETKİN YOK');
        if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadınız')
        if (!kişi) return message.reply('Rolü tanımlamadın.');
        message.delete(message.author)
        kişi.send(botmesajı);
        

    }
})

client.on('message', async message => { //Bota müzik çaldırma
    if (message.content.startsWith('+p')){       
        const args = message.content.split(' ').slice(1);
        const botmesajı = args.join(" ")
        if (!botmesajı) return message.reply('URL koymadınız')
        if (message.member.voice.channel) {
            const embed = new MessageEmbed()
            .setTitle('Şarkı Bulundu')
            .setColor('RANDOM')
            .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            const connection = await message.member.voice.channel.join()
            play.play(connection, args.join(" "), 'AIzaSyAEduLNz8OHdQwkXnMoZNO543ntM5vasrk')
            let title = paly.title(args.join(" "), 'AIzaSyAEduLNz8OHdQwkXnMoZNO543ntM5vasrk')
            title.then(titlee => embed.addField(':musical_note:Aranıyor:mag_right:', title))
            setTimeout(function (){
                message.channel.send(embed)               
            },2500);

        }else { 
            message.reply('Bir sesli kanala katıl.')
        }
    }
})

client.login('YOURCODE');
