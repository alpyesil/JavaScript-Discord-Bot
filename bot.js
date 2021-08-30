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
  client.user.setActivity('!komutlar Loading %1 :)', {type: 'PLAYING'}) //Bot durumunun buradan değiştiriyoruz
  .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`)) //Durum değişikliğini onaylayan kısım.
  .catch(console.error);

});

client.on('message', msg => { //Kanala mesaj yeri
    if (msg.content.toLowerCase() === prefix + 'komutlar') {
        msg.channel.send("```!str" +
        "\n!int" +
        "\n!dex" +
        "\n!cons" +
        "\n!foc" +
        "\n!weapongems" +
        "\n!armorgems" +
        "\n!sword" +
        "\n!great" +
        "\n!hammer" +
        "\nhatchet```" );
    }
    if (msg.content.toLowerCase() === '!int') {
        msg.channel.send('```***Intelligence***'+
        '\nÖzellik Bonusları' +
        '\n50 INT Puanı verdiğiniz zaman:'+
        '\nHafif ve Ağır Magic (Büyü) saldırlarının hasarını +10% artırır'+ 
        '\nBitki toplama hızını +%10 artırır.'+
        '\n100 INT Puanı verdiğiniz zaman:'+
        '\nCritical (Kritik) vuruş hasarını +10% artırır.'+ 
        '\nBitki toplarken 1 Azoth kazanma şansınızı +5% artırır'+
        '\n150 INT Puanı verdiğiniz zaman:'+ 
        '\nElemental hasarınızı +15% artırır.'+
        '\nBitki toplarken kazandığınız malzemenin ağırlığını -10% düşürür.'+
        '\n200 INT Puanı verdiğinizde:'+
        '\nHer dodge sonrasında +10 Mana kazanırsınız.'+ 
        '\nBitki yoplama hızını +10% artırır.'+
        '\n250 INT Puanı verdiğiniz zaman:'+
        '\nZamana bağlı hasar vuran büyü skillerinizin aktiflik süresini +30% artırır.'+
        '\nBitki toplarken +10% fazladan materyal elde etmenizi sağlar.'+
        '\n300 INT Puanı verdiğiniz zaman:'+
        '\nCanı 100% olan hedeflere ilk vuruşunuz +10% hasar verir.'+
        '\nAzoth seyahat maliyetinde -10% azalma```');
    }
    if (msg.content.toLowerCase() === '!dex') {
        msg.channel.send('```***DEXTERITY***' +
        "\nÖzellik Bonusları " +
        "\n50 DEX Puanı verdiğiniz zaman:" +
        "\nHedefe +5% şans ile kritik vuruş sağlar." +
        "\nDeri toplama hızını +10% artırır. " +
        "\n100 DEX Puanı verdiğiniz zaman: " +
        "\nThrust hasarını +5% artırır. " +
        "\nDeri topladıktan sonraki 3 saniye boyunca +20% hareket hız kazanırısınız." +
        "\n150 DEX Puanı verdiğiniz zaman: " +
        "\nDodge (Saldırıdan Kaçınma) özelliği kullandığınızda -10 daha az stamina harcar. " +
        "\nToplanan derilerin ağırlığını -10% azaltır " +
        "\n200 DEX Puanı verdiğinizde:" +
        "\nArkadan ve Kafadan darbelerde +10% fazla hasar meydana gelir. " +
        "\nDeri toplama hızını +10% artırır. " +
        "\n250 DEX Puanı verdiğiniz zaman: " +
        "\nSersemlemiş, yavaşlatılmış veya yerdeki düşmanlara karşı yapılan kritik saldırı hasarını +10% artırır."+
        "\n300 DEX Puanı verdiğiniz zaman " +
        "\nHer başarılı dodgeden sonra kesin kritik vurmannızı sağlar bu etki her 10 sn bir tekrar eder. \nKullanılan cephaneyi +15% şans ile geri kazanırınız.```");
    }
    if (msg.content.toLowerCase() === '!str') {
        msg.channel.send("```***STRENGTH*** " +
        "\nÖzellik Bonusları " +
        "\n50 STR Puanı verdiğiniz zaman:" +
        "\nMele silahlarla yapacağınız Hafif (Light) saldırılar sırasında +5% hasar artışı kazanır." +
        "\nMaden toplama hızınızı +10 artar. " +
        "\n100 STR Puanı verdiğiniz zaman: " +
        "\nMele silahlarla yapacağınız Ağır (Heavy) saldırılar sırasında +10% hasar artışı kazanır. " +
        "\nTaşıma kapasitebizi +20 eklenir." +
        "\n150 STR Puanı verdiğiniz zaman: " +
        "\nMele silahlarla yaptığınız saldırlar düşmanın +50% daha fazla stamina kaybetmesini sağlar. " +
        "\nMaden materyallerinin taşınma ağırlıklarını -10% oranında azaltır " +
        "\n200 STR Puanı verdiğinizde:" +
        "\nSersemlemiş, yavaşlatılmış veya yerdeki düşmanlara karşı yapılan kritik saldırı hasarını +10% artırır." +
        "\nMaden toplama hızınız +10% artar." +
        "\n250 STR Puanı verdiğiniz zaman: " +
        "\nMele silahlar ile yapacağınız hafif ve ağır saldırlar esnasında stamina kazancı sağlanır." +
        "\nMaden toplarken +10% fazladan materyal elde etmenizi sağlar."+
        "\n300 STR Puanı verdiğiniz zaman " +
        "\nMele silahlarla yapacağınız hafif ve ağır saldırların düşman tarafından bozulmamasını sağlar. " +
        "\nTüm madenleri +25% şansla tek kazma vuruşunda toplama şansı sağlar```");
    }
    if (msg.content.toLowerCase() === '!foc') {
        msg.channel.send("```***FOCUS*** " +
        "\nÖzellik Bonusları " +
        "\n50 FOC Puanı verdiğiniz zaman:" +
        "\nMana yenileme oranını +10% artırır." +
        "\nBalıkçılık yapaılırken orta gerginliği +10% artış sağlanır." +
        "\n100 FOC Puanı verdiğiniz zaman: " +
        "\nToplam mana kapasitesi +20 artar" +
        "\nMateryal parçalama (Salvage) esanasında elde edilen malzeme miktarını +10% artırır." +
        "\n150 FOV Puanı verdiğiniz zaman: " +
        "\nYapılan heal oranını +20% artırır." +
        "\nBalıkçılıktan elde edilen materyallerin ağırlığını -10% azaltır." +
        "\n200 FOC Puanı verdiğinizde:" +
        "\nVerilen güçlendirme (BUFF) etkilerin süresini +20% artırır." +
        "\nBalıkçılık yapaılırken orta gerginliği +10% artış sağlanır." +
        "\n250 FOC Puanı verdiğiniz zaman: " +
        "\nKişisel veya grup üyelerinden herhangi biri bir düşman öldürdüğünde +30 mana kazandırır." +
        "\nYakalanan balık kazancını +10% artırır." +
        "\n300 FOC Puanı verdiğiniz zaman " +
        "\nMana sıfıra ulaştığında mana yenilenmesi 10 saniyeliğine +200% artar (60sn bekeme süresi)" +
        "\nHızlı seyehat yöntemlerinden biri olan şehirdeki Han evlerine dönüş beklme süresini +10% azaltır```");
    }
    if (msg.content.toLowerCase() === '!cons') {
        msg.channel.send("```***CONSTITUTION*** " +
        "\nÖzellik Bonusları " +
        "\n50 CON Puanı verdiğiniz zaman:" +
        "\nTüketilebilen bütün sağlık eşyaları etkisi +20% artar." +
        "\nOdunculuk hızını +10% artırır." +
        "\n100 CON Puanı verdiğiniz zaman: " +
        "\nMaximum canınız fiziksel zırhınızın +10% kadar artar." +
        "\nToplayılıcılık aletlerindeki dayanıklılık +10% artırır." +
        "\n150 CON Puanı verdiğiniz zaman: " +
        "\nKritik hasar alınımını karşı %10 dayanaklılık artar." +
        "\nOdunculuk elde edilen malzemelerin ağırlığını -10% azaltır." +
        "\n200 CON Puanı verdiğinizde:" +
        "\nZırhınızı +20% artırır." +
        "\nOdunculuk ağaç kesme hızınızı +10% artar." +
        "\n250 CON Puanı verdiğiniz zaman: " +
        "\nCanınız tamamen dolu iken aldığınız hasar +80% azaltır." +
        "\nOdunculuktan elde edilen materyalleri +10% arttırır." +
        "\n300 FOC Puanı verdiğiniz zaman " +
        "\nSersemleme, yavaşlatma, bağlama büyülerinin süresini %20 artırır. tek vuruşta bir ağacı kesme şansını %25 artırır.```");
    }
    if (msg.content.toLowerCase() === '!weaponggems') {
        msg.channel.send("```Abbysal: Silahın temel hasarı veya INT te bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Void hasara dönüştürür.```" +
        "\n```Arboreal: Silahın temel hasarı veya FOCUS ta bakılarak hanfisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Nature hasara dönüştürür.```" +
        "\n```Brash: Canı tam olan hedeflere karşı (T1)15% , (T2)20% (T3)25% (T4)30% hasar artışı sağlar.```" +
        "\n```Calming (T1)-4% , (T2)-6% (T3)-8% (T4)-10% daha az tehdit oluşturursunuz.```" +
        "\n```Cruel: Yavaşlatılmış, sersemletilmiş veya sabitlenmiş düşmanlara karşı (T1)6% , (T2)8% (T3)10% (T4)12%```" +
        "\n```Electrified: Silahın temel hasarı veya INT'te bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Ligtning hasara dönüştürür.```" +
        "\n```Exhilarete: Eğer canınız 30% altındaysa (T1)12% , (T2)16% (T3)20% (T4)24% hasarınız artar.```" +
        "\n```Frozen: Silahın temel hasarı veya INT'te bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% Ice hasara dönüştürür.```" +
        "\n```Gambit: Staminanız dolu değilse (T1)+6% , (T2)+9% (T3)+12% (T4)+15% hasar artışı kazanırsınız.```" +
        "\n```Ignited: Silahın temel hasarı veya INT'te bakılarak hangisi yüksek ise hasarın (T1)20% , (T2)30% (T3)40% (T4)50% FIRE hasara dönüştürür.```" +
        "\n```Lucky: (T1)+0.25% , (T2)+0.35% (T3)0.45% (T4)5% Sandıklardan ve canavarlardan nadir eşyalar düşme şansını artırır.```" +
        "\n```Opportunist: Eğer düşmanlarınızın canı %30 dan daha az ise (T1)+8% , (T2)+12% (T3)+16% (T4)200% daha fazla hasar vurmanızı sağlar.```" +
        "\n```Rally: eğer canınız full ise (T1)+6% , (T2)+9% (T3)+12% (T4)+15% dostlarınızı iyileştirme artışı ve hasar artışı kazanırsınız.```" +
        "\n```Rataliate: Düşman tarafından 3 vuruş aldıktan sonra (T1)+6% , (T2)+9% (T3)+12% (T4)+15% oranda hasar artışı kazanırınız.```" +
        "\n```Taunting: Taunt aktif iken (T1)100% , (T2)200% (T3)250% (T4)300% düşmanlarınıza tehdit oluştururusnuz.```");
    }
    if (msg.content.toLowerCase() === '!armorgems') {
        msg.channel.send("```Abyssal Ward:(T1)+2.5% , (T2)+3.5% (T3)+5.0% (T4)+6.0% Void (Hiçlik) Hasarı Emilimi.```" +
        "\n```Arcane Ward: (T1)+2.0% , (T2)+2.5% (T3)3.0% (T4)3.75% Arcane (Gizemli) Hasarı Emilimi.```" +
        "\n```Calming (T1)-4.0% , (T2)-6% (T3)-8.0% (T4)-10% daha az tahdit oluşturursunuz.```" +
        "\n```Elemental Ward: (T1)+1.0% , (T2)+1.5% (T3)+2.0% (T4)+2.5% Elemental (Eklement) Hasar Emilimi.```" +
        "\n```Fire Ward: (T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Fire (Ateş) Hasar Emilimi.```" +
        "\n```Ice Ward: (T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Ice (Buz) Hasar Emilimi.```" +
        "\n```Lightning Ward: (T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Lightning (Elektirik) Hasar Emilimi.```" +
        "\n```Lucky: (T1)+0.25% , (T2)+0.35% (T3)+0.45% (T4)+5.0% Sandıklardan ve canavlaran nadir eşyalar düşme şansını arttırır.```" +
        "\n```Nature Ward: (T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Nature (Doğa) Hasar Emilimi.```" +
        "\n```Pyhsical Ward: (T1)+1.0% , (T2)+1.5% (T3)+2.0% (T4)+2.5% Physical (Fiziksel) Hasar Emilimi.```" +
        "\n```Slash Ward: (T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Slash Hasar Emilimi.```" +
        "\n```Spectral Ward: (T1)+0.75% , (T2)+1.13 (T3)+1.5% (T4)+1.88% Elemental ve (T1)+0.25% , (T2)+0.38 (T3)+0.5% (T4)+0.63% Fiziksel Hasar Emilimi.```" +
        "\n```Strike Ward: (T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Strike Hasar Emilimi.```" +
        "\n```Thrust Ward: (T1)+2.0% , (T2)+2.5% (T3)+3.0% (T4)+3.75% Thrust Hasar Emilimi.```" +
        "\n```Wilderness Ward: (T1)+0.75% , (T2)+1.13% (T3)+1.5% (T4)+1.88% Fiziksel ve (T1)0.25% , (T2)0.38% (T3)0.5 (T4)0.63% Elemental Hasar Emilimi.```");
    }
    if (msg.content.toLowerCase() === '!sword') {
        msg.channel.send("```Birincil Strength Silahları" +
        "\nSword ½ Shield:" +
        "\nBirincil Strength çarpan oranı: 0.9X" +
        "\nİkincil Dexterity çarpan oranı: 0.65X" +
        "\nHasar Türü: Slash/Thrust" +
        "\nKullanılan Bufflar: Hız," +
        "\nKullanılan Anti-Bufflar: Yavaşlatma, Parçalama, Yereserme, Zayıflatma, Sersemletme```");
    }
    if (msg.content.toLowerCase() === '!great') {
        msg.channel.send("```Birincil Strength Silahları" +
        "\nGreat Axe:" +
        "\nBirincil Strength çarpan oranı: 1.0X" +
        "\nİkincil Dexterity çarpan oranı: NaN" +
        "\nHasar Türü: Slash" +
        "\nKullanılan Bufflar: Haste, Fortify, Grit" +
        "\nKullanılan Anti-Bufflar: NaN```");
    }
    if (msg.content.toLowerCase() === '!hammer') {
        msg.channel.send("```Birincil Strength Silahları" +
        "\nWar Hammer:" +
        "\nBirincil Strength çarpan oranı: 1.0X" +
        "\nİkincil Dexterity çarpan oranı: NaN" +
        "\nHasar Türü: Strike" +
        "\nKullanılan Bufflar: Haste, Empower, Fortify." +
        "\nKullanılan Anti-Bufflar: Rend, Exhaust, Stun, Weaken, Slow.```");
    }
    if (msg.content.toLowerCase() === '!hatchet') {
        msg.channel.send("```Birincil Strength Silahları" +
        "\nHatchet:" +
        "\nBirincil Strength çarpan oranı: 0.9X" +
        "\nİkincil Dexterity çarpan oranı: 0.65X" +
        "\nHasar Türü: Slash" +
        "\nKullanılan Bufflar: Empower, Fortify, Haste." +
        "\nKullanılan Anti-Bufflar: Root, Rend, Slow, Disease, Weaken.```");
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

client.on('message', message => { //Embed Message Yazma
    if (message.content.toLowerCase() === 'deneme'){
        const kanal = new MessageEmbed()

        .setTitle('INT')
        .setDescription('Kanal')
        .setAuthor('Deneme Bot')
        .setColor("RANDOM")
        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HdjQEocFWKFPEUl3bAWQallXc9wnYu28Yw&usqp=CAU')
        .addField(':hearts: ', 'Video beğenmeyi unutmayın!');
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
    if (message.content.startsWith('oylama')){
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




client.login('ODgwMDY4MDcxMjQxNDE2NzQ1.YSY5Qw._RJlztBnx9pa9J6GVgtiyfjzBKY');
