const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'general', []);
  }

  async run(client, message, args) {
    const sectionEmbed = new Discord.MessageEmbed()
      .setTitle('Bot Help Sections')
      .setColor(0x42F56C)
      .setDescription('Use .help sectionName to access another section.\nSections:\ninformation\nfun\nmoderation\ntool')
      .addField('Fun Commands', 'Commands that all users can user that are for fun and have no purpose.')
      .addField('Information commands', 'Commands that return some form of important information.')
      .addField('Moderation commands', 'Commands that are for moderation purposes within a server.')
      .addField('Tool commands', 'Commands that add features to a server.')
      .setFooter(client.user.tag, client.user.displayAvatarURL());
 
const infoEmbed = new Discord.MessageEmbed()  
   .setTitle('Information Commands.')
   .setColor(0x42F56C)
   .addField('Help Commands', 'This commands shows the user all the commands possible.')
   .addField('Ping Command', 'This commands shows the latency of the bot!.')
   .addField('Social Command', 'Displays social media in an embed.');

 
const funEmbed = new Discord.MessageEmbed()
   .setTitle('Fun Commands.')
   .setColor(0x42F56C)
   .addField('Oman Command', 'Make bot say oman')
   .addField('Ice Cream Command', 'Ice Cream Dispenser')
   .addField('Say Command', 'Make the bot say a message to the channel.');

const moderationEmbed = new Discord.MessageEmbed()
   .setTitle('Moderation Commands.')
   .setColor(0x42F56C)
   .addField('Ban Command', 'Bans a member from the server')
   .addField('Kick Command', 'Kicks a member from the server')
   .addField('Nickname Command', 'Changes a members nickname in a server')
   .addField('Nuke Command', 'Clones a channel and deletes the old one.')
   .addField('Purge Command', 'Purges messages within a channel')
   .addField('Unban Command', 'Unbans a member from the server')
   .addField('Unmute Command', 'Unmutes a member in a server');

 
const toolEmbed = new Discord.MessageEmbed()
   .setTitle('Tool Commands.')
   .setColor(0x42F56C)
   .addField('Coming Soon', 'smh');
 
if (!args[0]) return message.channel.send(sectionEmbed);
if (args[0] == 'information') return message.channel.send(infoEmbed);
else if (args[0] == 'fun') return message.channel.send(funEmbed);
else if (args[0] == 'tool') return message.channel.send(toolEmbed);
else if (args[0] == 'moderation') return message.channel.send(moderationEmbed);
  }
}