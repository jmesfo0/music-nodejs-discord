var items = ['Yes', 'No', 'Maybe'];
var item = items[Math.floor(Math.random() * items.length)];

module.exports = async (client) => {
  client.user.setPresence(client.config.presence);
  console.log("Successfully Logged in as " + client.user.tag);
};
