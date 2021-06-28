const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  run(client, message, args) {
    const messageToSay = args.join(" ");
    const errorEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("I am not able to say that message!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    const sayEmbed = new Discord.MessageEmbed()
      .setTitle("Say command:")
      .setDescription(messageToSay)
      .setFooter(message.author.tag ,message.author.displayAvatarURL())
      .setColor(0x42F56C)
      .setTimestamp()
    try {
      message.channel.send(sayEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send(errorEmbed)
    }
  }
}
