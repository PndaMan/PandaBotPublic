const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    const amountToDelete = Number(args[0], 10);
    const errorEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("You do not have permission to use that command!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    const oldEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("I was unable to delete the amount stated! Make sure they are less than 14 days old!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    const successEmbed = new Discord.MessageEmbed()
      .setTitle("Messages Purged!")
      .setDescription(`Deleted ${amountToDelete} messages!`)
      .setFooter(message.author.tag ,message.author.displayAvatarURL())
      .setColor(0x42F56C)
      .setTimestamp()
    const lengthEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("The number stated must be between 2 and 100!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    const wholeNumberEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("The number stated must be a whole number!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    const validEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("The number stated is not a valid number!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    const numberEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("You must state a number of messages to purge!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());
    const permissionEmbed = new Discord.MessageEmbed()
      .setTitle(`Error!`)
      .setDescription("I do not have permission to use that command!")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(errorEmbed);
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(permissionEmbed);
    if (!args[0]) return message.channel.send(numberEmbed);

    if (isNaN(amountToDelete)) return message.channel.send(validEmbed);
    if (!Number.isInteger(amountToDelete)) return message.channel.send(wholeNumberEmbed);
    if (!amountToDelete || amountToDelete < 1 || amountToDelete > 100) return message.channel.send(lengthEmbed);
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete + 1
    });

    try {
      await message.channel.bulkDelete(fetched)
        .then(message.channel.send(successEmbed));
    } catch (err) {
        console.log(err);
        message.channel.send(oldEmbed);
    }
  }
}
