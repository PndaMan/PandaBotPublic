const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    //Variables
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    let userID = args[0];

    //Embeds
    const personPermissionEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("You do not have the right permissions to use that command!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const clientPermissionEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("I dont have the right permissions!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const noUserEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("You must state a user to unban!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const notBannedEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("The user ID stated is not banned!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const errorEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("Something went wrong unbanning the user ID stated!")
      .setColor(0xff3f3f)
      .setTimestamp()

    const unbanEmbed = new Discord.MessageEmbed()
      .setTitle(`Succesfully unbanned somebody from ${message.guild.name}`)
      .setDescription(`Reason: ${reason}`)
      .setColor(0x42F56C)
      .setTimestamp()

    const idEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('The ID stated is not a number!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const noBansEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('This server has nobody banned on it!')
      .setColor(0xff3f3f)
      .setTimestamp()

    //Permission Checking
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(personPermissionEmbed);
    if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(clientPermissionEmbed);
    if (isNaN(args[0])) return message.channel.send()

    //Input Checking
    if (!args[0]) return message.channel.send(noUserEmbed);
    if (!reason) reason = "No reason given.";

    //Executing
    message.guild.fetchBans().then(async bans => {
      if (bans.size == 0) return message.channel.send(noBansEmbed);
      let bUser = bans.find(b => b.user.id == userID);
      if (!bUser) return message.channel.send(notBannedEmbed);
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        message.channel.send(errorEmbed);
      }).then(() => {
        message.channel.send(unbanEmbed);
      });
    });
  }
}
