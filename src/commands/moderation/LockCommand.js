const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('lock', 'moderation', []);
  }

  async run(client, message, args) {
    //Variables
    const role = message.guuld.roles.cache.get('855471025475026954')
    let lockChannel = message.mentions.channels.first();

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

    const testPermissionEmbed = new Discord.MessageEmbed()
      .setTitle("Error!")
      .setDescription("")
      .setColor(0xff3f3f)
      .setTimestamp()



    //Permission Checking
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(personPermissionEmbed);
    if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send(clientPermissionEmbed);

    //Input Checking
    if (!lockChannel) return message.channel;

    //Executing
    await lockChannel.updateOverwrite(role, {
      SEND_MESSAGES: false
    }).catch(err => console.log(err));

  }
}
