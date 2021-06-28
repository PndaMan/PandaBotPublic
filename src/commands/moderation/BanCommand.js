const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    //Variables
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");

    //Embeds
    const personPermissionEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("You do not have the right permissions to use that command!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const clientPermissionEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("I do not have the right permissions to use that command!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const noUserEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("You must state a user to ban!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const notInServerEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("The user stated is not in the server!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const errorEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("I am not able to ban the user mentioned!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`Succesfully banned ${mentionedMember.user.tag}`)
      .setDescription(`Reason: ${reason}`)
      .setColor(0x42F56C)
      .setTimestamp()

    const dmEmbed = new Discord.MessageEmbed()
      .setTitle(`You have been banned from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor(0xff3f3f)
      .setTimestamp()

    //Permission Checking
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(personPermissionEmbed);
    if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(clientPermissionEmbed);

    //Input Checking
    if (!args[0]) return message.channel.send(noUserEmbed);
    if (!reason) reason = "No reason given.";
    if (!mentionedMember) return message.channel.send(notInServerEmbed);
    if (!mentionedMember.bannable) return message.channel.send(errorEmbed);

    //Executing
    await mentionedMember.send(dmEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      days: 7,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send(banEmbed));
  }
}
