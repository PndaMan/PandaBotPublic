const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class EvalCommand extends BaseCommand {
  constructor() {
    super('eval', 'owner', []);
  }

  run(client, message, args) {
    if(!message.author.id == "403564076736839680") return;
    var result = message.content.split(" ").slice(1).join(" ")
        let evaled = eval(result);
        console.log(result);
  }
}
