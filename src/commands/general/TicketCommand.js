const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class TicketCommand extends BaseCommand {
  constructor() {
    super('ticket', 'general', []);
  }

  async run(client, message, args) {
    const ticketOpenEmbed = new Discord.MessageEmbed()
      .setTitle(`Ticket Opened!`)
      .setDescription('We will be with you shortly!')
      .setColor(0x42F56C)
      .setTimestamp()

    const channel = await message.guild.channels.create(`ticket: ${message.author.tag}`);
    channel.updateOverwrite(message.guild.id, {
     SEND_MESSAGE: false,
     VIEW_CHANNEL: false,
   });
   channel.updateOverwrite(message.author, {
     SEND_MESSAGE: true,
     VIEW_CHANNEL: true,
   });
   const reactionMessage = await channel.send(ticketOpenEmbed);
   try {
      await reactionMessage.react("🔒");
      await reactionMessage.react("⛔");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }
    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("MANAGE_CHANNELS"),
      { dispose: true }
    );
    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🔒":
          channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
          break;
        case "⛔":
          channel.send("Deleting this channel in 5 seconds!");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });
    message.channel.send(`We will be right with you! ${channel}`).then((msg) => {
      setTimeout(() => msg.delete(), 7000);
      setTimeout(() => message.delete(), 3000);
    });
  }
}
