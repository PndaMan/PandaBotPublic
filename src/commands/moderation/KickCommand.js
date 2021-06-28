const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command!")
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason given";
    const dmEmbed = new Discord.MessageEmbed()
      .setTitle(`You were kicked from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`Succesfully kicked ${mentionedMember.user.tag} from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor(0x42F56C)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    if (!args[0]) {
      const errorEmbed = new Discord.MessageEmbed()
        .setTitle(`Error!`)
        .setDescription("You need to state a user to kick!")
        .setColor(0xff3f3f)
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL());
        return message.channel.send(errorEmbed);
    }
    if (!mentionedMember) {
      const errorEmbed = new Discord.MessageEmbed()
        .setTitle(`Error!`)
        .setDescription("The member mentioned is not in the server!")
        .setColor(0xff3f3f)
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL());
        return message.channel.send(errorEmbed);
    
    if (!mentionedMember.kickable) {
      const errorEmbed = new Discord.MessageEmbed()
        .setTitle(`Error!`)
        .setDescription("I was unable to kick this user!")
        .setColor(0xff3f3f)
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL());
        return message.channel.send(errorEmbed);
    }
    }
    try {
      message.channel.send(kickEmbed);
      await mentionedMember.send(dmEmbed)
    } catch (err){
      console.log('I was unabled to send a message to this user!')
    }
    try {
      await mentionedMember.kick(reason);
    } catch (err) {
      console.log(err);
      const errorEmbed = new Discord.MessageEmbed()
        .setTitle(`Error!`)
        .setDescription("I was unable to kick the user from the server!")
        .setColor(0xff3f3f)
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL());
        return message.channel.send(errorEmbed);
    }
  }
}
