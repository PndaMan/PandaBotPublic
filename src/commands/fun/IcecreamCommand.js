const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class IcecreamCommand extends BaseCommand {
  constructor() {
    super('icecream', 'fun', []);
  }

  async run(client, message, args) {
    message.channel.send('🍦');
  }
}