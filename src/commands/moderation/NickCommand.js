const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NickCommand extends BaseCommand {
  constructor() {
    super('nick', 'moderation', []);
  }

  async run(client, message, args) {
    //Variables
    const mentionedMember = message.mentions.members.first();
    const nickName = args.slice(1).join(" ");

    //Embeds
    const personPermissionEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('You do not have permission to use this command!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const clientPermissionEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('I dont have the right permissions!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const noMemberEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('Please state a member!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const notInServerEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('The mentioned member is not in the server!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const nickEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('Please state a nickname for the member!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const nameEmbed = new Discord.MessageEmbed()
      .setTitle(`Success!`)
      .setDescription('Succesfully chnaged the users nickname!')
      .setColor(0x42F56C)
      .setTimestamp()

    const errorEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('I cannot add that nickname to the user due to an error!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const roleEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('I cannot add that nickname to the user due to their role being higher than mine!')
      .setColor(0xff3f3f)
      .setTimestamp()

    //Permission Checking
    if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(personPermissionEmbed);
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(clientPermissionEmbed);

    //Input Checking
    if (!args[0]) return message.channel.send(noMemberEmbed);
    if (!mentionedMember) return message.channel.send(notInServerEmbed);
    if (!nickName) return message.channel.send(nickEmbed);
    if (!mentionedMember.kickable) return message.channel.send()

    //Executing
    await mentionedMember.setNickname(nickName).catch(err => console.log(err).then(message.channel.send(errorEmbed)));

  }
}
