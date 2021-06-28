const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PollCommand extends BaseCommand {
  constructor() {
    super('poll', 'moderation', []);
  }

  async run(client, message, args) {
    const pollTopic = message.content.slice(5);
    const noVoteEmbed = new Discord.MessageEmbed()
      .setTitle('Error!')
      .setDescription("You must have something to vote for!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    const noQuestionEmbed = new Discord.MessageEmbed()
      .setTitle('Error!')
      .setDescription("Include a ? in your vote!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    const pollEmbed = new Discord.MessageEmbed()
      .setTitle('Poll Started!')
      .setDescription(pollTopic)
      .setColor(0x42F56C)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    
    if (!args) return message.reply(noVoteEmbed)
    if (!message.content.includes("?")) return message.reply(noQuestionEmbed)
    message.channel.send(pollEmbed).then(sentMessage => {
      sentMessage.react(`✅`);
      sentMessage.react(`⛔`);
    });
  }
}