const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run(client) {
    let serverIn = await client.guilds.cache.size;
    console.log(client.user.tag + ' has logged in succesfully.');
    client.user.setPresence({
      status: 'dnd',
      activity: {
        name: `${serverIn} servers!`,
        type: "WATCHING"
      }
    })
    .catch(console.error);
  }
}
