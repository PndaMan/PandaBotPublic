const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class OmanCommand extends BaseCommand {
  constructor() {
    super('shutdown', 'owner', []);
  }

  async run(client, message, args) {
    const restartEmbed = new Discord.MessageEmbed()
      .setTitle(`Shutdown!`)
      .setDescription("Shutting down bot...")
      .setColor(0x42F56C)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    
    const errorEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("You cannot use this command!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    
    if (message.author.id !== '403564076736839680') {
      return message.channel.send(errorEmbed)
    }
    await message.channel.send(restartEmbed)
    process.exit();
  }
}