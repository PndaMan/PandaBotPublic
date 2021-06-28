const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class OmanCommand extends BaseCommand {
  constructor() {
    super('oman', 'fun', []);
  }

  async run(client, message, args) {
    message.channel.send('oman');
  }
}