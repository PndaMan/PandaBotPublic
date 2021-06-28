const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

  async run(client, message, args) {
    //Variables
    let reason = args.join(" ");
    const nukeChannel = message.channel;

    //Embeds
    const personPermissionEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('You do not have permission to use this command!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const clientPermissionEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('I do not have permission to use this command!')
      .setColor(0xff3f3f)
      .setTimestamp()

    const deletableEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription('This channel is not deletable!')
      .setColor(0xff3f3f)
      .setTimestamp()


    //Permission Checking
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(personPermissionEmbed);
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(clientPermissionEmbed);

    //Input Checking
    if (!reason) reason = "No reason given";
    if (!nukeChannel.deletable) return message.channel.send(deletableEmbed);

    //Executing
    await nukeChannel.clone().catch(err => console.log(err));
    await nukeChannel.delete().catch(err => console.log(err));

  }
}
