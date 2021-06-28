const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class XdCommand extends BaseCommand {
  constructor() {
    super('xd', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('xD');
  }
}