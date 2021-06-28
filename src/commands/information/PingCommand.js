const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'information', []);
  }

  async run(client, message, args) {
    const pingEmbed = new Discord.MessageEmbed()
      .setColor(0x42F56C)
      .setTitle('Pong!:ping_pong:')
      .setDescription(`Latency: **\`${client.ws.ping}ms\`**`);

    return message.channel.send(pingEmbed);

  }
}