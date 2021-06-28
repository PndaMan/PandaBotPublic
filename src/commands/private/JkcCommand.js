const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class JkcCommand extends BaseCommand {
  constructor() {
    super('jkc', 'private', []);
  }

  run(client, message, args) {
    if(!message.author.id == "403564076736839680") return;
    message.channel.send('Bad Dev!');
  }
}