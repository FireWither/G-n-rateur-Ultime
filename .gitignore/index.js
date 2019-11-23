const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('message', message => {
    if(message.content.startsWith('!dmall')){
        if(message.member.hasPermission("ADMINISTRATOR")){
            msg=message.content.slice(7)
            var Count;
            for(Count in message.guild.members.array()){
                var User = message.guild.members.array()[Count];
                message.guild.members.get(User.id).send(msg);
            }
            
        }
        message.delete(10);
    }
})
bot.login(process.env.TOKEN);
