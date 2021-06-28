const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');


module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'information', []);
  }

  async run(client, message, args) {
    const youtubeEmbed = new Discord.MessageEmbed()
      .setTitle("PndaMan Youtube:")
      .setDescription('')
      .setURL('https://www.youtube.com/channel/UCYJVr8EurhdywhpwyXSYFVw')
      .setFooter("PndaMan", "https://yt3.ggpht.com/DAWwxaMo-sYRWD3MDD2m8aDCEuBEGwXM7fUuuU5uG9f6v4E1zjqzY65B5fWFheFjX2BwtDZtxA=s88-c-k-c0x00ffffff-no-rj-mo")
      .setColor(0xff3f3f)
      .setTimestamp()
      .setThumbnail('https://cdn.discordapp.com/attachments/853268721472503818/855052094315036712/panda.png')
      .addField('Check out PndaMan\'s Youtube Channel!', 'NEW DEVELOPMENT VIDEOS COMMING SOON!!! (Click the link above!)')
    const discordEmbed = new Discord.MessageEmbed()
      .setTitle("PandaBot\'s Support Server:")
      .setDescription('')
      .setURL('https://discord.gg/EbfNgpjDUt')
      .setFooter("PandaBot Support Server!", "https://cdn.discordapp.com/attachments/853268721472503818/855052094315036712/panda.png")
      .setColor(0x42F56C)
      .setTimestamp()
      .setThumbnail('https://cdn.discordapp.com/attachments/853268721472503818/855052094315036712/panda.png')
      .addField('Check out where PndaBot was made!', 'Come join us and ask any questions you have about the mightiest of Pandas! (Click the link above!)')

    await message.channel.send(youtubeEmbed).catch(err => console.log(err));
    await message.channel.send(discordEmbed).catch(err => console.log(err));
  }
}
