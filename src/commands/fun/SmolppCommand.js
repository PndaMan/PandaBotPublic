const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SmollppCommand extends BaseCommand {
  constructor() {
    super('smolpp', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send(`https://cdn.discordapp.com/attachments/842626061266059284/858656034385821706/avatars-KVe5Ypxk8PPjecSl-zevpOg-t240x240.png`);
  }
}