const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DuckCommand extends BaseCommand {
  constructor() {
    super('duck', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send(`https://cdn.discordapp.com/attachments/842626061266059284/858655203275964456/c9a0a6317ab1235647e7e8f3d5f1bc13.png`);
  }
}