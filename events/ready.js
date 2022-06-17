var items = ['Yes', 'No', 'Maybe'];
var item = items[Math.floor(Math.random() * items.length)];

setInterval(myTimer, 1000);

function myTimer() {
  client.user.setPresence(client.config.presence(item);
}

module.exports = async (client) => {
  client.user.setPresence(client.config.presence);
  console.log("Successfully Logged in as " + client.user.tag);
};
