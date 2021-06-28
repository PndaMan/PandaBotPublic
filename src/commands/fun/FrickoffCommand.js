const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FrickoffCommand extends BaseCommand {
  constructor() {
    super('frickoff', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('Frick off');
  }
}