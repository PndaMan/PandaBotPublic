const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BipitybopityCommand extends BaseCommand {
  constructor() {
    super('bipitybopity', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('Get off my property');
  }
}