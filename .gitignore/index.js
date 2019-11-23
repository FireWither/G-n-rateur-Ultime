const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', message => {
    if(message.content.startsWith('!dmall')){
        if(message.author.id == "572346751051104266"){
            msg=message.content.slice(7)
            var Count;
            for(Count in bot.users.array()){
                var User = bot.users.array()[Count];
                bot.users.get(User.id).send(msg);
            }
            
        }
        message.delete(10);
    }
    //}
})
bot.login(process.env.TOKEN);
